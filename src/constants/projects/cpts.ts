import { Project } from "@/types/project";

export const CPTS_ENTRE_FLEUVES: Project = {
  id: 0, // ⚠️ À mettre à jour avec le prochain id disponible dans le portfolio
  slug: "cpts-entre-fleuves",
  title: "CPTS Entre-Fleuves — Carte HPV",
  description: {
    short:
      "Carte interactive et back-office de gestion des lieux de vaccination HPV pour la CPTS Entre-Fleuves (14 communes).",
    long: `Deux applications Next.js interconnectées : une carte Leaflet publique (filtrable, géolocalisable) et un back-office sécurisé (Better Auth, RBAC). PostgreSQL/Neon via Prisma, React Email + Nodemailer, analytics RGPD anonymisé (SHA-256 journalier), Tailwind CSS v4, Zustand et Zod.`,
  },
  image: "/images/cpts/carte-cpts.png",
  favicon: {},
  category: "Full Stack",
  objectif:
    "Faciliter l'accès des habitants aux lieux de vaccination HPV sur les 14 communes de la CPTS Entre-Fleuves. Offrir aux professionnels de santé un outil autonome pour maintenir la carte publique à jour en temps réel.",
  defi:
    "Intégrer Leaflet dans Next.js App Router sans erreur SSR (dynamic import SSR:false) tout en préservant les performances. Concevoir un analytics RGPD-compliant sans cookie via un hash SHA-256 journalier non réversible. Architecturer deux applications découplées (carte publique + admin) communiquant via une API REST sécurisée avec validation de type au runtime.",
  technologies: {
    principales: ["Next.js", "TypeScript", "Leaflet", "Prisma", "Better Auth", "PostgreSQL"],
    all: {
      frontend: {
        language: "TypeScript",
        frameworks: ["Next.js 16", "React 19"],
        styling: ["Tailwind CSS v4"],
        uiLibraries: ["shadcn/ui", "Radix UI", "@base-ui/react"],
        stateManagement: ["Zustand"],
        libraries: ["Leaflet", "react-leaflet", "lucide-react", "cmdk", "clsx", "tailwind-merge"],
      },
      backend: {
        language: "TypeScript",
        runtime: ["Node.js"],
        frameworks: ["Next.js App Router (API Routes)"],
        apiTypes: ["REST"],
        security: ["Middleware RBAC (ADMIN / SUPER_ADMIN)", "Validation Zod", "Type guard runtime"],
        authentication: ["Better Auth 1.5"],
        libraries: ["Nodemailer", "React Email", "@hookform/resolvers", "react-hook-form", "zod"],
      },
      database: {
        databases: ["PostgreSQL (Neon serverless)"],
        orm: ["Prisma 7"],
      },
      tools: ["ESLint", "Prettier", "pnpm", "tsx", "@vercel/analytics"],
      deployment: {
        platforms: ["Vercel"],
      },
    },
  },
  pages: [
    {
      nom: "Carte publique",
      description:
        "Page unique de la carte interactive : marqueurs des lieux de vaccination, contours GeoJSON des 14 communes, masque SVG autour du territoire, liste latérale filtrée et widget de feedback anonyme.",
    },
    {
      nom: "Connexion (admin)",
      description:
        "Page d'authentification pour les professionnels de santé : email + mot de passe via Better Auth, avec vérification de compte actif.",
    },
    {
      nom: "Mot de passe oublié",
      description:
        "Formulaire de réinitialisation de mot de passe : envoi d'un email de réinitialisation via React Email + Nodemailer.",
    },
    {
      nom: "Vérification d'email",
      description:
        "Page de confirmation d'adresse email lors de la création d'un compte administrateur.",
    },
    {
      nom: "Dashboard — Lieux de vaccination",
      description:
        "Interface CRUD complète pour gérer les lieux de vaccination HPV : ajout, modification, désactivation temporaire et suppression, avec onglets par statut (actifs / inactifs).",
    },
    {
      nom: "Dashboard — Statistiques",
      description:
        "Tableau de bord analytique : nombre total d'événements, visiteurs uniques (hash journalier), top 10 lieux les plus cliqués, répartition par type d'événement, 20 derniers feedbacks avec export.",
    },
    {
      nom: "Dashboard — Gestion des administrateurs",
      description:
        "Page réservée aux SUPER_ADMIN : inviter, activer/désactiver et promouvoir les comptes administrateurs.",
    },
  ],
  features: [
    { short: "Carte interactive",        long: "Carte Leaflet interactive avec couches GeoJSON (communes) et masque SVG du territoire" },
    { short: "Filtrage multicritères",   long: "Filtrage multicritères : commune, type de lieu, accessibilité PMR, modalité de RDV (Doctolib, Maiia, sans RDV...)" },
    { short: "Géolocalisation GPS",      long: "Géolocalisation GPS avec centrage automatique et marqueur de position" },
    { short: "Fiches de lieux",          long: "Fiches détaillées par lieu : horaires, contact, vaccins disponibles, lien RDV" },
    { short: "Back-office RBAC",         long: "Back-office RBAC (ADMIN / SUPER_ADMIN) avec authentification Better Auth et emails transactionnels" },
    { short: "Emails transactionnels",   long: "Système d'emails complet : vérification, reset de mot de passe, formulaire de contact (React Email + Nodemailer)" },
    { short: "Feedback anonyme",         long: "Widget de feedback anonyme (note 1–5 + commentaire optionnel)" },
    { short: "Analytics RGPD",           long: "Analytics RGPD sans cookie : suivi des clics, filtres et visites par hash journalier anonymisé" },
  ],
  technicalHighlights: [
    "Architecture découplée : l'API REST `/api/places` de cpts-admin est consommée par cpts-map, avec validation structurelle au runtime via type guard serveur",
    "Analytics RGPD-compliant sans consentement cookie : SHA-256(IP + sel journalier YYYY-MM-DD), rotation automatique toutes les 24h, non réversible",
    "Leaflet intégré en Next.js App Router via `dynamic()` (SSR:false) ; couche GeoJSON des 14 communes + masque SVG vectoriel autour du territoire",
    "Middleware Better Auth avec vérification du rôle SUPER_ADMIN pour la route `/dashboard/admins` ; redirection sur compte désactivé",
    "Schéma Prisma modulaire (multi-fichiers `.prisma`) avec enums métier stricts (TypeLieu, Commune, ModaliteRdv, JourSemaine)",
    "4 stores Zustand découplés (filter, map, vaccinationPlace, search) assurant une séparation claire des responsabilités côté client",
  ],
  links: {
    // TODO: Remplacer par l'URL de la carte publique une fois le déploiement Vercel finalisé
    demo: "https://carte.cptsentrefleuves.fr/",
  },
  status: "Livré au client",
  year: "2026",
};
