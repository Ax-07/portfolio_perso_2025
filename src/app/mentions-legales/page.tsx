import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_CONTENT } from "@/constants/legal.content";

export const metadata: Metadata = {
  title: LEGAL_CONTENT.mentionsLegales.metadata.title,
  description: LEGAL_CONTENT.mentionsLegales.metadata.description,
  robots: "noindex, nofollow",
};

export default function MentionsLegalesPage() {
  const content = LEGAL_CONTENT.mentionsLegales;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec retour */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            <Badge variant="outline" className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50">
              Mentions Légales
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
            {/* Éditeur du site */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <content.sections.editeur.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{content.sections.editeur.title}</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p><strong>Nom :</strong> {content.sections.editeur.content.nom}</p>
                      <p><strong>Statut :</strong> {content.sections.editeur.content.statut}</p>
                      <p><strong>Email :</strong> {content.sections.editeur.content.email}</p>
                      <p><strong>Localisation :</strong> {content.sections.editeur.content.localisation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <content.sections.hebergement.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{content.sections.hebergement.title}</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p><strong>Hébergeur :</strong> {content.sections.hebergement.content.hebergeur}</p>
                      <p><strong>Adresse :</strong> {content.sections.hebergement.content.adresse}</p>
                      <p><strong>Site web :</strong> <a href={content.sections.hebergement.content.siteWeb} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{content.sections.hebergement.content.siteWeb}</a></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <content.sections.proprieteIntellectuelle.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{content.sections.proprieteIntellectuelle.title}</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      {content.sections.proprieteIntellectuelle.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <content.sections.responsabilite.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{content.sections.responsabilite.title}</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      {content.sections.responsabilite.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Protection des données */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <content.sections.donnees.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{content.sections.donnees.title}</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      {content.sections.donnees.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      <Button asChild variant="outline" className="mt-4 border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/50">
                        <Link href={content.sections.donnees.cta.href}>
                          {content.sections.donnees.cta.text}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                    <content.sections.droitApplicable.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">{content.sections.droitApplicable.title}</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      {content.sections.droitApplicable.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="glass-card border-primary-200/50 dark:border-primary-800/50 primary-glow">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{content.sections.contact.title}</h3>
                  <p className="text-muted-foreground">
                    {content.sections.contact.description}
                  </p>
                  <Button asChild className="professional-button">
                    <Link href={content.sections.contact.cta.href}>
                      <Mail className="h-4 w-4 mr-2" />
                      {content.sections.contact.cta.text}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
