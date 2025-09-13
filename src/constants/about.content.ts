// ==================================
// SECTION À PROPOS
// ==================================
// ⚠️ Utilise brand.ts comme source de vérité pour les informations personnelles

import { PERSONAL_INFO, TECH_STACK } from "@/config";
import { Database, MonitorSmartphone, Server, Settings, Shield, Users, Zap } from "lucide-react";

export const ABOUT_CONTENT = {
  badge: "À propos de moi",
  title: "Passionné par le",
  titleHighlight: " développement web",
  description: `Avec plus de ${PERSONAL_INFO.stats.experience.replace('+', '')} années d'expérience, je crée des solutions web innovantes qui allient design moderne et performance technique.`,

  journey: {
    title: "Mon parcours",
    subtitle: PERSONAL_INFO.jobTitle,
    content: [
      "Diplômé en informatique et passionné de nouvelles technologies, j'ai débuté ma carrière en me spécialisant dans l'écosystème JavaScript.",
      `Au fil des ans, j'ai développé une expertise approfondie en ${TECH_STACK.main.slice(0, 3).join(', ')}, tout en gardant une veille technologique constante pour intégrer les meilleures pratiques dans mes projets.`,
      "Aujourd'hui, je me concentre sur la création d'applications web performantes qui offrent une expérience utilisateur exceptionnelle tout en respectant les standards de sécurité et d'accessibilité.",
    ],
    values: ["TypeScript", "Next.js", "React", "Node.js","PostgreSQL", "Tailwind CSS"],
  },

  skills: {
    title: "Stack technique",
    description: "Technologies et outils que j'utilise",
    categories: [
      {
        name: "Frontend",
        icon: MonitorSmartphone,
        color: "text-blue-500",
        listDiscColor: "bg-blue-500",
        skills: TECH_STACK.frontend.map(tech => ({ name: tech })),
      },
      {
        name: "Backend",
        icon: Server,
        color: "text-yellow-500",
        listDiscColor: "bg-yellow-500",
        skills: TECH_STACK.backend.map(tech => ({ name: tech })),
      },
      {
        name: "Database",
        icon: Database,
        color: "text-purple-500",
        listDiscColor: "bg-purple-500",
        skills: TECH_STACK.database.map(tech => ({ name: tech })),
      },
      {
        name: "DevOps & Cloud",
        icon: Settings,
        color: "text-orange-500",
        listDiscColor: "bg-orange-500",
        skills: TECH_STACK.devops.map(tech => ({ name: tech })),
      },
    ],
  },

  values: {
    title: "Mes valeurs professionnelles",
    description: "Ce qui guide mon approche du développement",
    list: [
      {
        icon: Users,
        title: "Collaboration",
        description: "Communication transparente et travail d'équipe efficace",
      },
      {
        icon: Zap,
        title: "Innovation",
        description: "Utilisation des dernières technologies et bonnes pratiques",
      },
      {
        icon: Shield,
        title: "Fiabilité",
        description: "Livraison dans les délais avec la qualité attendue",
      },
    ],
  },

  cta: {
    title: "Travaillons ensemble",
    description:
      "Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à le concrétiser avec une solution technique adaptée à vos besoins.",
    primary: {
      text: "Contactez-moi",
      href: "#contact",
    },
    secondary: {
      text: "Voir mes réalisations",
      href: "/portfolio",
    },
  },
} as const;
