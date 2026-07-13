import { Project } from "@/types/project";

export const HEADSCOPE: Project = {
  id: 2,
  slug: "headscope",
  title: "HeadScope",
  description: {
    short: "Visualiseur de snippets et métadonnées (Open Graph, Twitter Cards, JSON-LD) à partir d’une URL publique",
    long: `
    Application web développée avec Next.js (App Router) en TypeScript pour prévisualiser les extraits (snippets) et cartes sociales d’un site public à partir de son URL. 
    Les routes API Edge de Next.js se chargent de récupérer côté serveur les balises du <head> (title, meta, og:*, twitter:*, link rel, JSON-LD), 
    en respectant les contraintes réseau (redirections, timeouts, CORS). 
    Le frontend rend un aperçu style SERP (Google) et Open Graph/Twitter, avec un rapport de complétude SEO.
    `
  },
  image: "/images/headscope/landing_headscope.png",
  favicon: {
    ico: "/favicons/headscope/favicon.ico",
    png32: "/favicons/headscope/favicon-32x32.png",
    png16: "/favicons/headscope/favicon-16x16.png",
    png192: "/favicons/headscope/favicon-192x192.png",
    png512: "/favicons/headscope/favicon-512x512.png",
    appleTouch: "/favicons/headscope/apple-touch-icon.png",
  },
  category: "Full Stack",
  objectif: "Permettre d’inspecter rapidement les métadonnées d’une page publique et de prévisualiser leur rendu sur moteurs de recherche et réseaux sociaux.",
  defi: "Concevoir une app Next.js unifiée (frontend + API Edge) capable de fetcher et parser les métadonnées d’une URL publique de façon sécurisée et performante, puis restituer une prévisualisation fidèle et un rapport SEO.",
  technologies: {
    principales: ["TypeScript", "Next.js (App Router)", "Edge Runtime", "cheerio", "Tailwind CSS"],
    all: {
    frontend: {
      language: "TypeScript",
      frameworks: ["Next.js (App Router)"],
      styling: ["Tailwind CSS"],
      uiLibraries: ["shadcn/ui"],
      stateManagement: ["React hooks"],
      libraries: ["i18next"]
    },
    backend: {
      language: "TypeScript",
      runtime: ["Edge Runtime (Vercel)"],
      frameworks: ["Next.js API Routes"],
      apiTypes: ["REST (JSON)"],
      security: ["CORS safe defaults", "Rate Limiting", "URL validation"],
      libraries: ["cheerio", "undici"]
    },
    database: {
      databases: [],
      orm: []
    },
    tools: ["ESLint", "Zod"],
    deployment: {
      platforms: ["Vercel"],
      ciCd: ["GitHub Actions"]
    }
    }
  },
  pages: [
    { nom: "Accueil", description: "Page d’accueil avec formulaire de saisie d’URL et explication du service" },
    { nom: "Prévisualisation", description: "Affichage des métadonnées et des aperçus SERP / Open Graph / Twitter" },
    { nom: "Rapports", description: "Rapport de complétude/qualité des métadonnées avec recommandations SEO" },
    { nom: "API", description: "Documentation de l’API Edge pour récupérer les métadonnées en JSON" },
    { nom: "Contact", description: "Page de contact pour retours et support" },
    { nom: "Politique de confidentialité", description: "Traitement des URLs et gestion des données techniques" },
    { nom: "Conditions d’utilisation", description: "Conditions d’usage et limites" },
    { nom: "Mentions légales", description: "Informations légales du site" }
  ],
  features: [
    { short: "Extraction OG/JSON-LD",   long: "Extraction Open Graph, Twitter Cards, title/description et JSON-LD" },
    { short: "Suivi redirections",       long: "Suivi des redirections et normalisation d'URL" },
    { short: "Aperçu SERP",             long: "Aperçu SERP et carte sociale (desktop/mobile)" },
    { short: "Rapport SEO",              long: "Rapport de complétude et recommandations" },
    { short: "Cache CDN",               long: "Cache via CDN (s-maxage, stale-while-revalidate)" },
    { short: "Multilingue FR/EN",       long: "Interface multilingue (FR/EN)" },
    { short: "Responsive",              long: "Interface responsive" },
  ],
  technicalHighlights: [
    "Next.js App Router avec API Edge unifiée",
    "Parsing robuste du <head> avec cheerio/regex",
    "Validation stricte d’URL et blocage des IP privées (SSRF safe)",
    "Timeouts et abort controller pour éviter les requêtes lentes",
    "Cache CDN avec revalidation (s-maxage/stale-while-revalidate)",
    "SEO optimisé pour l’application elle-même"
  ],
  links: {
    demo: "https://headscope.app",
    // github: "https://github.com/yourname/headscope"
  },
  status: "En cours",
  year: "2025"
};
