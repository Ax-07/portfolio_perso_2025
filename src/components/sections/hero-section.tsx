"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextAnimation } from "../ui/TextAnimation";
import { GridlineBackground } from "../ui/GridlineBackground";
import { HERO_CONTENT } from "@/constants";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Background avec grille corporate */}
      <div className="absolute inset-0 corporate-grid opacity-50" />

      {/* Gradient d'arrière-plan */}
      <div className="absolute inset-0 corporate-gradient" />
      {/* Overlay radial et grille */}
      <span className="absolute inset-0 z-[2] bg-radial from-0% from-transparent to-70% to-background"></span>
      <GridlineBackground className="z-[1] text-primary opacity-20" />
      
      {/* Éléments flottants */}
      <div className="absolute z-[2] top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute z-[2] bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Contenu principal */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
          <div className="space-y-4 sm:space-y-6">
            {/* <Badge
              variant="outline"
              className="w-fit border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50 text-xs sm:text-sm px-2 sm:px-3 py-1"
            >
              {HERO_CONTENT.badge}
            </Badge> */}

            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
                <TextAnimation text={HERO_CONTENT.name} />
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-center">
                <span className="font-semibold text-primary-500">{HERO_CONTENT.title}</span> {HERO_CONTENT.description}
              </p>
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
            <span className="text-xs sm:text-sm text-muted-foreground">{HERO_CONTENT.social.title}</span>
            <div className="flex space-x-2 sm:space-x-3">
              <Button variant="ghost" size="sm" asChild className="hover:text-primary-600 p-2">
                <a href={HERO_CONTENT.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:text-primary-600 p-2">
                <a href={HERO_CONTENT.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:text-primary-600 p-2">
                <a href={HERO_CONTENT.social.cv} download>
                  <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="text-xs sm:text-sm">CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
