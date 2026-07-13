import { Project } from "@/types/project";

export const DAVEZ_PIZZA: Project = {
  id: 2, // ⚠️ À mettre à jour avec le prochain id disponible dans le portfolio
  slug: "davez-pizza",
  title: "Davez Pizza",
  description: {
    short:
      "Site vitrine de Davez Pizza, pizzeria artisanale à Davézieux — menu, galerie, contact et avis Google synchronisés.",
    long: `Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, Prisma/PostgreSQL. Avis Google Places synchronisés quotidiennement en base, horaires saisonniers auto côté serveur, formulaire sécurisé (rate limiting, Nodemailer), animations parallax (motion/react) et SEO local complet (JSON-LD, Open Graph, sitemap).`,
  },
  image: "/images/davez-pizza/landing_davez-pizza.png",
  favicon: {
    ico: "/favicons/davez-pizza/favicon.ico",
    png32: "/favicons/davez-pizza/favicon-32x32.png",
    png16: "/favicons/davez-pizza/favicon-16x16.png",
    png192: "/favicons/davez-pizza/favicon-192x192.png",
    png512: "/favicons/davez-pizza/favicon-512x512.png",
    appleTouch: "/favicons/davez-pizza/apple-touch-icon.png",
  },
  category: "Full Stack",
  objectif:
    "Offrir à Davez Pizza un site vitrine moderne et performant pour renforcer sa visibilité locale, présenter sa carte et faciliter la prise de contact.",
  defi:
    "Mettre en place un système de synchronisation automatique des avis Google Places vers PostgreSQL avec un cache quotidien, évitant les appels API redondants tout en garantissant des données fraîches. Gérer des horaires saisonniers dynamiques (été/hiver) rendus côté serveur à chaque requête sans surcoût client.",
  technologies: {
    principales: ["Next.js", "TypeScript", "Tailwind CSS v4", "Prisma", "PostgreSQL", "Google Places API"],
    all: {
      frontend: {
        language: "TypeScript",
        frameworks: ["Next.js 16 (App Router)", "React 19"],
        styling: ["Tailwind CSS v4"],
        uiLibraries: ["shadcn/ui", "Radix UI"],
        libraries: [
          "motion/react",
          "Embla Carousel",
          "react-hook-form",
          "zod",
          "@hookform/resolvers",
          "lucide-react",
          "clsx",
          "tailwind-merge",
          "class-variance-authority",
          "next-themes",
          "next/font/google",
        ],
      },
      backend: {
        language: "TypeScript",
        runtime: ["Node.js"],
        frameworks: ["Next.js Route Handlers"],
        apiTypes: ["REST"],
        security: ["Rate limiting IP (in-memory)", "Validation Zod"],
        libraries: ["nodemailer", "Google Places API"],
      },
      database: {
        databases: ["PostgreSQL"],
        orm: ["Prisma"],
      },
      tools: ["ESLint", "pnpm", "@vercel/analytics", "dotenv"],
      deployment: {
        platforms: ["Vercel"],
      },
    },
  },
  pages: [
    {
      nom: "Accueil",
      description:
        "Page principale avec hero parallax, section À propos, horaires & adresse, et avis Google 5 étoiles.",
    },
    {
      nom: "Menu / Carte",
      description:
        "Carte complète de la pizzeria avec onglets par catégorie (pizzas, entrées, desserts, boissons) et prix.",
    },
    {
      nom: "Contact",
      description:
        "Formulaire de contact avec sélection de sujet, informations pratiques, adresse et horaires saisonniers.",
    },
    {
      nom: "Galerie",
      description:
        "Galerie photos responsive du restaurant, des pizzas et de l'ambiance en grille CSS adaptative.",
    },
    {
      nom: "Mentions légales",
      description: "Page des mentions légales, hébergeur, propriété intellectuelle et politique RGPD.",
    },
  ],
  features: [
    { short: "Menu interactif",          long: "Carte interactive avec onglets par catégorie (pizzas, entrées, desserts, boissons)" },
    { short: "Avis Google Places",       long: "Synchronisation automatique des avis Google Places 5★ en base de données" },
    { short: "Horaires saisonniers",     long: "Affichage dynamique des horaires selon la saison (été / hiver)" },
    { short: "Formulaire de contact",    long: "Formulaire de contact sécurisé avec envoi d'email via Nodemailer" },
    { short: "Animations parallax",      long: "Animations parallax au scroll et transitions fade-up staggerées" },
    { short: "Mode sombre/clair",        long: "Mode sombre / clair avec next-themes" },
    { short: "SEO local complet",        long: "SEO local complet avec métadonnées, Open Graph, sitemap et JSON-LD Restaurant" },
    { short: "Galerie photos",           long: "Galerie photos responsive mobile-first" },
  ],
  technicalHighlights: [
    "Synchronisation quotidienne des avis Google Places API → PostgreSQL via Prisma (cache pour éviter les appels redondants)",
    "Horaires saisonniers été/hiver calculés côté serveur à chaque requête grâce à une logique de date pure",
    "Rate limiting IP en mémoire (5 req/min) sur la route API /contact pour protéger contre les abus",
    "Architecture React Server Components (server-first) avec îlots client 'use client' ciblés",
    "JSON-LD schema.org type Restaurant injecté dans le layout pour le référencement local",
    "Animations LazyMotion (motion/react) chargées à la demande pour minimiser le bundle JS",
  ],
  links: {
    demo: "https://davez-pizza.vercel.app/",
    // TODO: décommenter si le repo est public
    // github: "https://github.com/Ax-07/davez-pizza",
  },
  status: "En cours",
  year: "2026",
};
