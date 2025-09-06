"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Coffee,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ABOUT_CONTENT } from "@/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 corporate-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" /> */}

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="space-y-16">
          {/* En-tête de section */}
          <div className="text-center space-y-4">
            <Badge
              variant="outline"
              className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50 text-xs sm:text-sm px-2 sm:px-3 py-1"
            >
              {ABOUT_CONTENT.badge}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {ABOUT_CONTENT.title}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {ABOUT_CONTENT.titleHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              {ABOUT_CONTENT.description}
            </p>
          </div>
          {/* Section principale : Présentation avec design asymétrique */}
          <div className="relative">
            {/* Grille de fond décorative */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 border border-primary-500/30 rounded-3xl rotate-12"></div>
              <div className="absolute top-32 right-20 w-24 h-24 border border-primary-400/20 rounded-2xl -rotate-45"></div>
              <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-primary-500/10 rounded-full"></div>
            </div>

            <div className="grid items-center">
              {/* Colonne gauche : Présentation principale */}
              <div className="">
                {/* Mon parcours */}
                <Card className="glass-card border-primary-200/50 dark:border-primary-800/50 floating-card">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center primary-glow flex-shrink-0">
                        <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">{ABOUT_CONTENT.journey.title}</h3>
                        <p className="text-primary-600 font-medium text-sm sm:text-base">
                          {ABOUT_CONTENT.journey.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                      {ABOUT_CONTENT.journey.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 sm:px-6 md:px-8">
                    {/* Technologies principales en badges flottants */}
                    <div className="flex flex-wrap gap-2">
                      {ABOUT_CONTENT.journey.values.map((value) => (
                        <Badge key={value} variant="outline" className="border-primary-500/50 text-primary-500 text-xs sm:text-sm">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* Section expertise : Grille moderne avec focus */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">{ABOUT_CONTENT.skills.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{ABOUT_CONTENT.skills.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ABOUT_CONTENT.skills.categories.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <Card
                    key={index}
                    className={`glass-card border-primary-200/50 dark:border-primary-800/50 floating-card group relative overflow-hidden ${
                      index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        {/* Header avec icône */}
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                            <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${skillGroup.color}`} />
                          </div>
                          <h4 className="font-semibold text-sm sm:text-base">{skillGroup.name}</h4>
                        </div>

                        {/* Skills */}
                        <div className="space-y-1.5 sm:space-y-2">
                          {skillGroup.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center space-x-2">
                              <div
                                className={cn(
                                  "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-500",
                                  skillGroup.listDiscColor
                                )}
                              ></div>
                              <span className="text-xs sm:text-sm text-muted-foreground">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Section mes valeurs professionnelles */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">{ABOUT_CONTENT.values.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{ABOUT_CONTENT.values.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ABOUT_CONTENT.values.list.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card border-primary-200/50 dark:border-primary-800/50 floating-card group hover:border-primary-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center primary-glow group-hover:scale-110 transition-transform flex-shrink-0">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="font-semibold text-sm sm:text-base">{value.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA simple et élégant */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">{ABOUT_CONTENT.cta.title}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                {ABOUT_CONTENT.cta.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button asChild className="professional-button w-full sm:w-auto">
                <a href={ABOUT_CONTENT.cta.primary.href}>
                  <Coffee className="h-4 w-4 mr-2" />
                  <span className="text-sm sm:text-base">{ABOUT_CONTENT.cta.primary.text}</span>
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/50 w-full sm:w-auto"
              >
                <a href={ABOUT_CONTENT.cta.secondary.href}>
                  <span className="text-sm sm:text-base">{ABOUT_CONTENT.cta.secondary.text}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}