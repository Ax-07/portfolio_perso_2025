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
 * Schéma de validation des métadonnées d'un article de blog.
 */
const postSchema = z.object({
    title: z.string().min(30).max(60), // Titre entre 45 et 60 caractères recommandés pour le SEO
    description: z.string().min(100).max(160).optional(), // Description entre 100 et 160 caractères recommandés pour le SEO
    date: z.coerce.string(),
    lastUpdated: z.coerce.string().optional(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    coverImage: z.string().optional(),
});

/**
 * Type représentant un article de blog validé.
 */
type BlogPost = z.infer<typeof postSchema> & {
    slug: string;
    content: string;
}
/**
 * Récupère la liste des articles de blog disponibles.
 * @returns 
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
 * Récupère un article de blog par son slug.
 * @param slug 
 * @returns 
 */
export const getBlogPostBySlug = async (slug: string) => {
    const blogPosts = await getAllBlogPosts();
    const post = blogPosts.find(post => post.slug === slug);
    return post;
};

export type Heading = {
    level: number;
    text: string;
    slug: string;
};

/**
 * Extrait les titres (headings) d'un contenu MDX.
 * @param content 
 * @returns 
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
