import Script from 'next/script';

interface ProjectStructuredDataProps {
  project: {
    title: string;
    description: { short: string; long: string };
    technologies: {
      frontend?: {
        language?: string;
        frameworks?: string[];
      };
      [key: string]: unknown;
    };
    category: string;
    slug: string;
    image?: string;
  };
}

/**
 * Génère les données structurées Schema.org pour un projet (type CreativeWork)
 * 
 * Produit un script JSON-LD avec :
 * • Informations du créateur (Xavier Affringue, Développeur Full Stack)
 * • Métadonnées du projet (titre, description, catégorie, URL)
 * • Technologies utilisées (langages, frameworks)
 * • Mots-clés SEO automatiques
 * • Offre de service associée
 * 
 * @example
 * // Pour le projet "Pileah" :
 * // Génère un script avec @type: "CreativeWork"
 * // URL: "https://portfolio-perso-2025.vercel.app/portfolio/pileah"
 * // Mots-clés: ["application web", "développement web", "portfolio", "next.js"]
 * 
 * @param project - Données du projet avec titre, description, technologies et slug
 * @returns Composant Script Next.js avec données structurées JSON-LD intégrées
 */
export function ProjectStructuredData({ project }: ProjectStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description.short,
    creator: {
      '@type': 'Person',
      name: 'Xavier Affringue',
      jobTitle: 'Développeur Full Stack',
      url: 'https://portfolio-perso-2025.vercel.app',
    },
    dateCreated: new Date().getFullYear(),
    genre: project.category,
    url: `https://portfolio-perso-2025.vercel.app/portfolio/${project.slug}`,
    programmingLanguage: project.technologies.frontend?.language || 'JavaScript',
    runtimePlatform: project.technologies.frontend?.frameworks || [],
    image: project.image ? `https://portfolio-perso-2025.vercel.app${project.image}` : undefined,
    about: {
      '@type': 'Thing',
      name: 'Développement Web',
      description: 'Projet de développement web full stack',
    },
    keywords: [
      project.category.toLowerCase(),
      'développement web',
      'portfolio',
      ...(project.technologies.frontend?.frameworks || []).map((tech: string) => tech.toLowerCase()),
    ],
    // Ajout de métriques techniques
    applicationCategory: 'WebApplication',
    applicationSubCategory: project.category,
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      category: 'Développement web sur mesure',
      businessFunction: 'http://purl.org/goodrelations/v1#ProvideService',
    },
  };

  return (
    <Script
      id={`project-structured-data-${project.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
