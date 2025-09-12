import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS_CONTENT } from "@/constants";
import { generateProjectMetadata, generateNotFoundMetadata } from "@/lib/metadata-utils";

interface ProjectLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return generateNotFoundMetadata();
  }

  return generateProjectMetadata(project);
}

export default async function ProjectLayout({ children, params }: ProjectLayoutProps) {
  const { slug } = await params;
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {children}
    </>
  );
}