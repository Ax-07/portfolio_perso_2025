import { ProjectDetailPage } from "@/components/pages";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { PROJECTS_SECTION_CONTENT } from "@/constants";
import { JSX } from "react";

/**
 * Props de la page dynamique de projet.
 * 
 * @interface ProjectPageProps
 * @property {Promise<{ slug: string }>} params - Paramètres de route dynamique (slug du projet)
 */
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Page dynamique affichant les détails d'un projet spécifique du portfolio.
 * 
 * Cette page serveur asynchrone récupère un projet par son slug et affiche
 * sa page détaillée avec les données structurées pour le SEO.
 * 
 * **Architecture** :
 * - Route dynamique : `/portfolio/[slug]`
 * - Récupération du projet depuis les constantes (PROJECTS_SECTION_CONTENT)
 * - Validation préalable effectuée par le layout parent
 * - Structured data (Schema.org) pour améliorer le référencement
 * 
 * **Composants rendus** :
 * - `ProjectStructuredData` : Métadonnées structurées JSON-LD pour Google
 * - `ProjectDetailPage` : Contenu détaillé du projet (hero, galerie, technologies, etc.)
 * 
 * @param {ProjectPageProps} props - Props contenant le slug du projet
 * @returns {Promise<JSX.Element>} La page de détail du projet avec structured data
 * 
 * @throws {Error} Si le projet n'existe pas (ne devrait jamais arriver car validé par le layout)
 * 
 * @example
 * // Route: /portfolio/booking-pro
 * // Affiche le projet avec slug "booking-pro"
 * 
 * @async
 * @server-component
 */
export default async function ProjectPage({ params }: ProjectPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  // Recherche du projet correspondant au slug dans les constantes
  const project = PROJECTS_SECTION_CONTENT.projects.find((p) => p.slug === slug);

  // Le projet est forcément valide car le layout l'a déjà vérifié
  if (!project) {
    throw new Error("Project should exist at this point");
  }

  return (
    <>
      <ProjectStructuredData project={project} />
      <ProjectDetailPage project={project} />
    </>
  );
}
