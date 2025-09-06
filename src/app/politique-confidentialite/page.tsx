import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Database, Mail, Eye, Settings, UserCheck } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Xavier Affringue - Développeur Full Stack",
  description: "Politique de confidentialité et protection des données personnelles du portfolio de Xavier Affringue. Conformité RGPD.",
  robots: "noindex, nofollow",
};

export default function PolitiqueConfidentialitePage() {
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
              Politique de
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"> Confidentialité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">Introduction</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Cette politique de confidentialité explique comment Xavier Affringue collecte, 
                        utilise et protège vos informations personnelles lorsque vous utilisez ce site web.
                      </p>
                      <p>
                        Nous nous engageons à respecter votre vie privée et à protéger vos données 
                        personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Données collectées */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Database className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">1. Données que nous collectons</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Données fournies volontairement :</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Nom complet</li>
                          <li>Adresse email</li>
                          <li>Nom de l&apos;entreprise (optionnel)</li>
                          <li>Budget approximatif (optionnel)</li>
                          <li>Message de contact</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Données techniques automatiques :</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Adresse IP (anonymisée)</li>
                          <li>Type de navigateur</li>
                          <li>Pages visitées</li>
                          <li>Horodatage des visites</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Utilisation des données */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">2. Comment nous utilisons vos données</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Finalités principales :</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Répondre à vos demandes de contact</li>
                          <li>Vous envoyer une confirmation de réception</li>
                          <li>Améliorer l&apos;expérience utilisateur du site</li>
                          <li>Analyser les performances du site</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Base légale :</h3>
                        <p>
                          Le traitement de vos données repose sur votre consentement explicite 
                          lors de l&apos;envoi du formulaire de contact (Article 6.1.a du RGPD).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partage des données */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">3. Partage et divulgation</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        <strong>Nous ne vendons, ne louons, ni ne partageons vos données personnelles 
                        avec des tiers à des fins commerciales.</strong>
                      </p>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Exceptions limitées :</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Prestataires techniques (hébergement sécurisé)</li>
                          <li>Obligations légales ou réglementaires</li>
                          <li>Protection des droits et sécurité</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Transferts internationaux :</h3>
                        <p>
                          Les données peuvent être traitées dans des pays hors UE (ex: hébergement Vercel aux États-Unis) 
                          avec des garanties appropriées conformes au RGPD.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conservation des données */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Database className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">4. Conservation des données</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Vos données personnelles sont conservées uniquement pendant la durée nécessaire 
                        aux finalités pour lesquelles elles ont été collectées :
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Emails de contact :</strong> 3 ans maximum après le dernier échange</li>
                        <li><strong>Logs techniques :</strong> 13 mois maximum</li>
                        <li><strong>Données analytiques :</strong> Anonymisées après 26 mois</li>
                      </ul>
                      <p>
                        Passé ces délais, vos données sont automatiquement supprimées ou anonymisées.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vos droits */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">5. Vos droits</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">✅ Droit d&apos;accès</h4>
                          <p className="text-sm">Consulter vos données personnelles</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">✏️ Droit de rectification</h4>
                          <p className="text-sm">Corriger des données inexactes</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">🗑️ Droit d&apos;effacement</h4>
                          <p className="text-sm">Supprimer vos données personnelles</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">⏸️ Droit de limitation</h4>
                          <p className="text-sm">Limiter le traitement de vos données</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">📦 Droit à la portabilité</h4>
                          <p className="text-sm">Récupérer vos données</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">🚫 Droit d&apos;opposition</h4>
                          <p className="text-sm">Vous opposer au traitement</p>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          Comment exercer vos droits ?
                        </h4>
                        <p className="text-sm text-emerald-600 dark:text-emerald-300">
                          Contactez-moi à l&apos;adresse xavier.affringue@email.com avec un justificatif d&apos;identité. 
                          Je m&apos;engage à vous répondre dans un délai maximum de 1 mois.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">6. Sécurité des données</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                        pour protéger vos données personnelles contre :
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>L&apos;accès non autorisé</li>
                        <li>La divulgation accidentelle</li>
                        <li>La modification non autorisée</li>
                        <li>La destruction malveillante</li>
                      </ul>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Mesures techniques :</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Chiffrement SSL/TLS (HTTPS)</li>
                          <li>Validation et assainissement des données</li>
                          <li>Hébergement sécurisé chez Vercel</li>
                          <li>Mises à jour régulières de sécurité</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Cookies et technologies similaires</h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Ce site utilise un minimum de cookies pour fonctionner correctement :
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">🍪 Cookies essentiels</h4>
                        <p className="text-sm">Nécessaires au fonctionnement du site (thème, préférences)</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">📊 Cookies analytiques</h4>
                        <p className="text-sm">Statistiques anonymes d&apos;utilisation (optionnel)</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Vous pouvez configurer votre navigateur pour refuser les cookies, 
                      mais cela peut affecter le fonctionnement du site.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact et réclamations */}
            <Card className="glass-card border-emerald-200/50 dark:border-emerald-800/50 emerald-glow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">8. Contact et réclamations</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Pour toute question concernant cette politique de confidentialité ou 
                        pour exercer vos droits, contactez-moi :
                      </p>
                      <div className="space-y-2">
                        <p><strong>Email :</strong> xavier.affringue@email.com</p>
                        <p><strong>Réponse :</strong> Sous 1 mois maximum</p>
                      </div>
                      <p>
                        Si vous estimez que vos droits ne sont pas respectés, vous pouvez 
                        déposer une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés).
                      </p>
                      <div className="flex gap-4 mt-6">
                        <Button asChild className="professional-button">
                          <Link href="/#contact">
                            <Mail className="h-4 w-4 mr-2" />
                            Me contacter
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50">
                          <Link href="/mentions-legales">
                            Mentions légales
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
