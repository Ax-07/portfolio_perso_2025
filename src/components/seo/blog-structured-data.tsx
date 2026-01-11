import { JSX } from "react";

/**
 * Type représentant un article de blog avec ses métadonnées.
 * Correspond au type BlogPost de @/lib/blog-utils
 */
interface BlogPost {
  slug: string;
  content: string;
  title: string;
  date: string;
  description?: string;
  lastUpdated?: string;
  published?: boolean;
  tags?: string[];
  readingTime?: string;
  coverImage?: string;
}

/**
 * Props du composant BlogStructuredData.
 * 
 * @interface BlogStructuredDataProps
 * @property {BlogPost} post - L'article de blog complet avec ses métadonnées
 */
interface BlogStructuredDataProps {
  post: BlogPost;
}

/**
 * Composant pour injecter des données structurées JSON-LD dans la page.
 * 
 * Génère un script JSON-LD conforme au schéma Schema.org BlogPosting pour améliorer
 * le référencement et permettre aux moteurs de recherche de mieux comprendre le contenu.
 * 
 * **Avantages SEO** :
 * - Éligibilité aux Google Rich Results (extraits enrichis)
 * - Meilleure compréhension du contenu par les moteurs de recherche
 * - Affichage amélioré dans les résultats de recherche (auteur, date, image)
 * - Support des assistants vocaux et IA (Google Assistant, Siri, etc.)
 * 
 * **Données incluses** :
 * - Type de contenu (BlogPosting)
 * - Titre, description et image de couverture
 * - Dates de publication et modification
 * - Informations sur l'auteur (Person)
 * - Informations sur l'éditeur (Organization)
 * - Mots-clés et catégories
 * - Nombre de mots et temps de lecture
 * 
 * @param {BlogStructuredDataProps} props - Props du composant
 * @param {BlogPost} props.post - L'article de blog à structurer
 * @returns {JSX.Element} Un script JSON-LD à injecter dans le <head>
 * 
 * @example
 * const post = await getBlogPostBySlug("mon-article");
 * <BlogStructuredData post={post} />
 * 
 * @see https://schema.org/BlogPosting
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */
export function BlogStructuredData({ post }: BlogStructuredDataProps): JSX.Element {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-perso-2025.vercel.app";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage ? `${siteUrl}${post.coverImage}` : undefined,
    datePublished: post.date,
    dateModified: post.lastUpdated || post.date,
    author: {
      "@type": "Person",
      name: "Xavier Affringue",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Xavier Affringue - Portfolio",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
    articleSection: post.tags?.[0],
    wordCount: post.content.split(/\s+/).length,
    timeRequired: post.readingTime,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
