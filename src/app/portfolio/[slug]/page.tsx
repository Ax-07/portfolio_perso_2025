import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { PROJECTS_CONTENT } from "@/constants";
import { Header } from "@/components/layouts/header";
import { generateProjectMetadata, generateNotFoundMetadata } from "@/lib/metadata-utils";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return generateNotFoundMetadata();
  }

  return generateProjectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header/>
      <ProjectStructuredData project={project} />
      <ProjectDetailPage project={project} />
    </>
  );
}
