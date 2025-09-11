// ==================================
// CONFIGURATION SEO AVANCÉE
// ==================================
// Configuration complète pour optimiser le référencement du portfolio

import { CONTACT_INFO, ONLINE_PRESENCE, PERSONAL_INFO, TECH_STACK } from './brand.config';
import { SITE_METADATA } from './site-metadata';

const OPEN_GRAPH = {
  type: 'website',
  locale: 'fr_FR',
  url: SITE_METADATA.url,
  siteName: `${SITE_METADATA.author} - Portfolio`,
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  images: [
    {
      url: `${SITE_METADATA.url}/og-image`,
      width: 1200,
      height: 630,
      alt: `${SITE_METADATA.author} - Développeur Full Stack`,
      type: 'image/png',
    },
  ],
};

const TWITTER_CARD = {
  handle: ONLINE_PRESENCE.platforms.twitter,
  site: SITE_METADATA.url,
  card: 'summary_large_image',
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  image: `${SITE_METADATA.url}/og-image`,
};

const SCHEMA_ORG = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.fullName,
    givenName: PERSONAL_INFO.firstName,
    familyName: PERSONAL_INFO.lastName,
    jobTitle: PERSONAL_INFO.jobTitle,
    url: SITE_METADATA.url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      postalCode: CONTACT_INFO.address.postalCode,
      addressRegion: CONTACT_INFO.address.region,
      addressCountry: CONTACT_INFO.address.country,
    },
    sameAs: [
      ONLINE_PRESENCE.social.find(s => s.name === 'GitHub')?.url || '',
      ONLINE_PRESENCE.social.find(s => s.name === 'LinkedIn')?.url || '',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Full Stack Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Formation Développement Web',
    },
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lalouvesc',
        addressRegion: 'Ardèche',
        addressCountry: 'FR',
      },
    },
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${PERSONAL_INFO.fullName} - Portfolio`,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.fullName,
    },
    inLanguage: 'fr-FR',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: PERSONAL_INFO.fullName,
    },
  },

  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: PERSONAL_INFO.fullName,
    url: SITE_METADATA.url,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      postalCode: CONTACT_INFO.address.postalCode,
      addressRegion: CONTACT_INFO.address.region,
      addressCountry: CONTACT_INFO.address.country,
    },
    founder: {
      '@type': 'Person',
      name: SITE_METADATA.author,
    },
    foundingDate: '2021',
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    serviceType: [
      'Développement Web',
      'Développement Full Stack',
      'Création de sites web',
      'Applications React',
    ],
  },

  // Nouveau: Données structurées pour les projets
  creativeWork: (project: {
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
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description.short,
    creator: {
      '@type': 'Person',
      name: PERSONAL_INFO.fullName,
      jobTitle: PERSONAL_INFO.jobTitle,
      url: SITE_METADATA.url,
    },
    dateCreated: new Date().getFullYear(),
    genre: project.category,
    url: `${SITE_METADATA.url}/portfolio/${project.slug}`,
    programmingLanguage: project.technologies.frontend?.language || 'JavaScript',
    runtimePlatform: project.technologies.frontend?.frameworks || [],
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
  }),

  // Nouveau: Données structurées pour les compétences
  skillset: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Compétences Techniques',
    description: 'Technologies et compétences maîtrisées',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'DefinedTerm',
          name: 'React',
          description: 'Bibliothèque JavaScript pour interfaces utilisateur',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'DefinedTerm',
          name: 'Next.js',
          description: 'Framework React full-stack',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'DefinedTerm',
          name: 'TypeScript',
          description: 'JavaScript typé pour applications robustes',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'DefinedTerm',
          name: 'Node.js',
          description: 'Runtime JavaScript côté serveur',
        },
      },
    ],
  },
};

export const SEO_CONFIG = {
  // Métadonnées de base
  defaultTitle: SITE_METADATA.title as string,
  titleTemplate: `%s | ${SITE_METADATA.author}`,
  defaultDescription: SITE_METADATA.description,

  // Mots-clés optimisés
keywords: [
  // Localisation
  "développeur web ardèche 07",
  "développeur full stack ardèche 07",
  "création site internet ardèche 07",
  "freelance développeur ardèche 07",

  // Freelance / services
  "freelance développeur web",
  "création site web moderne",
  "développement application web",
  "conception site vitrine",
  "développement site e-commerce",

  // Stack technique (TECH_STACK dynamique + spécifiques)
  ...TECH_STACK.main.map(tech => tech.toLowerCase()),
  "développeur javascript",
  "développeur react",
  "développeur next.js",
  "développeur node.js",
  "développeur full stack",

  // Portfolio / identité
  "portfolio développeur",
  "portfolio freelance",
  "développeur indépendant",
],

  // Open Graph optimisé
  openGraph: OPEN_GRAPH,

  // Twitter Card optimisé
  twitter: TWITTER_CARD,

  // URLs canoniques
  canonical: SITE_METADATA.url,

  // Données structurées Schema.org
  schemas: SCHEMA_ORG,

  // Configuration par page
  pages: {
    home: {
      title: 'Accueil',
      description: SITE_METADATA.description,
      keywords: ['développeur full stack ardèche', 'portfolio développeur', 'react next.js'],
      robots: undefined,
    },
    portfolio: {
      title: 'Portfolio - Mes Projets',
      description: 'Découvrez mes dernières réalisations en développement web : applications React, plateformes e-commerce, dashboards et solutions sur mesure.',
      keywords: ['projets développeur', 'réalisations web', 'applications react'],
      robots: undefined,
    },
    contact: {
      title: 'Contact - Développeur Full Stack',
      description: `Contactez ${SITE_METADATA.author} pour discuter de votre projet web. Développeur freelance disponible pour vos besoins en React, Next.js et Node.js.`,
      keywords: ['contact développeur', 'freelance ardèche', 'devis développement web'],
      robots: undefined,
    },
    mentionsLegales: {
      title: 'Mentions Légales',
      description: `Mentions légales du portfolio de ${SITE_METADATA.author}, développeur Full Stack.`,
      keywords: [],
      robots: 'noindex, nofollow',
    },
    politiqueConfidentialite: {
      title: 'Politique de Confidentialité',
      description: `Politique de confidentialité et gestion des données personnelles sur le site de ${SITE_METADATA.author}.`,
      keywords: [],
      robots: 'noindex, nofollow',
    },
  },

  // Configuration technique
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

  // Configuration Analytics
  analytics: {
    googleAnalytics: {
      measurementId: process.env.NEXT_PUBLIC_GA_ID || 'G-8Q33FVTZKE',
      enabled: process.env.NODE_ENV === 'production',
    },

    hotjar: {
      hjid: parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID || '1234567'),
      hjsv: 6,
      enabled: process.env.NODE_ENV === 'production' && !!process.env.NEXT_PUBLIC_HOTJAR_ID,
    },

    plausible: {
      domain: SITE_METADATA.domain,
      enabled: !!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    },
  },

  // Configuration sociale
  social: {
    twitterCreator: ONLINE_PRESENCE.platforms.twitter,
    twitterSite: ONLINE_PRESENCE.platforms.twitter,
  },

  // Configuration RGPD et cookies
  privacy: {
    cookieConsent: {
      enabled: true,
      message: "Ce site utilise des cookies pour améliorer votre expérience de navigation.",
      acceptText: "Accepter",
      declineText: "Refuser",
      settingsText: "Paramètres",
    },
  },
};

// Helper pour générer les métadonnées par page
export function generatePageMetadata(pageKey: keyof typeof SEO_CONFIG.pages, customData?: Record<string, unknown>) {
  const page = SEO_CONFIG.pages[pageKey];
  const baseTitle = page.title === 'Accueil' ? SITE_METADATA.title : `${page.title} | ${SITE_METADATA.author}`;

  return {
    title: (customData?.title as string) || baseTitle,
    description: (customData?.description as string) || page.description,
    keywords: [...SEO_CONFIG.keywords, ...(page.keywords || [])],
    robots: page.robots || 'index, follow',
    openGraph: {
      ...SEO_CONFIG.openGraph,
      title: (customData?.title as string) || baseTitle,
      description: (customData?.description as string) || page.description,
      url: `${SITE_METADATA.url}${pageKey === 'home' ? '' : `/${pageKey}`}`,
    },
    twitter: {
      ...SEO_CONFIG.twitter,
      title: (customData?.title as string) || baseTitle,
      description: (customData?.description as string) || page.description,
    },
    alternates: {
      canonical: `${SITE_METADATA.url}${pageKey === 'home' ? '' : `/${pageKey}`}`,
    },
  };
}

// Helper pour injecter les données structurées
export function getStructuredData(schemaType: keyof typeof SEO_CONFIG.schemas) {
  return SEO_CONFIG.schemas[schemaType];
}