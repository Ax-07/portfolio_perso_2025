import { Project } from "@/types/project";

export const PREVISIA: Project = {
  id: 4, // ⚠️ À mettre à jour avec le prochain id disponible dans le portfolio
  slug: "previsia",
  title: "Previsia",
  description: {
    short:
      "Clone de RCA Prévisionnel — SaaS de prévisionnel financier pour porteurs de projet et experts-comptables.",
    long: `Bâti sur Next.js 16, TypeScript strict, Prisma/PostgreSQL et Tailwind v4, Previsia implémente un moteur financier pur TS côté client générant 14 états (CR, bilan, trésorerie, BFR) en temps réel via useMemo. Un moteur de paie autonome couvre la réglementation sociale française 2026.`,
  },
  image: "/images/previsia/landing_previsia.png",
  favicon: {
    ico: "/favicons/previsia/favicon.ico",
    png32: "/favicons/previsia/favicon-32x32.png",
    png16: "/favicons/previsia/favicon-16x16.png",
    png192: "/favicons/previsia/favicon-192x192.png",
    png512: "/favicons/previsia/favicon-512x512.png",
    appleTouch: "/favicons/previsia/apple-touch-icon.png",
  },
  category: "Full Stack",
  objectif:
    "Reproduire les mécanismes et la logique métier du logiciel RCA Prévisionnel sous forme de SaaS web accessible à tout porteur de projet souhaitant construire un prévisionnel financier complet et bancable sans expertise comptable.",
  defi:
    "Implémenter un moteur de calcul financier exhaustif (CR, bilan, BFR, trésorerie mensuelle, SIG, CAF, IS, TVA, emprunts…) entièrement côté client, en garantissant la cohérence des séries temporelles mensuelles sur 1 à 3 exercices. Le moteur de paie a nécessité de modéliser finement la réglementation Urssaf, Agirc-Arrco et TNS 2026, avec gestion des exonérations par type de contrat.",
  technologies: {
    principales: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS v4", "Zustand"],
    all: {
      frontend: {
        language: "TypeScript",
        frameworks: ["Next.js 16 (App Router)"],
        styling: ["Tailwind CSS v4"],
        uiLibraries: ["shadcn/ui", "Radix UI", "Recharts"],
        stateManagement: ["Zustand"],
        libraries: [
          "React Hook Form",
          "Zod",
          "@hookform/resolvers",
          "date-fns",
          "DnD Kit",
          "Sonner",
          "next-themes",
          "lucide-react",
          "clsx",
          "tailwind-merge",
          "class-variance-authority",
          "cmdk",
        ],
      },
      backend: {
        language: "TypeScript",
        runtime: ["Node.js"],
        frameworks: ["Next.js 16 (Server Actions, Route Handlers)"],
        apiTypes: ["Server Actions"],
        libraries: ["ExcelJS", "lodash"],
      },
      database: {
        databases: ["PostgreSQL"],
        orm: ["Prisma"],
      },
      tools: ["ESLint", "Prettier", "Vitest", "tsx", "pnpm"],
      deployment: {
        platforms: ["Vercel"],
      },
    },
  },
  pages: [
    {
      nom: "Landing page",
      description:
        "Page marketing présentant le produit : hero, fonctionnalités, modules, tarifs, FAQ et call-to-action. Entièrement en Server Components.",
    },
    {
      nom: "Dashboard dossiers",
      description:
        "Liste de tous les dossiers prévisionnels de l'utilisateur avec accès rapide à chaque projet et création d'un nouveau dossier.",
    },
    {
      nom: "Workspace dossier",
      description:
        "Espace de travail principal organisé en 4 onglets : Saisie (11 modules de formulaires), Contrôle (14 états financiers), Diaporama et Imports.",
    },
    {
      nom: "Onglet Saisie",
      description:
        "11 modules de saisie : entreprise, hypothèses de CA, charges, investissements, financement, masse salariale, fiscalité (IS/IR/TVA), autres charges, autres produits, divers et unités d'œuvre.",
    },
    {
      nom: "Onglet Contrôle",
      description:
        "14 tableaux de résultats calculés en temps réel côté client : compte de résultat, SIG, budget, CAF, seuil de rentabilité, BFR, tableau de financement, plan de financement, bilan, ratios, trésorerie mensuelle, TVA, synthèse et dashboard KPI.",
    },
    {
      nom: "Simulateur de paie",
      description:
        "Simulateur de bulletin de salaire standalone couvrant CDI, CDD, apprentissage, contrat pro et stage. Projection annuelle, export PDF/CSV/JSON et sauvegarde de scénarios.",
    },
    {
      nom: "Admin — Paramètres de paie",
      description:
        "Page d'administration (non indexée) listant les paramètres réglementaires du moteur de paie par millésime : SMIC, PASS, taux Urssaf, Agirc-Arrco, RGDU.",
    },
  ],
  features: [
    {
      short: "Moteur financier temps réel",
      long: "Un moteur de calcul financier pur TypeScript (`buildFinCalc`) tourne entièrement côté client via `useMemo`. Toute modification d'une hypothèse recalcule instantanément l'ensemble du modèle (CR, bilan, BFR, trésorerie, IS…) sans aucun appel réseau.",
    },
    {
      short: "14 états financiers",
      long: "Compte de résultat prévisionnel, SIG, budget de trésorerie, CAF, seuil de rentabilité, BFR, tableau de financement, plan de financement, bilan, ratios financiers, trésorerie mensuelle, TVA, synthèse et dashboard KPI — tous calculés côté client.",
    },
    {
      short: "11 modules de saisie",
      long: "Formulaires métier complets pour modéliser un prévisionnel : hypothèses de CA avec saisonnalité, charges fixes/variables, investissements avec amortissements automatiques, financement avec échéancier, masse salariale, IS/IR/TVA, et divers flux de trésorerie.",
    },
    {
      short: "Moteur de paie français",
      long: "Simulateur de bulletin de salaire couvrant CDI, CDD, apprentissage, contrat pro et stage. Calcul des cotisations Urssaf, Agirc-Arrco, prévoyance, PAS, TNS, exonérations par type de contrat et régime Alsace-Moselle, basé sur les paramètres réglementaires 2026.",
    },
    {
      short: "Fiscalité française complète",
      long: "Gestion de l'impôt sur les sociétés (IS taux plein et réduit), de l'IR pour les régimes transparents, de la TVA (mensuelle/trimestrielle), des cotisations sociales TNS et des charges patronales — tous intégrés dans le modèle financier global.",
    },
    {
      short: "Export multi-format",
      long: "Export des données en Excel (ExcelJS), PDF et JSON/CSV pour le bulletin de paie. Diaporama intégré pour présenter le prévisionnel aux partenaires bancaires.",
    },
    {
      short: "Gestion de dossiers",
      long: "Création et gestion de plusieurs dossiers prévisionnels indépendants, avec paramétrage de la date de démarrage, de la durée de projection (1 à 3 exercices) et du régime fiscal.",
    },
  ],
  technicalHighlights: [
    "Architecture découplée : seules les données saisies sont persistées en DB (Prisma/PostgreSQL) ; tous les calculs financiers s'exécutent côté client en mémoire, éliminant tout stockage de résultats calculés.",
    "`React.cache()` côté serveur déduplique les appels `fetchScenarioData` dans la même requête Node.js, consolidant ~32 requêtes Prisma parallèles (`Promise.all`) en un seul point d'entrée réseau.",
    "Moteur de calcul `buildFinCalc` : fonctions pures et déterministes, modélisant des séries temporelles mensuelles (12 × N mois) avec saisonnalité, amortissements, échéanciers d'emprunts et accumulation de BFR.",
    "Moteur de paie modulaire avec registre de paramètres réglementaires versionné par millésime (SMIC, PASS, taux Urssaf, Agirc-Arrco, RGDU, exonérations par type de contrat), extensible et testable unitairement via Vitest.",
    "Store Zustand `useScenarioDataStore` comme unique point de chargement des données brutes ; les hooks de calcul par onglet (`useFinCalc`, `useBfrData`, `useCompteResultatData`…) consomment exclusivement ce store via `useMemo`.",
    "Saisie pilotée par React Hook Form + Zod avec auto-sauvegarde debounced et invalidation ciblée du store sans rechargement global de page.",
  ],
  links: {
    // TODO: Renseigner l'URL de démo une fois le projet déployé
    demo: "https://previsia.vercel.app",
    // github: "https://github.com/Ax-07/previsionnel_financier-app" // TODO: décommenter si repo public
  },
  status: "En développement",
  year: "2026",
};
