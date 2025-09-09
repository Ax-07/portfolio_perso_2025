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
