"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Eye,
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_CONTENT } from "@/constants";

const { projects, categories } = PROJECTS_CONTENT;

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");
  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});
  
  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

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
        <IconComponent className="h-3 w-3 mr-1" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-8">
            {/* Navigation de retour */}
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/#projects">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
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
                className="group"
              >
                <Card 
                  className="glass-card border-primary-200/50 dark:border-primary-800/50 floating-card group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image du projet */}
                  <div className="relative overflow-hidden rounded-t-lg">
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
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={() => handleImageError(project.id)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {getStatusBadge(project.status)}
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                        {project.year}
                      </Badge>
                    </div>
                    {/* Overlay avec indication "voir détails" */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Voir les détails
                      </div>
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
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies principales */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-950/30 dark:text-primary-400 dark:border-primary-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
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
