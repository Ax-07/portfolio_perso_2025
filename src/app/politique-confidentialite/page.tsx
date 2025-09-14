import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { POLICY_CONTENT } from "@/constants/policy.content";

export const metadata: Metadata = POLICY_CONTENT.politiqueConfidentialite.metadata;

export default function PolitiqueConfidentialitePage() {
  const content = POLICY_CONTENT.politiqueConfidentialite;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec retour */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {"Retour à l'accueil"}
              </Link>
            </Button>
            <Badge variant="outline" className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50">
              Politique de Confidentialité
            </Badge>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container px-4 md:px-6 mx-auto py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* En-tête */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {content.header.title}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> {content.header.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {content.header.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {content.header.lastUpdate} {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <Card key={index} className="glass-card border-primary-200/50 dark:border-primary-800/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                      {section.icon && <section.icon className="h-6 w-6 text-primary-600" />}
                    </div>
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
