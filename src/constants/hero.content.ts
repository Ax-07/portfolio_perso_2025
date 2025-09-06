// ==================================
// SECTION HERO
// ==================================
// ⚠️ Utilise brand.ts comme source de vérité pour les informations personnelles

import { PERSONAL_INFO, TECH_STACK, ONLINE_PRESENCE } from '@/config';

export const HERO_CONTENT = {
  badge: `🚀 ${PERSONAL_INFO.status.availabilityText}`,
  name: PERSONAL_INFO.fullName,
  title: PERSONAL_INFO.jobTitle,
  description: `passionné par la création d'applications web modernes et performantes. Je transforme vos idées en solutions digitales innovantes.`,
  technologies: TECH_STACK.main,
  cta: {
    primary: {
      text: "Voir mes réalisations",
      href: "#projects"
    },
    secondary: {
      text: "Me contacter",
      href: "#contact"
    }
  },
  social: {
    title: "Suivez-moi :",
    github: ONLINE_PRESENCE.social.find(s => s.name === "GitHub")?.url || "https://github.com",
    linkedin: ONLINE_PRESENCE.social.find(s => s.name === "LinkedIn")?.url || "https://linkedin.com",
    cv: "/cv.pdf"
  },
  stats: [
    { value: PERSONAL_INFO.stats.experience, label: PERSONAL_INFO.stats.experienceLabel },
    { value: PERSONAL_INFO.stats.projects, label: PERSONAL_INFO.stats.projectsLabel },
    { value: PERSONAL_INFO.stats.satisfaction, label: PERSONAL_INFO.stats.satisfactionLabel }
  ]
} as const;