// ====================================================================
// LIENS DE NAVIGATION CENTRALISÉS
// ====================================================================
// ⚠️ Les informations personnelles proviennent maintenant de brand.ts

import { User, Mail, Home, Code2, FolderOpen } from "lucide-react";

// ==================================
// NAVIGATION PRINCIPALE (Header)
// ==================================

export const MAIN_NAVIGATION = [
  {
    name: "Accueil",
    href: "/",
    icon: Home,
    description: "Retour à l'accueil"
  },
  {
    name: "À propos",
    href: "#about",
    icon: User,
    description: "Découvrez mon parcours"
  },
  {
    name: "Projets",
    href: "#projects",
    icon: Code2,
    description: "Mes réalisations"
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: FolderOpen,
    description: "Tous mes projets en détail"
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
    description: "Travaillons ensemble"
  },
] as const;

// ==================================
// NAVIGATION FOOTER
// ==================================

export const FOOTER_NAVIGATION = {
  main: MAIN_NAVIGATION,
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/politique-confidentialite" }
  ]
} as const;

// ==================================
// SECTIONS DU SITE (pour ancres)
// ==================================

export const SECTIONS = {
  hero: "#hero",
  about: "#about",
  projects: "#projects",
  contact: "#contact",
} as const;
