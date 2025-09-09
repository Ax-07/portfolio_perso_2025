"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Globe, 
  Github, 
  Code,
  CheckCircle,
  Target,
  Lightbulb,
  BarChart3,
  Wrench,
  Palette,
  Shield
} from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";
import { ProjectStatusBadge } from "@/components/ui/project-status-badge";
import { ProjectImage } from "@/components/ui/project-image";
import { TechList } from "@/components/ui/tech-list";
import { getTotalTechnologiesCount, getAllTechnologies } from "@/lib/project-utils";

interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header compact */}
      <section className="py-6 md:py-8 border-b">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Navigation */}
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Portfolio
              </Link>
            </Button>
            <div className="h-4 w-px bg-border" />
            <Button asChild variant="ghost" size="sm">
              <Link href="/#projects">Accueil</Link>
            </Button>
          </div>

          {/* Header principal */}
          <div className="space-y-6">
            {/* Badges et métadonnées */}
            <div className="flex items-center gap-3 flex-wrap">
              <ProjectStatusBadge status={project.status} />
              <Badge variant="outline">{project.category}</Badge>
              <Badge variant="secondary">{project.year}</Badge>
            </div>

            {/* Titre et description */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
                {project.description.short}
              </p>
            </div>

            {/* Actions principales */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="professional-button">
                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Voir la démo live
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code source
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image hero pleine largeur */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <ProjectImage
              src={project.image}
              alt={project.title}
              className="rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* Contenu organisé en tabs */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              
              {/* Navigation des tabs */}
              <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex lg:h-auto">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Aperçu
                </TabsTrigger>
                <TabsTrigger value="tech" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Technologies
                </TabsTrigger>
                <TabsTrigger value="details" className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Technique
                </TabsTrigger>
                <TabsTrigger value="context" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Contexte
                </TabsTrigger>
              </TabsList>

              {/* Tab Aperçu */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Présentation générale */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">À propos du projet</h2>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description.long}
                        </p>
                      </div>
                    </div>

                    {/* Fonctionnalités */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Fonctionnalités principales</h3>
                      <div className="space-y-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Informations projet */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Informations projet</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-muted-foreground">Statut</span>
                            <div className="mt-1">
                              <ProjectStatusBadge status={project.status} />
                            </div>
                          </div>
                          <div>
                            <span className="font-medium text-muted-foreground">Année</span>
                            <div className="mt-1 font-medium">{project.year}</div>
                          </div>
                          <div>
                            <span className="font-medium text-muted-foreground">Catégorie</span>
                            <div className="mt-1">
                              <Badge variant="outline">{project.category}</Badge>
                            </div>
                          </div>
                          <div>
                            <span className="font-medium text-muted-foreground">Technologies</span>
                            <div className="mt-1 font-medium">{getTotalTechnologiesCount(project.technologies)}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Points techniques */}
                    {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Points techniques</h3>
                        <div className="space-y-2">
                          {project.technicalHighlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Wrench className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Tab Technologies */}
              <TabsContent value="tech" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Stack technique</h2>
                      <div className="space-y-6">
                        <TechList technologies={project.technologies} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Architecture du projet</h3>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Ce projet utilise une architecture moderne et modulaire basée sur les technologies {getAllTechnologies(project.technologies).slice(0, 3).join(", ")} 
                          pour garantir performance, maintenabilité et évolutivité.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Répartition des technologies</h3>
                      <div className="space-y-3">
                        {Object.entries(project.technologies).map(([category, techs]) => (
                          techs && Array.isArray(techs) && techs.length > 0 && (
                            <div key={category} className="flex items-center justify-between p-3 bg-muted/30 rounded">
                              <span className="text-sm font-medium capitalize">{category}</span>
                              <span className="text-sm text-muted-foreground">{techs.length} technologie{techs.length > 1 ? 's' : ''}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Tab Technique */}
              <TabsContent value="details" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Implémentation technique</h2>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Structure du projet
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Architecture organisée avec séparation claire des responsabilités entre 
                            les composants, les services et la logique métier.
                          </p>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Palette className="h-4 w-4" />
                            Design System
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Interface utilisateur cohérente avec un système de design modulaire 
                            et des composants réutilisables.
                          </p>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Bonnes pratiques
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Code typé, tests unitaires, validation des données et 
                            optimisation des performances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Optimisations</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded border-l-2 border-green-500">
                          <span className="text-sm font-medium">Performance</span>
                          <span className="text-sm text-green-600 dark:text-green-400">Optimisé</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded border-l-2 border-blue-500">
                          <span className="text-sm font-medium">Accessibilité</span>
                          <span className="text-sm text-blue-600 dark:text-blue-400">WCAG 2.1</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/20 rounded border-l-2 border-purple-500">
                          <span className="text-sm font-medium">SEO</span>
                          <span className="text-sm text-purple-600 dark:text-purple-400">Optimisé</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
                      <div className="space-y-3">
                        <Button asChild variant="outline" className="w-full justify-start">
                          <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4 mr-2" />
                            Voir la démo live
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full justify-start">
                          <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code source
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Tab Contexte */}
              <TabsContent value="context" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Contexte et objectifs</h2>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                          Ce projet {project.category.toLowerCase()} a été développé dans le cadre de 
                          l&apos;apprentissage et de la maîtrise des technologies web modernes, 
                          avec un focus sur les bonnes pratiques de développement.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Objectifs du projet</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Maîtriser les technologies {getAllTechnologies(project.technologies).slice(0, 2).join(" et ")}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Créer une expérience utilisateur moderne et intuitive
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Respecter les standards web et d&apos;accessibilité
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Apprentissages clés</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border-l-2 border-blue-500">
                          <span className="text-sm text-blue-700 dark:text-blue-300">
                            Architecture moderne avec {getAllTechnologies(project.technologies)[0] || 'technologies avancées'}
                          </span>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border-l-2 border-green-500">
                          <span className="text-sm text-green-700 dark:text-green-300">
                            Optimisation des performances et de l&apos;expérience utilisateur
                          </span>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded border-l-2 border-purple-500">
                          <span className="text-sm text-purple-700 dark:text-purple-300">
                            Intégration de bonnes pratiques de développement
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Perspectives d&apos;évolution</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Ajout de nouvelles fonctionnalités utilisateur
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Optimisation continue des performances
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Migration vers les dernières versions des frameworks
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
