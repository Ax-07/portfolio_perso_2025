import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { PROJECTS_CONTENT } from "@/constants";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Générer les métadonnées pour chaque projet
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Le projet demandé n'existe pas."
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description.short,
    openGraph: {
      title: project.title,
      description: project.description.short,
      images: [project.image],
    },
  };
}

// Générer les routes statiques pour tous les projets
export function generateStaticParams() {
  return PROJECTS_CONTENT.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectStructuredData project={project} />
      <ProjectDetailPage project={project} />
    </>
  );
}
