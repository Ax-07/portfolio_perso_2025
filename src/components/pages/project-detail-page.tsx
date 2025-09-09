"use client";

import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Github,
  Globe,
  Calendar,
  CheckCircle,
  CheckSquare,
  Code,
  Zap,
  Target,
  MonitorSmartphone,
  Server,
  Database,
  ToolCase,
  Cloud,
  Layers,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";
import { ProjectStatusBadge } from "@/components/ui/project-status-badge";
import { ProjectImage } from "@/components/ui/project-image";
import {
  getTotalTechnologiesCount,
  hasFrontendTechnologies,
  hasBackendTechnologies,
  hasDatabaseTechnologies,
  hasDeploymentTechnologies,
} from "@/lib/project-utils";

interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Header avec navigation */}
      <section className="py-8 md:py-12 border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au portfolio
              </Link>
            </Button>
            <div className="h-4 w-px bg-border" />
            <Button asChild variant="ghost" size="sm">
              <Link href="/#projects">Accueil</Link>
            </Button>
          </div>

          {/* Titre et infos principales */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <ProjectStatusBadge status={project.status} size="default" />
                  <Badge variant="outline">{project.category}</Badge>
                  <Badge variant="secondary">{project.year}</Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{project.title}</h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.description.short}
                </p>
              </div>
            </div>

            {/* Image du projet */}
            <div className="relative">
              <ProjectImage
                src={project.image}
                alt={project.title}
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenu détaillé */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* 1. Vue d'ensemble du projet */}
              <Card className="glass-card border-l-4 border-l-primary-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary-600" />
                    <h2 className="text-xl font-bold">Vue d&apos;ensemble</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Objectifs, défis relevés et statistiques du projet
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Objectifs et Défis */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold flex items-center gap-2 text-primary-600">
                        <Target className="h-4 w-4" />
                        Objectifs
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed bg-primary-50 dark:bg-primary-950/30 p-4 rounded-lg border border-primary-200 dark:border-primary-800">
                        {project.objectif}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold flex items-center gap-2 text-amber-600">
                        <Zap className="h-4 w-4" />
                        Défis relevés
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                        {project.defi}
                      </p>
                    </div>
                  </div>

                  {/* Stats rapides */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-950/30">
                      <div className="text-2xl font-bold text-primary-600">
                        {getTotalTechnologiesCount(project.technologies)}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Technologies</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-950/30">
                      <div className="text-2xl font-bold text-primary-600">{project.features.length}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Fonctionnalités</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-slate-50 dark:bg-slate-950/30">
                      <div className="text-2xl font-bold text-primary-600">{project.year}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Année</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Fonctionnalités */}
              <Card className="glass-card border-l-4 border-l-emerald-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-emerald-600" />
                    <h2 className="text-xl font-bold">Fonctionnalités</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Principales fonctionnalités développées dans ce projet
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 3. Stack technique détaillé */}
              <Card className="glass-card border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Stack technique</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Technologies et outils utilisés dans ce projet
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {hasFrontendTechnologies(project.technologies.frontend) && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                          <MonitorSmartphone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Frontend
                        </h3>
                        <div className="grid gap-2 text-sm">
                          {project.technologies.frontend?.language && (
                            <div className="flex items-start gap-2">
                              
                              <span className="font-medium text-foreground min-w-fit">Langage:</span>
                              <span className="text-muted-foreground">{project.technologies.frontend.language}</span>
                            </div>
                          )}
                          {project.technologies.frontend?.frameworks && project.technologies.frontend.frameworks.length > 0 && (
                            <div className="flex items-start gap-2">
                              <span className="font-medium text-foreground min-w-fit">Frameworks:</span>
                              <span className="text-muted-foreground">{project.technologies.frontend.frameworks.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.frontend?.styling && project.technologies.frontend.styling.length > 0 && (
                            <div className="flex items-start gap-2">
                              <span className="font-medium text-foreground min-w-fit">Styling:</span>
                              <span className="text-muted-foreground">{project.technologies.frontend.styling.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.frontend?.uiLibraries && project.technologies.frontend.uiLibraries.length > 0 && (
                            <div className="flex items-start gap-2">
                              <span className="font-medium text-foreground min-w-fit">UI Libraries:</span>
                              <span className="text-muted-foreground">{project.technologies.frontend.uiLibraries.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.frontend?.stateManagement && project.technologies.frontend.stateManagement.length > 0 && (
                            <div className="flex items-start gap-2">
                              <span className="font-medium text-foreground min-w-fit">State Management:</span>
                              <span className="text-muted-foreground">{project.technologies.frontend.stateManagement.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.frontend?.libraries && project.technologies.frontend.libraries.length > 0 && (
                            <div className="flex items-start gap-2">
                              <span className="font-medium text-foreground min-w-fit">Libraries:</span>
                              <span className="text-muted-foreground">{project.technologies.frontend.libraries.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {hasBackendTechnologies(project.technologies.backend) && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border border-yellow-200 dark:border-yellow-800">
                        <h3 className="text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                          <Server className="size-4 text-yellow-600 dark:text-yellow-400" />
                          Backend
                        </h3>
                        <div className="grid gap-2 text-sm">
                          {project.technologies.backend?.language && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Langage:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.language}</span>
                            </div>
                          )}
                          {project.technologies.backend?.runtime && project.technologies.backend.runtime.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Runtime:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.runtime.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.backend?.frameworks && project.technologies.backend.frameworks.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Frameworks:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.frameworks.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.backend?.apiTypes && project.technologies.backend.apiTypes.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">API Types:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.apiTypes.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.backend?.security && project.technologies.backend.security.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Security:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.security.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.backend?.authentication && project.technologies.backend.authentication.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Authentication:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.authentication.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.backend?.libraries && project.technologies.backend.libraries.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Libraries:</span>
                              <span className="text-muted-foreground">{project.technologies.backend.libraries.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {hasDatabaseTechnologies(project.technologies.database) && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-800">
                        <h3 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                          <Database className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          Base de données
                        </h3>
                        <div className="grid gap-2 text-sm">
                          {project.technologies.database?.databases && project.technologies.database.databases.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Databases:</span>
                              <span className="text-muted-foreground">{project.technologies.database.databases.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.database?.orm && project.technologies.database.orm.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">ORM:</span>
                              <span className="text-muted-foreground">{project.technologies.database.orm.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {project.technologies.tools && project.technologies.tools.length > 0 && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30 border border-slate-200 dark:border-slate-800">
                        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                          <ToolCase className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                          Outils
                        </h3>
                        <div className="grid gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground min-w-fit">Tools:</span>
                            <span className="text-muted-foreground">{project.technologies.tools.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {hasDeploymentTechnologies(project.technologies.deployment) && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800">
                        <h3 className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                          <Cloud className="h-4 w-4 text-green-600 dark:text-green-400" />
                          Déploiement
                        </h3>
                        <div className="grid gap-2 text-sm">
                          {project.technologies.deployment?.platforms && project.technologies.deployment.platforms.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Platforms:</span>
                              <span className="text-muted-foreground">{project.technologies.deployment.platforms.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.deployment?.containerization && project.technologies.deployment.containerization.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">Containerization:</span>
                              <span className="text-muted-foreground">{project.technologies.deployment.containerization.join(", ")}</span>
                            </div>
                          )}
                          {project.technologies.deployment?.ciCd && project.technologies.deployment.ciCd.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground min-w-fit">CI/CD:</span>
                              <span className="text-muted-foreground">{project.technologies.deployment.ciCd.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 4. Aspects techniques */}
              {project.technicalHighlights && (
                <Card className="glass-card border-l-4 border-l-amber-500">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-amber-600" />
                      <h2 className="text-xl font-bold">Détails techniques</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Solutions techniques mises en œuvre dans ce projet
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.technicalHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2"></div>
                          <span className="text-sm text-foreground leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar avec informations complémentaires */}
            <div className="lg:sticky lg:top-8 space-y-6 h-fit">
              {/* Informations du projet */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-slate-600" />
                    <h3 className="font-bold">Détails du projet</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Statut</span>
                      <div className="flex items-center gap-2">
                        <ProjectStatusBadge status={project.status} size="default" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Catégorie</span>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Année</span>
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Type de développement</span>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Pages développées</span>
                      <div className="flex items-center gap-1">
                        <FileText className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm font-medium">{project.pages.length}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Technologies utilisées</span>
                      <div className="flex items-center gap-1">
                        <Layers className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm font-medium">{getTotalTechnologiesCount(project.technologies)}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Complexité</span>
                      <Badge 
                        variant={getTotalTechnologiesCount(project.technologies) > 15 ? "destructive" : 
                                getTotalTechnologiesCount(project.technologies) > 10 ? "default" : "secondary"} 
                        className="text-xs"
                      >
                        {getTotalTechnologiesCount(project.technologies) > 15 ? "Élevée" : 
                         getTotalTechnologiesCount(project.technologies) > 10 ? "Moyenne" : "Standard"}
                      </Badge>
                    </div>
                    <Separator />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">Stack principale</span>
                      </div>
                      <div className="space-y-2">
                        {(project.technologies.frontend?.frameworks || project.technologies.frontend?.styling) && (
                          <div className="flex items-center gap-2 text-xs">
                            <MonitorSmartphone className="h-3 w-3 text-blue-500" />
                            <span className="text-muted-foreground">Frontend:</span>
                            {project.technologies.frontend.frameworks && project.technologies.frontend.frameworks.length > 0 && (
                              <span className="font-medium">{project.technologies.frontend.frameworks[0]}</span>
                            )}
                            {project.technologies.frontend.styling && project.technologies.frontend.styling.length > 0 && (
                              <span className="text-muted-foreground">+ {project.technologies.frontend.styling[0]}</span>
                            )}
                          </div>
                        )}
                        {(project.technologies.backend?.runtime || project.technologies.backend?.frameworks) && (
                          <div className="flex items-center gap-2 text-xs">
                            <Server className="h-3 w-3 text-yellow-500" />
                            <span className="text-muted-foreground">Backend:</span>
                            {project.technologies.backend.runtime && project.technologies.backend.runtime.length > 0 && (
                              <span className="font-medium">{project.technologies.backend.runtime[0]}</span>
                            )}
                            {project.technologies.backend.frameworks && project.technologies.backend.frameworks.length > 0 && (
                              <span className="text-muted-foreground">+ {project.technologies.backend.frameworks[0]}</span>
                            )}
                          </div>
                        )}
                        {project.technologies.database?.databases && project.technologies.database.databases.length > 0 && (
                          <div className="flex items-center gap-2 text-xs">
                            <Database className="h-3 w-3 text-indigo-500" />
                            <span className="text-muted-foreground">Database:</span>
                            <span className="font-medium">{project.technologies.database.databases[0]}</span>
                            {project.technologies.database.orm && project.technologies.database.orm.length > 0 && (
                              <span className="text-muted-foreground">+ {project.technologies.database.orm[0]}</span>
                            )}
                          </div>
                        )}
                        {project.technologies.deployment?.platforms && project.technologies.deployment.platforms.length > 0 && (
                          <div className="flex items-center gap-2 text-xs">
                            <Cloud className="h-3 w-3 text-green-500" />
                            <span className="text-muted-foreground">Deploy:</span>
                            <span className="font-medium">{project.technologies.deployment.platforms[0]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3">
                  <Button asChild className="w-full justify-start professional-button">
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
                </CardFooter>
              </Card>

              {/* Actions principales */}
              {/* <Card className="glass-card border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold">Actions</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full justify-start professional-button">
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
                </CardContent>
              </Card> */}

              {/* CTA Contact */}
              <Card className="glass-card border-primary-200/50 dark:border-primary-800/50 primary-glow">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-bold">Projet similaire ?</h3>
                  <p className="text-sm text-muted-foreground">Ce projet vous inspire ? Discutons de votre idée !</p>
                  <Button asChild className="professional-button w-full">
                    <Link href="/#contact">Démarrer un projet</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
