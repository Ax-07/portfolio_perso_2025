// ==================================
// SECTION PROJETS
// ==================================
// ⚠️ Utilise brand.ts comme source de vérité pour les informations personnelles

import { SOCIAL_LINKS } from '@/config';
import type { Project, ProjectsContent } from '@/types/project';
import { PILEAH } from './projects';

const PROJECTS: Project[] = [
  PILEAH
]

export const PROJECTS_CONTENT: ProjectsContent = {
  badge: "Portfolio",
  title: "Sélection de",
  titleHighlight: "réalisations",
  description: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
  projects: PROJECTS,
  categories: ["Tous", "Full Stack", "Frontend", "Backend", "SaaS"],
  cta: {
    title: "Intéressé par mon travail ?",
    description_1: "Ces projets ne représentent qu'un aperçu de mes compétences.",
    description_2: "Discutons de votre prochain projet !",
    primary: {
      text: "Contactez-moi",
      href: "#contact"
    },
    secondary: {
      text: "Voir mon GitHub",
      href: SOCIAL_LINKS.find(link => link.name === "GitHub")?.href || "#"
    }
  }
} as const;

