import { SITE_METADATA } from '@/config';
import { Metadata } from 'next';
import { Project } from '@/types/project';

/**
 * 🎯 Génère toutes les métadonnées SEO pour une page projet
 * 
 * Produit automatiquement :
 * • Title optimisé : "Pileah - Projet Full Stack | Xavier Affringue"
 * • Description avec technologies : "Annuaire de praticiens... Développé avec TypeScript, React..."
 * • Mots-clés dynamiques : nom projet + catégorie + technologies + SEO génériques
 * • Open Graph complet : titre, description, image 1200x630, type article
 * • Twitter Cards : summary_large_image avec métadonnées
 * • URL canonique : https://site.com/portfolio/[slug]
 * • Robots optimisés : index=true, max-image-preview=large
 * • Favicon spécifique (optionnel) : si project.favicon est défini
 * 
 * @param project - Données du projet (title, description, technologies, etc.)
 * @returns Métadonnées Next.js complètes prêtes pour generateMetadata()
 * 
 * @example
 * ```typescript
 * const projectWithFavicon = { 
 *   ...project, 
 *   favicon: "/favicons/pileah.svg" 
 * };
 * const metadata = generateProjectMetadata(projectWithFavicon);
 * // → Favicon spécifique dans l'onglet du navigateur
 * // → Title: "Pileah - Projet Full Stack | Xavier Affringue"
 * // → Description: "Annuaire de praticiens avec recherche géolocalisée. Développé avec TypeScript, React, Express, PostgreSQL. Découvrez ce projet full stack en détail avec démo et code source."
 * // → Keywords: ["pileah", "full stack", "typescript", "react", "express", "postgresql", ...]
 * ```
 */
export function generateProjectMetadata(project: Project): Metadata {
  // Extraction des technologies principales
  const mainTechnologies = [
    project.technologies.frontend?.language,
    ...(project.technologies.frontend?.frameworks || []),
    ...(project.technologies.backend?.frameworks || []),
    ...(project.technologies.database?.databases || [])
  ].filter((tech): tech is string => typeof tech === 'string').slice(0, 5);

  // Meta title optimisé avec mots-clés
  const title = `${project.title} - Projet ${project.category} | ${SITE_METADATA.author}`;
  
  // Meta description enrichie et attractive
  const description = `${project.description.short} Développé avec ${mainTechnologies.join(', ')}. Découvrez ce projet ${project.category.toLowerCase()} en détail avec démo et code source.`;

  // URL canonique du projet
  const projectUrl = `${SITE_METADATA.url}/portfolio/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      // Mots-clés du projet
      project.title.toLowerCase(),
      project.category.toLowerCase(),
      // Technologies
      ...mainTechnologies.map(tech => tech.toLowerCase()),
      // Mots-clés génériques
      'portfolio développeur',
      'projet web',
      'développement full stack',
      'react nextjs',
      SITE_METADATA.author.toLowerCase()
    ],
    authors: [{ name: SITE_METADATA.author }],
    creator: SITE_METADATA.author,
    
    // Favicon spécifique au projet (optionnel)
    ...(project.favicon && {
      icons: {
        icon: [
          project.favicon.png32 && { url: project.favicon.png32, sizes: "32x32", type: "image/png" },
          project.favicon.png16 && { url: project.favicon.png16, sizes: "16x16", type: "image/png" },
          project.favicon.png192 && { url: project.favicon.png192, sizes: "192x192", type: "image/png" },
          project.favicon.png512 && { url: project.favicon.png512, sizes: "512x512", type: "image/png" },
        ].filter(Boolean) as { url: string; sizes: string; type: string }[],
        shortcut: project.favicon.ico ?? undefined,
        apple: project.favicon.appleTouch ?? undefined,
      }
    }),
    
    // Open Graph optimisé
    openGraph: {
      type: 'article',
      title,
      description,
      url: projectUrl,
      siteName: `${SITE_METADATA.author} - Portfolio`,
      images: [
        {
          url: `${SITE_METADATA.url}${project.image}`,
          width: 1200,
          height: 630,
          alt: `Capture d'écran du projet ${project.title} - ${project.category}`,
          type: 'image/png',
        }
      ],
      locale: 'fr_FR',
      publishedTime: project.year ? `${project.year}-01-01T00:00:00Z` : undefined,
      authors: [SITE_METADATA.author],
    },

    // Twitter Card optimisé
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_METADATA.url}${project.image}`],
      creator: '@xavier_affringue',
    },

    // Métadonnées techniques
    alternates: {
      canonical: projectUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Catégories pour un meilleur classement
    category: project.category,
  };
}

/**
 * 🚫 Génère les métadonnées pour une page 404 de projet
 * 
 * Produit :
 * • Title : "Projet non trouvé | Portfolio Xavier Affringue"
 * • Description : Message informatif avec redirection vers autres projets
 * • Robots : noindex, nofollow (pas d'indexation des 404)
 * 
 * @returns Métadonnées 404 SEO-friendly
 */
export function generateNotFoundMetadata(): Metadata {
  return {
    title: "Projet non trouvé | Portfolio Xavier Affringue",
    description: "Le projet demandé n'existe pas. Découvrez mes autres réalisations en développement web.",
    robots: {
      index: false,
      follow: false,
    },
  };
}
