// ==================================
// CONFIGURATION SEO AVANCÉE
// ==================================
// Configuration complète pour optimiser le référencement du portfolio

import { PERSONAL_INFO, CONTACT_INFO, ONLINE_PRESENCE, TECH_STACK } from './brand.config';

// Métadonnées centralisées du site
export const SITE_METADATA = {
  title: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.jobTitle}`,
  description: PERSONAL_INFO.descriptions.long,
  url: ONLINE_PRESENCE.website.url,
  domain: ONLINE_PRESENCE.website.domain,
  author: PERSONAL_INFO.fullName,
  email: CONTACT_INFO.email,
  
  // Pour les métadonnées SEO
  keywords: [
    "développeur web",
    "développeur full stack", 
    ...TECH_STACK.main.map(tech => tech.toLowerCase()),
    "freelance",
    "portfolio"
  ]
} as const;

export const SEO_CONFIG = {
  // Métadonnées de base
  defaultTitle: SITE_METADATA.title as string,
  titleTemplate: `%s | ${SITE_METADATA.author}`,
  defaultDescription: SITE_METADATA.description,
  
  // Mots-clés optimisés
  keywords: [
    ...SITE_METADATA.keywords,
    'ardèche développeur',
    'freelance développeur web',
    'création site web react',
    'développeur javascript',
    'portfolio développeur',
  ],
  
  // Open Graph optimisé
  openGraph: {
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
  },
  
  // Twitter Card optimisé
  twitter: {
    handle: ONLINE_PRESENCE.platforms.twitter,
    site: ONLINE_PRESENCE.platforms.twitter,
    cardType: 'summary_large_image',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    image: `${SITE_METADATA.url}/og-image`,
  },
  
  // URLs canoniques
  canonical: SITE_METADATA.url,
  
  // Données structurées Schema.org
  schemas: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_METADATA.author,
      givenName: 'Xavier',
      familyName: 'Affringue',
      jobTitle: 'Développeur Full Stack',
      url: SITE_METADATA.url,
      email: SITE_METADATA.email,
      telephone: '+33617647945',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '19 Rue des Alpes',
        addressLocality: 'Lalouvesc',
        postalCode: '07520',
        addressRegion: 'Ardèche',
        addressCountry: 'FR',
      },
      sameAs: [
        'https://github.com/xavier',
        'https://linkedin.com/in/xavier-affringue',
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
      name: `${SITE_METADATA.author} - Portfolio`,
      description: SITE_METADATA.description,
      url: SITE_METADATA.url,
      author: {
        '@type': 'Person',
        name: SITE_METADATA.author,
      },
      inLanguage: 'fr-FR',
      copyrightYear: new Date().getFullYear(),
      copyrightHolder: {
        '@type': 'Person',
        name: SITE_METADATA.author,
      },
    },

    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_METADATA.author,
      url: SITE_METADATA.url,
      email: SITE_METADATA.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '19 Rue des Alpes',
        addressLocality: 'Lalouvesc',
        postalCode: '07520',
        addressRegion: 'Ardèche',
        addressCountry: 'FR',
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
  },
  
  // Configuration par page
  pages: {
    home: {
      title: 'Accueil',
      description: `Portfolio de ${SITE_METADATA.author}, développeur Full Stack spécialisé en React et Next.js en Ardèche. Découvrez mes projets et compétences en développement web moderne.`,
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
      measurementId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
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