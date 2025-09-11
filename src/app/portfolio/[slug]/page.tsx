import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { PROJECTS_CONTENT } from "@/constants";
import { Header } from "@/components/layouts/header";
import { SITE_METADATA } from "@/config";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | ${SITE_METADATA.author}`,
    description: project.description.short,
    openGraph: {
      title: project.title,
      description: project.description.short,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header>
         
      </Header>
      <ProjectStructuredData project={project} />
      <ProjectDetailPage project={project} />
    </>
  );
}
