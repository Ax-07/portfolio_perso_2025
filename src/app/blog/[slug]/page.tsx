// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug, getHeadings } from "@/lib/blog-utils";
import { Mdx } from "@/features/mdx/mdx";
import { TableOfContents } from "@/features/mdx/TableOfContents";
import { BlogStructuredData } from "@/components/seo/blog-structured-data";
import Image from "next/image";
import { JSX } from "react";
import { Metadata } from "next";

/**
 * Génère les métadonnées SEO dynamiques pour chaque article de blog.
 * 
 * Cette fonction est appelée par Next.js pour générer les balises meta de la page,
 * incluant Open Graph, Twitter Cards, et les métadonnées standards.
 * 
 * **Fonctionnalités SEO** :
 * - Titre et description optimisés
 * - Open Graph pour le partage social (Facebook, LinkedIn)
 * - Twitter Cards avec grande image
 * - URL canonique pour éviter le duplicate content
 * - Métadonnées d'article (date de publication, auteur, tags)
 * - Images optimisées pour les préviews (1200x630px)
 * 
 * @param {Object} props - Props du composant
 * @param {Promise<{ slug: string }>} props.params - Paramètres de route contenant le slug
 * @returns {Promise<Metadata>} Objet metadata pour Next.js
 * 
 * @async
 */
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-perso-2025.vercel.app";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.coverImage 
    ? `${siteUrl}${post.coverImage}` 
    : `${siteUrl}/og-image-default.png`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Xavier Affringue" }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: "Xavier Affringue - Blog",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "fr_FR",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastUpdated || post.date,
      authors: ["Xavier Affringue"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: "@votre_twitter",
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

/**
 * Génère les paramètres statiques pour le pré-rendu des pages d'articles (SSG).
 * 
 * Cette fonction est appelée au moment du build pour générer statiquement
 * toutes les pages d'articles de blog. Elle récupère la liste complète des articles
 * et retourne un tableau de slugs pour que Next.js puisse générer les pages HTML.
 * 
 * **Avantages du SSG** :
 * - Pages générées au build = temps de chargement ultra-rapide
 * - Hébergeable sur CDN (pas de serveur Node.js requis)
 * - Meilleur SEO (contenu immédiatement disponible pour les crawlers)
 * - Pas de requête base de données au runtime
 * 
 * **Fonctionnement** :
 * 1. Récupération de tous les articles via `getAllBlogPosts()`
 * 2. Extraction des slugs de chaque article
 * 3. Next.js génère `/blog/[slug]` pour chaque slug retourné
 * 
 * @returns {Promise<Array<{ slug: string }>>} Tableau d'objets contenant les slugs des articles
 * 
 * @example
 * // Au build, si vous avez 3 articles :
 * // - introduction.mdx
 * // - guide-nextjs.mdx
 * // - tutoriel-mdx.mdx
 * // 
 * // Génère automatiquement :
 * // - /blog/introduction
 * // - /blog/guide-nextjs
 * // - /blog/tutoriel-mdx
 * 
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 * @async
 */
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Page dynamique affichant un article de blog complet avec son contenu MDX.
 * 
 * Cette page serveur asynchrone récupère un article par son slug et affiche :
 * - L'image de couverture optimisée (si disponible)
 * - Le titre et la date de publication
 * - Le contenu MDX transformé avec coloration syntaxique
 * - Un sommaire interactif avec détection du scroll
 * 
 * **Architecture** :
 * - Route dynamique : `/blog/[slug]`
 * - Récupération de l'article depuis les fichiers MDX
 * - Extraction automatique des titres pour le sommaire
 * - Rendu 404 si l'article n'existe pas
 * - Layout responsive avec sommaire latéral sur XL+
 * 
 * **Composants utilisés** :
 * - `Image` (Next.js) : Image de couverture optimisée avec priority loading
 * - `Mdx` : Rendu du contenu MDX avec plugins (Shiki, rehype-slug, remark-gfm)
 * - `TableOfContents` : Sommaire interactif avec IntersectionObserver
 * 
 * @param {Object} props - Props du composant
 * @param {Promise<{ slug: string }>} props.params - Paramètres de route contenant le slug de l'article
 * @returns {Promise<JSX.Element>} La page de l'article avec contenu MDX et sommaire
 * 
 * @example
 * // Route: /blog/guide-nextjs-mdx
 * // Affiche l'article avec slug "guide-nextjs-mdx"
 * 
 * @async
 * @server-component
 */
export default async function Page(props: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
  const params = await props.params;
  const slug = params.slug;
  
  // Récupération de l'article par son slug
  const blogPost = await getBlogPostBySlug(slug);
  
  // Redirection 404 si l'article n'existe pas
  if (!blogPost) {
    notFound();
  }

  // Extraction des titres H2-H4 pour générer le sommaire
  const headings = getHeadings(blogPost.content);

  return (
    <>
      <BlogStructuredData post={blogPost} />
      <main className="relative container mx-auto my-10 px-4">
      <div className="relative flex flex-col xl:flex-row gap-12 justify-center items-start">
        <article className="lg:max-w-3xl 2xl:max-w-5xl w-full">
          {blogPost.coverImage && (
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={blogPost.coverImage}
                alt={blogPost.title}
                fill
                className="object-fill"
                priority
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <p className="text-sm text-muted-foreground mb-8 lead">
            {new Date(blogPost.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <Mdx>{blogPost.content}</Mdx>
        </article>
        <TableOfContents headings={headings} />
      </div>
    </main>
    </>
  );
}
