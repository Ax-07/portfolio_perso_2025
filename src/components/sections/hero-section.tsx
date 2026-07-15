"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextAnimation } from "../ui/TextAnimation";
import { GridlineBackground } from "../ui/GridlineBackground";
import { HERO_CONTENT } from "@/constants";
import { GitHubIcon } from "@/assets/github-icon";
import { LinkedInIcon } from "@/assets/linkedin-icon";
import { cn } from "@/lib/utils";

export const HeroSection: React.FC<React.ComponentProps<"section">> = ({className, ...props}) => {
  return (
    <section id="hero" className={cn("relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden", className)} {...props}>
      {/* Overlay radial et grille */}
      <span className="absolute inset-0 z-2 bg-radial from-0% from-transparent to-50% to-background"></span>
      <GridlineBackground className="z-1 text-primary opacity-40" />
      
      {/* Éléments flottants */}
      <div className="absolute z-2 top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute z-2 bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Contenu principal */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
                <TextAnimation text={HERO_CONTENT.name} />
              </h1>

              <div className="text-muted-foreground max-w-2xl leading-relaxed text-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-500 mb-2">{HERO_CONTENT.title}</p>
                  {HERO_CONTENT.description.split("\n").map((line, index) => (
                    <p key={index} className="text-base sm:text-lg md:text-xl lg:text-2xl">
                      {line}
                    </p>
                  ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {HERO_CONTENT.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-950/50 dark:text-primary-400 dark:border-primary-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="professional-button text-primary-foreground group w-full sm:w-auto">
              <Link href={HERO_CONTENT.cta.primary.href}>
                <span className="text-sm sm:text-base">{HERO_CONTENT.cta.primary.text}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary-200 hover:bg-primary-50 dark:border-primary-800 dark:hover:bg-primary-950/50 w-full sm:w-auto"
            >
              <Link href={HERO_CONTENT.cta.secondary.href}>
                <Mail className="mr-2 h-4 w-4" />
                <span className="text-sm sm:text-base">{HERO_CONTENT.cta.secondary.text}</span>
              </Link>
            </Button>
          </div>

          {/* Liens sociaux */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
            <span className="text-sm sm:text-base text-muted-foreground">{HERO_CONTENT.social.title}</span>
            <div className="flex space-x-2 sm:space-x-3">
              <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20  p-2">
                <Link 
                  href={HERO_CONTENT.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Voir mon profil GitHub (ouvre dans un nouvel onglet)"
                >
                  <span className="sr-only">Voir mon profil GitHub</span>
                  <GitHubIcon className="size-6 hover:text-white" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20 p-2">
                <Link
                  href={HERO_CONTENT.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)"
                >
                  <span className="sr-only">Voir mon profil LinkedIn</span>
                  <LinkedInIcon className="size-6 hover:text-white" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}