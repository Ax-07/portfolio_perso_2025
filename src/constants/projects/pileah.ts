import { Project } from "@/types/project";

export const PILEAH: Project = {
    id: 1,
    slug: "pileah",
    title: "Pileah",
    description: {
      short: "Annuaire de praticiens en médecines alternatives avec recherche géolocalisée",
      long: `
      Application web full-stack développée en TypeScript avec React/Vite et Node.js/Express. 
      Implémentation d'une architecture client/serveur intégrant géolocalisation, validation Zod cross-stack et interface multilingue. 
      Gestion des données avec PostgreSQL/Prisma et déploiement sur Vercel.
      `
    },
    image: "/images/pileah/landing_pileah.png",
    category: "Full Stack",
    objectif: "Développer une application web complète et multilingue pour rechercher des praticiens en médecines alternatives.",
    defi: "Créer une architecture client/serveur robuste avec une interface utilisateur intuitive et multilingue. Implémenter des fonctionnalités avancées telles que la géolocalisation, l'affichage des résultats sur une carte interactive, tout en gérant l'internationalisation (FR/EN/NL).",
    technologies: {
      frontend: {
        language: "TypeScript",
        frameworks: ["React", "Vite"],
        styling: ["Tailwind CSS"],
        uiLibraries: ["shadcn/ui"],
        stateManagement: ["Redux"],
        libraries: ["React Hook Form", "React Leaflet", "Leaflet", "i18next"]
      },
      backend: {
        language: "TypeScript",
        runtime: ["Node.js"],
        frameworks: ["Express"],
        apiTypes: ["REST"],
        security: ["Helmet", "CORS", "CSRF"],
        libraries: ["Nodemailer"]
      },
      database: {
        databases: ["PostgreSQL"],
        orm: ["Prisma"]
      },
      tools: ["ESLint", "Zod"],
      deployment: {
        platforms: ["Vercel"],
        ciCd: []
      }
    },
    pages: [
      {
        nom: "Accueil",
        description: "Page d'accueil avec recherche de praticiens par spécialité et localisation"
      },
      {
        nom: "Résultats",
        description: "Page d'affichage des résultats de recherche avec filtre et carte interactive"
      },
      {
        nom: "Contact",
        description: "Page de contact pour contacter l'équipe"
      },
      {
        nom: "Article découvrir les médecines douces",
        description: "Section d'articles pour découvrir les médecines douces"
      },
      {
        nom: "Articles comment choisir",
        description: "Section d'articles pour aider à choisir son praticien"
      },
      {
        nom: "Articles principales spécialités",
        description: "Section d'articles sur les principales spécialités en médecines douces"
      },
      {
        nom: "Politique de confidentialité",
        description: "Page détaillant la politique de confidentialité et la gestion des données personnelles"
      },
      {
        nom: "Conditions d'utilisation",
        description: "Page décrivant les conditions d'utilisation du site"
      },
      {
        nom: "Mentions légales",
        description: "Page décrivant les mentions légales du site"
      }
    ],
    features: [
      "Recherche géolocalisée de praticiens",
      "Filtrage par spécialité, distance et prix",
      "Carte interactive avec marqueurs",
      "Interface multilingue (FR/EN/NL)",
      "Formulaire de contact sécurisé",
      "Interface responsive"
    ],
    technicalHighlights: [
      "Architecture client/serveur séparée",
      "Protection CORS, CSRF et Rate Limiting",
      "Géolocalisation avec API externe",
      "Validation Zod côté client et serveur",
      "Persistance Redux avec session storage",
      "Configuration SEO et métadonnées complètes",
    ],
    links: {
      demo: "https://pileah.com",
      // github: "https://github.com/FrePileah/Pileah"
    },
    status: "Terminé",
    year: "2025"
  };