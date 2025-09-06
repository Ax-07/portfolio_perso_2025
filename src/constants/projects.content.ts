// ==================================
// SECTION PROJETS
// ==================================
// ⚠️ Utilise brand.ts comme source de vérité pour les informations personnelles

import { SOCIAL_LINKS } from '@/config';
import type { ProjectsContent } from '@/types/project';

export const PROJECTS_CONTENT: ProjectsContent = {
  badge: "Portfolio",
  title: "Mes dernières",
  titleHighlight: "réalisations",
  description: "Découvrez une sélection de projets sur lesquels j'ai travaillé, mettant en avant mes compétences en développement web et ma capacité à transformer des idées en solutions concrètes.",
  projects: [
    {
      id: 1,
      slug: "e-commerce-moderne",
      title: "E-commerce Moderne",
      description: "Plateforme e-commerce complète avec Next.js 15, Stripe et authentification avancée. Interface admin, gestion des stocks et analytics en temps réel.",
      image: "/images/project-ecommerce.jpg",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
      features: ["Paiements Stripe", "Dashboard Admin", "SEO Optimisé", "Analytics"],
      links: {
        demo: "https://demo-ecommerce.com",
        github: "https://github.com/xavier/ecommerce"
      },
      status: "Terminé",
      year: "2024"
    },
    {
      id: 2,
      slug: "application-saas",
      title: "Application SaaS",
      description: "Plateforme SaaS multi-tenant avec authentification, facturation automatique et dashboard analytics avancé pour la gestion d'équipes.",
      image: "/images/project-saas.jpg",
      category: "SaaS",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      features: ["Multi-tenant", "Billing Auto", "API REST", "WebSocket"],
      links: {
        demo: "https://saas-platform.com",
        github: "https://github.com/xavier/saas-platform"
      },
      status: "En cours",
      year: "2024"
    },
    {
      id: 3,
      slug: "portfolio-agence",
      title: "Portfolio Agence",
      description: "Site vitrine moderne pour agence web avec animations fluides, CMS headless et optimisation SEO avancée pour la performance.",
      image: "/images/project-agency.jpg",
      category: "Frontend",
      technologies: ["Next.js", "Framer Motion", "Sanity", "Vercel"],
      features: ["Animations CSS", "CMS Headless", "Performance 100", "Mobile First"],
      links: {
        demo: "https://agence-portfolio.com",
        github: "https://github.com/xavier/agency-portfolio"
      },
      status: "Terminé",
      year: "2023"
    },
    {
      id: 4,
      slug: "api-graphql",
      title: "API GraphQL",
      description: "API GraphQL robuste avec authentification JWT, cache Redis et déploiement automatisé sur AWS avec monitoring complet.",
      image: "/images/project-api.jpg",
      category: "Backend",
      technologies: ["GraphQL", "Node.js", "MongoDB", "Redis", "AWS"],
      features: ["JWT Auth", "Cache Redis", "CI/CD", "Monitoring"],
      links: {
        demo: "https://api-docs.com",
        github: "https://github.com/xavier/graphql-api"
      },
      status: "Terminé",
      year: "2023"
    }
  ],
  categories: ["Tous", "Full Stack", "Frontend", "Backend", "SaaS"],
  cta: {
    title: "Intéressé par mon travail ?",
    description_1: "Ces projets ne représentent qu'un aperçu de mes compétences.",
    description_2: "Discutons de votre prochain projet !",
    primary: {
      text: "Démarrer un projet",
      href: "#contact"
    },
    secondary: {
      text: "Voir mon GitHub",
      href: SOCIAL_LINKS.find(link => link.name === "GitHub")?.href || "#"
    }
  }
} as const;