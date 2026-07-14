import { Project } from "@/types/project";

export const PREVISIA: Project = {
  id: 4, // ⚠️ À mettre à jour avec le prochain id disponible dans le portfolio
  slug: "previsia",
  title: "Previsia",
  description: {
    short:
      "SaaS de pilotage et de prévision financière destiné aux porteurs de projet et aux experts-comptables.",
    long: `Conçu avec Next.js 16, TypeScript strict, Prisma, PostgreSQL et Tailwind CSS v4, Previsia permet de construire, analyser et présenter un prévisionnel financier complet. Son moteur de calcul en TypeScript génère en temps réel 14 états financiers, notamment le compte de résultat, le bilan, la trésorerie et le BFR. L'application intègre également un moteur de paie autonome adapté à la réglementation sociale française 2026.`,
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
    "Proposer une plateforme SaaS accessible permettant aux entrepreneurs, dirigeants et professionnels du chiffre de construire un prévisionnel financier complet, cohérent et exploitable. Previsia centralise la saisie des hypothèses, automatise les calculs financiers et facilite la présentation du projet auprès des partenaires, investisseurs et établissements bancaires.",
  defi:
    "Concevoir un moteur de calcul financier capable de transformer des hypothèses métier en états financiers cohérents sur une période de 1 à 3 exercices. L'un des principaux défis a été de garantir la fiabilité des séries temporelles mensuelles et l'interdépendance des calculs liés au compte de résultat, au bilan, au BFR, à la trésorerie, à la fiscalité, aux investissements et aux financements. Le moteur de paie a également nécessité une modélisation détaillée de la réglementation Urssaf, Agirc-Arrco et TNS 2026, avec la prise en charge des exonérations propres à chaque type de contrat.",
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
        "Page marketing présentant l'univers de Previsia, ses fonctionnalités, ses différents modules, ses offres, sa FAQ et ses principaux appels à l'action. Elle est entièrement construite avec des Server Components.",
    },
    {
      nom: "Dashboard dossiers",
      description:
        "Espace central permettant de créer, consulter et gérer les différents dossiers prévisionnels de l'utilisateur.",
    },
    {
      nom: "Workspace dossier",
      description:
        "Espace de travail principal d'un dossier, organisé autour de quatre sections complémentaires : saisie des hypothèses, contrôle financier, présentation et import de données.",
    },
    {
      nom: "Onglet Saisie",
      description:
        "11 modules de saisie : entreprise, hypothèses de CA, charges, investissements, financement, masse salariale, fiscalité (IS/IR/TVA), autres charges, autres produits, divers et unités d'œuvre.",
    },
    {
      nom: "Onglet Contrôle",
      description:
        "Espace d'analyse regroupant 14 états financiers calculés en temps réel : compte de résultat, SIG, budget, CAF, seuil de rentabilité, BFR, tableaux de financement, bilan, ratios, trésorerie mensuelle, TVA, synthèse et dashboard de KPI.",
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
      long: "Le moteur de calcul financier `buildFinCalc`, développé en TypeScript sous forme de fonctions pures, s'exécute entièrement côté client via `useMemo`. Chaque modification d'une hypothèse met instantanément à jour l'ensemble du modèle financier, sans appel réseau supplémentaire.",
    },
    {
      short: "14 états financiers",
      long: "Previsia génère automatiquement les principaux documents nécessaires à l'analyse d'un projet : compte de résultat prévisionnel, SIG, budget de trésorerie, CAF, seuil de rentabilité, BFR, tableaux de financement, bilan, ratios financiers, suivi de TVA, synthèse et dashboard de KPI.",
    },
    {
      short: "11 modules de saisie",
      long: "Des formulaires métier structurés permettent de modéliser chaque composante du projet : chiffre d'affaires et saisonnalité, charges fixes et variables, investissements, amortissements, financements, masse salariale, fiscalité et autres flux de trésorerie.",
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
      long: "L'utilisateur peut créer et gérer plusieurs projets financiers indépendants, en définissant pour chacun la date de démarrage, la durée de projection, le régime fiscal et les principales hypothèses économiques.",
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
