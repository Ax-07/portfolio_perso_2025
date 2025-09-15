// ====================================================================
// LIENS DE NAVIGATION CENTRALISÉS
// ====================================================================
// ⚠️ Les informations personnelles proviennent maintenant de brand.ts

import { User, Mail, Home, Code2, FolderOpen, CloudFog, ShoppingCart, Briefcase } from "lucide-react";

// ==================================
// NAVIGATION PRINCIPALE (Header)
// ==================================

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    name: "Accueil",
    href: "/#",
    icon: Home,
    description: "Retour à l'accueil"
  },
  {
    name: "À propos",
    href: "/#about",
    icon: User,
    description: "Découvrez mon parcours"
  },
  {
    name: "Projets",
    href: "/#projects",
    icon: Code2,
    description: "Mes réalisations"
  },
  {
    name: "Contact",
    href: "/#contact",
    icon: Mail,
    description: "Travaillons ensemble"
  },
] as const;

// ==================================
// LIENS EXTERNES (Pages séparées)
// ==================================

export const EXTERNAL_LINKS = [
  {
    name: "SAAS",
    href: "/portfolio/demo-saas",
    icon: CloudFog,
    description: "Application SaaS complète"
  },
  {
    name: "E-commerce",
    href: "/portfolio/demo-ecommerce",
    icon: ShoppingCart,
    description: "Boutique en ligne fonctionnelle"
  },
  {
    name: "Site vitrine",
    href: "/portfolio/demo-portfolio",
    icon: Briefcase,
    description: "Site portfolio professionnel"
  },
  {
    name: "Voir tous",
    href: "/portfolio",
    icon: FolderOpen,
    description: "Tous mes projets en détail"
  },
] as const;

// ==================================
// NAVIGATION FOOTER
// ==================================

export const FOOTER_NAVIGATION = {
  main: MAIN_NAVIGATION,
  external: EXTERNAL_LINKS,
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
