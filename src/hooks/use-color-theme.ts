"use client";

import { useCallback, useEffect, useState } from 'react';

export interface ColorHue {
  name: string;
  hue: number;
  label: string;
}

export const COLOR_HUES: ColorHue[] = [
  { name: 'emerald', hue: 162.68, label: 'Émeraude' },
  { name: 'orange', hue: 70, label: 'Orange' },
  { name: 'purple', hue: 270, label: 'Violet' },
  { name: 'blue', hue: 240, label: 'Bleu' },
  { name: 'red', hue: 25, label: 'Rouge' },
  { name: 'green', hue: 120, label: 'Vert' },
];

export interface UseColorThemeReturn {
  currentTheme: ColorHue;
  setColorTheme: (theme: ColorHue) => void;
}

export function useColorTheme(): UseColorThemeReturn {
  const [currentTheme, setCurrentTheme] = useState<ColorHue>(COLOR_HUES[0]);
  const [mounted, setMounted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Fonction pour appliquer une couleur
  const applyColorTheme = useCallback((theme: ColorHue) => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    const secondaryHue = (theme.hue + 30) % 360;
    
    root.style.setProperty('--primary-hue', theme.hue.toString());
    root.style.setProperty('--secondary-hue', secondaryHue.toString());
    
    setCurrentTheme(theme);
  }, []);

  // Fonction pour changer de thème
  const setColorTheme = useCallback((theme: ColorHue) => {
    applyColorTheme(theme);
    // Sauvegarder immédiatement quand l'utilisateur change le thème
    if (typeof window !== 'undefined') {
      localStorage.setItem('color-theme', theme.name);
    }
  }, [applyColorTheme]);

  // Effet de montage
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialisation après montage - UNE SEULE FOIS
  useEffect(() => {
    if (!mounted || isInitialized || typeof window === 'undefined') return;
    
    try {
      // Récupérer le thème sauvegardé
      const savedTheme = localStorage.getItem('color-theme');
      console.log('Thème récupéré du localStorage:', savedTheme);
      
      if (savedTheme) {
        const theme = COLOR_HUES.find(t => t.name === savedTheme);
        if (theme) {
          console.log('Application du thème trouvé:', theme);
          applyColorTheme(theme);
        } else {
          console.log('Thème non trouvé, utilisation du défaut');
          applyColorTheme(COLOR_HUES[0]);
        }
      } else {
        console.log('Aucun thème sauvegardé, utilisation du défaut');
        applyColorTheme(COLOR_HUES[0]);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du thème:', error);
      applyColorTheme(COLOR_HUES[0]);
    }
    
    setIsInitialized(true);
  }, [mounted, isInitialized, applyColorTheme]);

  return {
    currentTheme,
    setColorTheme,
  };
}
