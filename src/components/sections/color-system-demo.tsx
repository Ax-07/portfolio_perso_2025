"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Check, AlertCircle, Info, AlertTriangle } from "lucide-react";

/**
 * Composant de démonstration du nouveau système de couleurs thématiques
 * Ce composant montre comment toutes les couleurs s'adaptent en temps réel
 * 
 * Classes Tailwind à préserver :
 * bg-primary-50 bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400 bg-primary-500 bg-primary-600 bg-primary-700 bg-primary-800 bg-primary-900 bg-primary-950
 * text-primary-50 text-primary-100 text-primary-200 text-primary-300 text-primary-400 text-primary-500 text-primary-600 text-primary-700 text-primary-800 text-primary-900 text-primary-950
 * border-primary-50 border-primary-100 border-primary-200 border-primary-300 border-primary-400 border-primary-500 border-primary-600 border-primary-700 border-primary-800 border-primary-900 border-primary-950
 * bg-success text-success border-success bg-warning text-warning border-warning bg-error text-error border-error bg-info text-info border-info
 */
export function ColorSystemDemo() {
  const [currentTheme, setCurrentTheme] = useState("blue");
  
  // Exemples de couleurs que l'on peut changer
  const themes = {
    blue: { name: "Bleu (Actuel)", primary: "oklch(0.596 0.156 240)" },
    emerald: { name: "Émeraude", primary: "oklch(0.596 0.156 162.68)" },
    purple: { name: "Violet", primary: "oklch(0.596 0.156 280)" },
    orange: { name: "Orange", primary: "oklch(0.596 0.156 60)" },
    pink: { name: "Rose", primary: "oklch(0.596 0.156 320)" },
  };

  const handleThemeChange = (themeKey: string) => {
    setCurrentTheme(themeKey);
    const root = document.documentElement;
    
    // Recalculer l'échelle complète avec la nouvelle teinte
    const baseHue = themeKey === 'blue' ? '240' :
                   themeKey === 'emerald' ? '162.68' : 
                   themeKey === 'purple' ? '280' :
                   themeKey === 'orange' ? '60' : '320';
    
    // Mettre à jour les couleurs @theme de Tailwind v4
    root.style.setProperty('--color-primary-50', `oklch(0.97 0.03 ${baseHue})`);
    root.style.setProperty('--color-primary-100', `oklch(0.93 0.06 ${baseHue})`);
    root.style.setProperty('--color-primary-200', `oklch(0.87 0.09 ${baseHue})`);
    root.style.setProperty('--color-primary-300', `oklch(0.79 0.12 ${baseHue})`);
    root.style.setProperty('--color-primary-400', `oklch(0.68 0.14 ${baseHue})`);
    root.style.setProperty('--color-primary-500', `oklch(0.65 0.15 ${baseHue})`);
    root.style.setProperty('--color-primary-600', `oklch(0.596 0.156 ${baseHue})`);
    root.style.setProperty('--color-primary-700', `oklch(0.54 0.15 ${baseHue})`);
    root.style.setProperty('--color-primary-800', `oklch(0.45 0.13 ${baseHue})`);
    root.style.setProperty('--color-primary-900', `oklch(0.37 0.11 ${baseHue})`);
    root.style.setProperty('--color-primary-950', `oklch(0.23 0.07 ${baseHue})`);
    
    // Mettre à jour aussi les couleurs de status
    root.style.setProperty('--color-success', `oklch(0.596 0.156 ${baseHue})`);
    
    // Mettre à jour les variables CSS legacy pour la compatibilité
    root.style.setProperty('--primary', `oklch(0.596 0.156 ${baseHue})`);
    root.style.setProperty('--accent', `oklch(0.7 0.17 ${baseHue})`);
    root.style.setProperty('--ring', `oklch(0.596 0.156 ${baseHue})`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary-600" />
            Démonstration du Système de Couleurs Thématiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Testez le nouveau système de couleurs en changeant le thème. 
            Toutes les couleurs s&apos;adaptent automatiquement !
          </p>
          
          {/* Sélecteur de thème */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Changer le thème :</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(themes).map(([key, theme]) => (
                <Button
                  key={key}
                  variant={currentTheme === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleThemeChange(key)}
                  className={currentTheme === key ? "theme-button" : ""}
                >
                  {theme.name}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Démonstration des couleurs primaires */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Couleurs Primaires (Échelle 50-950)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-50 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">50</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-100 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">100</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-200 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">200</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-300 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">300</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-400 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">400</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-500 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">500</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-600 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">600</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-700 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">700</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-800 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">800</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-900 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">900</span>
            </div>
            <div className="text-center">
              <div className="w-full h-12 rounded-md bg-primary-950 border border-border mb-2" />
              <span className="text-xs text-muted-foreground">950</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Démonstration des badges de status */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Badges de Status Thématiques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-success text-success-foreground border-success">
              <Check className="w-3 h-3 mr-1" />
              Succès
            </Badge>
            <Badge className="bg-warning text-warning-foreground border-warning">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Attention
            </Badge>
            <Badge className="bg-error text-error-foreground border-error">
              <AlertCircle className="w-3 h-3 mr-1" />
              Erreur
            </Badge>
            <Badge className="bg-info text-info-foreground border-info">
              <Info className="w-3 h-3 mr-1" />
              Information
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Démonstration des boutons */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Boutons Thématiques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">
              Bouton Principal
            </Button>
            <Button variant="outline" className="border-primary-200 hover:bg-primary-50 dark:border-primary-800 dark:hover:bg-primary-950/50">
              Bouton Outline
            </Button>
            <Button variant="ghost" className="hover:text-primary-600">
              Bouton Ghost
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Démonstration des effets */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Effets Visuels Thématiques</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 theme-gradient rounded-lg">
            <h4 className="font-semibold mb-2">Gradient Thématique</h4>
            <p className="text-sm text-muted-foreground">
              Arrière-plan avec dégradé adaptatif
            </p>
          </div>
          
          <div className="p-6 bg-card border rounded-lg theme-glow">
            <h4 className="font-semibold mb-2">Effet de Lueur</h4>
            <p className="text-sm text-muted-foreground">
              Carte avec effet de lueur thématique
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="gradient-theme-text text-2xl font-bold">
              Texte avec Gradient Thématique
            </h4>
          </div>
        </CardContent>
      </Card>

      {/* Code d'exemple */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Exemples de Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-primary-600">AVANT (couleurs hardcodées) :</h5>
              <code className="text-xs">
                {`<div className="bg-emerald-500 text-emerald-100 border-emerald-200">`}
              </code>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-primary-600">APRÈS (couleurs thématiques) :</h5>
              <code className="text-xs">
                {`<div className="bg-primary-500 text-primary-100 border-primary-200">`}
              </code>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-primary-600">ENCORE MIEUX :</h5>
              <code className="text-xs">
                {`<div className="bg-primary text-primary-foreground border-primary">`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
