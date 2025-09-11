"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PROJECTS_CONTENT } from "@/constants";
import { ProjectStatusBadge } from "@/components/ui/project-status-badge";
import { ProjectImage } from "@/components/ui/project-image";
import { TechList } from "@/components/ui/tech-list";

const { projects, categories } = PROJECTS_CONTENT;

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");
  
  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-8">
            {/* Navigation de retour */}
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à l'accueil
                </Link>
              </Button>
            </div>

            {/* Titre de la page */}
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50">
                {PROJECTS_CONTENT.badge}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Tous mes
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> projets</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explorez l&apos;ensemble de mes réalisations. Cliquez sur un projet pour découvrir tous les détails techniques et fonctionnalités.
              </p>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "professional-button" 
                    : "border-primary-200 hover:bg-primary-50 hover:text-primary-700 dark:border-primary-800 dark:hover:bg-primary-950/50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projets en format liste/grid */}
      <section className="pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group h-full"
              >
                <Card 
                  className="glass-card h-full border-primary-200/50 dark:border-primary-800/50 floating-card group-hover:shadow-xl transition-all duration-300 cursor-pointer pt-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image du projet */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      overlay={true}
                      overlayContent={
                        <div className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Voir les détails
                        </div>
                      }
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <ProjectStatusBadge status={project.status} size="sm" />
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

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
                      
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.description.short}
                      </p>
                    </div>

                   <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, index) => (
                        <Badge
                          key={index}
                          className="rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800"
                        >
                          <span className="text-xs font-medium text-green-700 dark:text-green-300">{feature}</span>
                        </Badge>
                      ))}
                    </div>

                    {/* Technologies principales */}
                    <TechList 
                      technologies={project.technologies}
                      maxVisible={3}
                      size="sm"
                      showCounter={true}
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA de contact */}
          <div className="text-center mt-16">
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50 primary-glow max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Un projet en tête ?</h3>
                  <p className="text-muted-foreground">
                    Ces réalisations vous inspirent ? Discutons de votre prochain projet !
                  </p>
                  <Button asChild className="professional-button">
                    <Link href="/#contact">
                      Démarrer un projet
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
