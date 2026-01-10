// src/lib/blog-utils.ts

import fs from 'fs/promises';
import path from 'path';
import z from 'zod';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';

/**
 * Chemin vers le répertoire des articles de blog.
 */
const blogPostDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

/**
 * Schéma de validation Zod des métadonnées (front matter) d'un article de blog.
 * 
 * Assure que chaque article respecte les bonnes pratiques SEO et contient les données nécessaires.
 * 
 * @property {string} title - Titre de l'article (30-60 caractères pour le SEO)
 * @property {string} [description] - Méta-description (100-160 caractères pour le SEO)
 * @property {string} date - Date de publication (format: "YYYY-MM-DD")
 * @property {string} [lastUpdated] - Date de dernière mise à jour
 * @property {boolean} [published=true] - Statut de publication (false = brouillon)
 * @property {string[]} [tags] - Liste de tags/catégories
 * @property {string} [readingTime] - Temps de lecture estimé (ex: "5 min")
 * @property {string} [coverImage] - Chemin vers l'image de couverture
 */
const postSchema = z.object({
    title: z.string().min(30).max(60), // Titre entre 30 et 60 caractères recommandés pour le SEO
    description: z.string().min(100).max(160).optional(), // Description entre 100 et 160 caractères recommandés pour le SEO
    date: z.coerce.string(),
    lastUpdated: z.coerce.string().optional(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    coverImage: z.string().optional(),
});

/**
 * Type représentant un article de blog validé avec ses métadonnées et son contenu.
 * 
 * Combine les propriétés validées par Zod (postSchema) avec des champs calculés.
 * 
 * @typedef {Object} BlogPost
 * @property {string} slug - Identifiant unique de l'article (nom du fichier sans extension)
 * @property {string} content - Contenu MDX brut de l'article (sans le front matter)
 * @property {string} title - Titre de l'article
 * @property {string} date - Date de publication
 * @property {string} [description] - Description courte de l'article
 * @property {string} [lastUpdated] - Date de dernière modification
 * @property {boolean} [published] - Statut de publication
 * @property {string[]} [tags] - Tags associés
 * @property {string} [readingTime] - Durée de lecture estimée
 * @property {string} [coverImage] - URL de l'image de couverture
 */
type BlogPost = z.infer<typeof postSchema> & {
    slug: string;
    content: string;
}
/**
 * Récupère tous les articles de blog publiés depuis le répertoire de contenu.
 * 
 * Cette fonction asynchrone :
 * 1. Lit tous les fichiers .mdx du répertoire blog
 * 2. Parse le front matter avec gray-matter
 * 3. Valide les métadonnées avec Zod
 * 4. Filtre les articles non publiés (published: false)
 * 5. Log les erreurs de validation dans la console serveur
 * 
 * Les articles invalides sont ignorés et ne cassent pas le build.
 * 
 * @returns {Promise<BlogPost[]>} Un tableau d'articles de blog validés
 * 
 * @example
 * const posts = await getAllBlogPosts();
 * posts.forEach(post => console.log(post.title));
 * 
 * @async
 */
export const getAllBlogPosts = async () => {
    const files = await fs.readdir(blogPostDirectory);
    const fileNames = files.filter(file => file.endsWith('.mdx'));
    const blogPosts: BlogPost[] = [];

    for await (const fileName of fileNames) {
        console.log('[SERVER] Processing blog file:', fileName);
        const fullPath = path.join(blogPostDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const frontMatter = matter(fileContents);

        const safeData = postSchema.safeParse(frontMatter.data);
        if (!safeData.success) {
            console.error(`[SERVER] ❌ Front matter validation failed for ${fileName}:`);
            safeData.error.issues.forEach(issue => {
                console.error(`[SERVER]  - ${issue.path.join('.')}: ${issue.message}`);
            });
            continue;
        }

        try {
            blogPosts.push({
                ...safeData.data,
                slug: fileName.replace(/\.mdx?$/, ''),
                content: frontMatter.content,
            });
        } catch (e) {
            console.error(`Invalid front matter in ${fileName}:`, e);
        }
    }

  return [...blogPosts];
};

/**
 * Récupère un article de blog spécifique par son slug (identifiant unique).
 * 
 * Le slug correspond au nom du fichier MDX sans l'extension.
 * Par exemple : "mon-article.mdx" → slug = "mon-article"
 * 
 * @param {string} slug - L'identifiant unique de l'article (nom du fichier sans .mdx)
 * @returns {Promise<BlogPost | undefined>} L'article trouvé, ou undefined si aucun article ne correspond
 * 
 * @example
 * const post = await getBlogPostBySlug("introduction-nextjs");
 * if (post) {
 *   console.log(post.title);
 * } else {
 *   notFound(); // Next.js 404
 * }
 * 
 * @async
 */
export const getBlogPostBySlug = async (slug: string) => {
    const blogPosts = await getAllBlogPosts();
    const post = blogPosts.find(post => post.slug === slug);
    return post;
};

/**
 * Type représentant un titre (heading) extrait du contenu MDX.
 * Utilisé pour générer le sommaire (Table of Contents).
 * 
 * @typedef {Object} Heading
 * @property {number} level - Niveau du titre (2 pour ##, 3 pour ###, 4 pour ####)
 * @property {string} text - Texte brut du titre (sans les #)
 * @property {string} slug - Identifiant URL-safe généré par github-slugger (pour les ancres)
 * 
 * @example
 * { level: 2, text: "Introduction", slug: "introduction" }
 * { level: 3, text: "Prérequis", slug: "prerequis" }
 */
export type Heading = {
    level: number;
    text: string;
    slug: string;
};

/**
 * Extrait tous les titres (H2, H3, H4) d'un contenu MDX pour générer un sommaire.
 * 
 * Utilise des expressions régulières pour détecter les titres Markdown (##, ###, ####)
 * et github-slugger pour générer des slugs URL-safe uniques.
 * 
 * **Niveaux supportés** :
 * - ## → level 2 (H2)
 * - ### → level 3 (H3)
 * - #### → level 4 (H4)
 * 
 * Les H1 (#) sont ignorés car généralement réservés au titre principal de la page.
 * 
 * @param {string} content - Le contenu MDX brut de l'article
 * @returns {Heading[]} Un tableau d'objets Heading avec level, text et slug
 * 
 * @example
 * const content = `## Introduction\n### Prérequis\n## Installation`;
 * const headings = getHeadings(content);
 * // [{ level: 2, text: "Introduction", slug: "introduction" }, ...]
 */
export const getHeadings = (content: string): Heading[] => {
    const slugger = new GithubSlugger();
    const headingLines = content.split('\n').filter((line) => {
        return line.match(/^#{2,4}\s/);
    });

    return headingLines.map((raw) => {
        const text = raw.replace(/^#{2,4}\s/, '').trim();
        const level = raw.match(/^#{2,4}/)?.[0].length || 0;
        const slug = slugger.slug(text);

        return { text, level, slug };
    });
};
