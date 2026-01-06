import { ProjectDetailPage } from "@/components/pages";
import { ProjectStructuredData } from "@/components/seo/project-structured-data";
import { PROJECTS_SECTION_CONTENT } from "@/constants";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
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
