// ====================================================================
// SOURCE DE VÉRITÉ - INFORMATIONS PERSONNELLES & BRANDING
// ====================================================================
// Ce fichier centralise TOUTES les informations personnelles utilisées
// dans le portfolio pour éviter les duplications et faciliter les mises à jour

import { Github, Linkedin } from "lucide-react";

// ==================================
// INFORMATIONS PERSONNELLES PRINCIPALES
// ==================================

export const PERSONAL_INFO = {
  // Identité
  firstName: "Xavier",
  lastName: "Affringue", 
  fullName: "Xavier Affringue",
  initials: "XA",
  
  // Professionnel
  jobTitle: "Développeur Full Stack",
  specialty: "React, Next.js et Node.js",
  
  // Descriptions variées
  descriptions: {
    short: "Développeur Full Stack passionné par la création d'applications web modernes",
    medium: "Développeur Full Stack passionné, spécialisé en React/Next.js et Node.js. Je crée des solutions web modernes et performantes.",
    long: "Développeur Full Stack spécialisé en React, Next.js et Node.js. Je crée des applications web modernes, performantes et accessibles pour transformer vos idées en réalité.",
    seo: "Développeur Full Stack spécialisé en React et Next.js. Création d'applications web modernes et performantes."
  },
  
  // Statistiques professionnelles
  stats: {
    experience: "4+",
    experienceLabel: "Années d'expérience",
    projects: "15+", 
    projectsLabel: "Projets réalisés",
    satisfaction: "100%",
    satisfactionLabel: "Clients satisfaits"
  },
  
  // Disponibilité et statut
  status: {
    available: true,
    availabilityText: "Disponible pour nouveaux projets",
    location: "Ardèche 🇫🇷",
    remote: "Remote friendly",
    responseTime: "Généralement sous 24h"
  }
} as const;

// ==================================
// COORDONNÉES DE CONTACT
// ==================================

export const CONTACT_INFO = {
  email: "xavier.affringue@gmail.com",
  phone: "+33 6 17 64 79 45",
  
  address: {
    street: "19 Rue des Alpes", 
    postalCode: "07520",
    city: "Lalouvesc",
    region: "Ardèche",
    country: "France",
    formatted: "19 Rue des Alpes, 07520 Lalouvesc, France"
  },
  
  // Informations légales
  legal: {
    siret: "XXXXXXXXXXXXXX", // À compléter
    companyName: "Xavier Affringue",
    vatNumber: "" // Si applicable
  }
} as const;

// ==================================
// PRÉSENCE EN LIGNE
// ==================================

export const ONLINE_PRESENCE = {
  // Site principal
  website: {
    url: "https://xavieraffringue.dev",
    domain: "xavieraffringue.dev"
  },
  
  // Réseaux sociaux et profils
  social: [
    {
      name: "GitHub",
      username: "xavier",
      url: "https://github.com/xavier",
      icon: Github,
      primary: true
    },
    {
      name: "LinkedIn", 
      username: "xavier-affringue",
      url: "https://linkedin.com/in/xavier-affringue",
      icon: Linkedin,
      primary: true
    }
  ],
  
  // Autres plateformes
  platforms: {
    twitter: "@xavieraffringue",
    discord: "xavier#1234", // Si applicable
    telegram: "@xavieraffringue" // Si applicable
  }
} as const;

// ==================================
// TECHNOLOGIES ET COMPÉTENCES
// ==================================

export const TECH_STACK = {
  // Technologies principales (pour hero section)
  main: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "Vercel"],
  
  // Stack complète par catégorie
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "API REST", "GraphQL", "JWT"],
  database: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  devops: ["Docker", "CI/CD", "Vercel", "AWS"],
  tools: ["Git", "VS Code", "Figma", "Postman"]
} as const;

// ==================================
// BRANDING VISUEL
// ==================================

export const VISUAL_BRAND = {
  // Couleurs principales (références aux CSS variables)
  colors: {
    primary: "hsl(var(--primary))",
    primaryRgb: "var(--primary-rgb)",
    secondary: "hsl(var(--secondary))"
  },
  
  // Logo et favicon
  logo: {
    text: PERSONAL_INFO.fullName,
    initials: PERSONAL_INFO.initials,
    faviconPath: "/favicon.ico",
    logoPath: "/images/logo.svg"
  },
  
  // Images pour SEO et réseaux sociaux
  images: {
    ogImage: "/og-image.jpg",
    profilePicture: "/images/profile.jpg",
    dimensions: {
      ogImage: { width: 1200, height: 630 },
      profilePicture: { width: 400, height: 400 }
    }
  }
} as const;

// ==================================
// EXPORTS UNIFIÉS POUR COMPATIBILITÉ
// ==================================

// Export principal pour le branding (remplace BRAND_INFO)
export const BRAND_INFO = {
  name: PERSONAL_INFO.fullName,
  title: PERSONAL_INFO.jobTitle, 
  initials: PERSONAL_INFO.initials,
  description: PERSONAL_INFO.descriptions.medium
} as const;

// Export des liens sociaux (remplace SOCIAL_LINKS)
export const SOCIAL_LINKS = ONLINE_PRESENCE.social.map(social => ({
  name: social.name,
  href: social.url,
  icon: social.icon,
  color: `hover:text-primary-600` // Couleur par défaut
}));
