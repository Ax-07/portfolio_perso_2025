"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Globe, 
  Calendar,
  Clock,
  CheckCircle,
  Code,
  Zap,
  Eye,
  Users,
  Target,
  Lightbulb
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectDetailPageProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: readonly string[];
    features: readonly string[];
    links: {
      demo: string;
      github: string;
    };
    status: string;
    year: string;
  };
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const [imageError, setImageError] = React.useState(false);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Terminé": { color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400", icon: CheckCircle },
      "En cours": { color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-400", icon: Clock },
      "Planifié": { color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-400", icon: Calendar }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Planifié"];
    const IconComponent = config.icon;
    
    return (
      <Badge variant="outline" className={config.color}>
        <IconComponent className="h-4 w-4 mr-2" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
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
              <Link href="/#projects">
                Accueil
              </Link>
            </Button>
          </div>

          {/* Titre et infos principales */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {getStatusBadge(project.status)}
                  <Badge variant="outline">{project.category}</Badge>
                  <Badge variant="secondary">{project.year}</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  {project.title}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Actions principales */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="professional-button">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" />
                    Voir la démo live
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code source
                  </a>
                </Button>
              </div>
            </div>

            {/* Image du projet */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 flex items-center justify-center">
                  {imageError ? (
                    <div className="text-primary-600 dark:text-primary-400">
                      <Globe className="h-16 w-16" />
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu détaillé */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Technologies utilisées */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary-600" />
                    <h2 className="text-xl font-bold">Technologies utilisées</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-950/30 dark:text-primary-400 dark:border-primary-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fonctionnalités détaillées */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary-600" />
                    <h2 className="text-xl font-bold">Fonctionnalités clés</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section détails du projet (exemple de contenu supplémentaire) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary-600" />
                    <h2 className="text-xl font-bold">À propos de ce projet</h2>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary-600" />
                      Objectifs
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                      Ce projet avait pour objectif de créer une solution moderne et performante 
                      répondant aux besoins spécifiques identifiés. L&apos;accent a été mis sur 
                      l&apos;expérience utilisateur et la performance technique.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary-600" />
                      Défis relevés
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                      L&apos;implémentation a nécessité de surmonter plusieurs défis techniques, 
                      notamment l&apos;optimisation des performances, la compatibilité cross-browser 
                      et l&apos;intégration avec des APIs tierces.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar avec informations complémentaires */}
            <div className="space-y-6">
              
              {/* Informations du projet */}
              <Card className="glass-card">
                <CardHeader>
                  <h3 className="font-bold">Informations</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Statut</span>
                      <span className="font-medium">{project.status}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Année</span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Catégorie</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Technologies</span>
                      <span className="font-medium">{project.technologies.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions secondaires */}
              <Card className="glass-card">
                <CardHeader>
                  <h3 className="font-bold">Liens utiles</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Démonstration live
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Repository GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* CTA Contact */}
              <Card className="glass-card border-primary-200/50 dark:border-primary-800/50 primary-glow">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-bold">Projet similaire ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Ce projet vous inspire ? Discutons de votre idée !
                  </p>
                  <Button asChild className="professional-button w-full">
                    <Link href="/#contact">
                      Démarrer un projet
                    </Link>
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
