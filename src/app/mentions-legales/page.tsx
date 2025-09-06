import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Globe, Server, Shield } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Xavier Affringue - Développeur Full Stack",
  description: "Mentions légales du portfolio de Xavier Affringue, développeur Full Stack spécialisé en React, Next.js et Node.js.",
  robots: "noindex, nofollow",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec retour */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au portfolio
              </Link>
            </Button>
            <Badge variant="outline" className="border-emerald-500/50 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50">
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
              Mentions
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"> Légales</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Informations légales concernant ce site web personnel.
            </p>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* Éditeur du site */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">1. Éditeur du site</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p><strong>Nom :</strong> Xavier Affringue</p>
                      <p><strong>Statut :</strong> Développeur Full Stack indépendant</p>
                      <p><strong>Email :</strong> xavier.affringue@email.com</p>
                      <p><strong>Localisation :</strong> France</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Server className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">2. Hébergement</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                      <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                      <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">https://vercel.com</a></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">3. Propriété intellectuelle</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        L&apos;ensemble de ce site web, y compris sa conception, son contenu, ses textes, images, 
                        et son code source, est la propriété exclusive de Xavier Affringue, sauf mention contraire.
                      </p>
                      <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou 
                        partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est 
                        interdite, sauf autorisation écrite préalable.
                      </p>
                      <p>
                        Les marques, logos et noms de domaines mentionnés sur ce site sont la propriété 
                        de leurs détenteurs respectifs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">4. Limitation de responsabilité</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Les informations contenues sur ce site sont données à titre indicatif et sont 
                        susceptibles d&apos;évoluer. Xavier Affringue ne peut être tenu responsable de 
                        l&apos;utilisation et de l&apos;interprétation de l&apos;information contenue dans ce site.
                      </p>
                      <p>
                        L&apos;utilisateur assume l&apos;ensemble des risques découlant de l&apos;utilisation des 
                        informations contenues sur le site. Il appartient à l&apos;utilisateur de s&apos;assurer 
                        que les informations consultées sont exactes et à jour.
                      </p>
                      <p>
                        Ce site peut contenir des liens hypertextes vers d&apos;autres sites présents sur 
                        le réseau Internet. Xavier Affringue n&apos;exerce aucun contrôle sur ces sites 
                        et décline toute responsabilité quant à leur contenu.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Protection des données */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">5. Protection des données personnelles</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Ce site collecte uniquement les données nécessaires via le formulaire de contact 
                        (nom, email, entreprise, message). Ces données sont utilisées exclusivement pour 
                        répondre aux demandes des utilisateurs.
                      </p>
                      <p>
                        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, 
                        d&apos;effacement, de limitation et d&apos;opposition au traitement de vos données personnelles.
                      </p>
                      <p>
                        Pour exercer ces droits ou pour toute question concernant le traitement de vos 
                        données personnelles, vous pouvez me contacter à l&apos;adresse email mentionnée ci-dessus.
                      </p>
                      <Button asChild variant="outline" className="mt-4 border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50">
                        <Link href="/politique-confidentialite">
                          Voir la politique de confidentialité
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Droit applicable</h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Les présentes mentions légales sont régies par le droit français. 
                      En cas de litige, les tribunaux français seront seuls compétents.
                    </p>
                    <p>
                      Si une clause des présentes mentions légales était déclarée nulle 
                      ou sans effet, cela n&apos;affecterait pas la validité des autres clauses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50 emerald-glow">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Questions ?</h3>
                  <p className="text-muted-foreground">
                    Pour toute question concernant ces mentions légales, n&apos;hésitez pas à me contacter.
                  </p>
                  <Button asChild className="professional-button">
                    <Link href="/#contact">
                      <Mail className="h-4 w-4 mr-2" />
                      Me contacter
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
