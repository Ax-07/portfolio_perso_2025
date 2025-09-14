"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_SECTION_CONTENT } from "@/constants";
import { TechList } from "@/components/ui/tech-list";

const { projects } = PROJECTS_SECTION_CONTENT;

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="space-y-16">
          {/* En-tête de section */}
          <div className="text-center space-y-4">
            <Badge
              variant="outline"
              className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50 text-xs sm:text-sm px-2 sm:px-3 py-1"
            >
              {PROJECTS_SECTION_CONTENT.badge}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {PROJECTS_SECTION_CONTENT.title}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {" "}
                {PROJECTS_SECTION_CONTENT.titleHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              {PROJECTS_SECTION_CONTENT.description}
            </p>
          </div>

          {/* Grille de projets - 3 projets en aperçu */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectSectionCard key={project.id} project={project} />
            ))}
          </div>

          {/* CTA */}
          <ProjectSectionCTA />
        </div>
      </div>
    </section>
  );
}

interface ProjectSectionCardProps {
  project: (typeof projects)[number];
}

const ProjectSectionCard = React.memo(({ project }: ProjectSectionCardProps) => {
  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      Terminé: {
        color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400",
        icon: "✓",
      },
      "En cours": {
        color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-400",
        icon: "⏳",
      },
      Planifié: {
        color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-400",
        icon: "📋",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Planifié"];

    return (
      <Badge variant="outline" className={config.color}>
        {config.icon} {status}
      </Badge>
    );
  };

  return (
    <Card
      key={project.id}
      className="pt-0 glass-card border-primary-200/50 dark:border-primary-800/50 floating-card group hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/portfolio/${project.slug}`}>
        {/* Image du projet */}
        <div className="relative overflow-hidden rounded-t-lg border-b-1 border-primary-200/50 dark:border-primary-800/50">
          <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 flex items-center justify-center">
            {imageErrors[project.id] ? (
              <div className="text-primary-600 dark:text-primary-400">
                <Globe className="h-12 w-12" />
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                onError={() => handleImageError(project.id)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute top-3 left-3">{getStatusBadge(project.status)}</div>
          {/* Overlay avec bouton voir plus */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button asChild size="sm" className="bg-white text-black hover:bg-gray-100">
              <span>
                <Eye className="h-4 w-4 mr-2" />
                Voir le détail
              </span>
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <Badge variant="outline" className="text-xs shrink-0 ml-2">
              {project.category}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description.short}</p>
        </div>

        {/* Technologies principales seulement */}
        <TechList technologies={project.technologies} maxVisible={5} size="sm" showCounter={true} />

        {/* Actions simplifiées */}
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 mr-1" />
              Voir le site
            </a>
          </Button>
          {project.links.github && (
            <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
});
ProjectSectionCard.displayName = "ProjectSectionCard";

const ProjectSectionCTA = React.memo(() => {
  return (
    <Card className="text-center glass-card border-primary-200/50 dark:border-primary-800/50 primary-glow max-w-2xl mx-auto">
      <CardContent className="p-6 sm:p-8">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">{PROJECTS_SECTION_CONTENT.cta.title}</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            {PROJECTS_SECTION_CONTENT.cta.description_1}
            <br />
            {PROJECTS_SECTION_CONTENT.cta.description_2}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="professional-button w-full sm:w-auto">
              <Link href="/portfolio">
                <Eye className="h-4 w-4 mr-2" />
                <span className="text-sm sm:text-base">Voir tous mes projets</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto hover:neon-shadow">
              <Link href={PROJECTS_SECTION_CONTENT.cta.primary.href}>
                <span className="text-sm sm:text-base">{PROJECTS_SECTION_CONTENT.cta.primary.text}</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto hover:neon-shadow">
              <a href={PROJECTS_SECTION_CONTENT.cta.secondary.href} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                <span className="text-sm sm:text-base">{PROJECTS_SECTION_CONTENT.cta.secondary.text}</span>
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
ProjectSectionCTA.displayName = "ProjectSectionCTA";
