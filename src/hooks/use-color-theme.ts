
"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export interface ColorHue {
  name: string;
  hue: number;
  label: string;
}

export const COLOR_HUES: ColorHue[] = [
  { name: "blue", hue: 240, label: "Bleu" },
  { name: "emerald", hue: 162.68, label: "Émeraude" },
  { name: "orange", hue: 70, label: "Orange" },
  { name: "purple", hue: 270, label: "Violet" },
  { name: "red", hue: 25, label: "Rouge" },
  { name: "green", hue: 120, label: "Vert" },
];

export interface UseColorThemeReturn {
  currentTheme: ColorHue;
  setColorTheme: (theme: ColorHue) => void;
}

const STORAGE_KEY = "color-theme";
const CHANGE_EVENT = "color-theme-change";
const DEFAULT_THEME = COLOR_HUES[0];

// Lire le thème sauvegardé dans le navigateur
function getSnapshot(): string {
  if (typeof window === "undefined") {
    return DEFAULT_THEME.name;
  }

  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    return COLOR_HUES.some((theme) => theme.name === savedTheme)
      ? savedTheme!
      : DEFAULT_THEME.name;
  } catch {
    return DEFAULT_THEME.name;
  }
}

// Valeur identique côté serveur et pendant l'hydratation
function getServerSnapshot(): string {
  return DEFAULT_THEME.name;
}

// S'abonner aux changements du thème
function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      callback();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

// Appliquer les variables CSS
function applyThemeStyles(theme: ColorHue) {
  const root = document.documentElement;
  const secondaryHue = (theme.hue + 30) % 360;

  root.style.setProperty(
    "--primary-hue",
    theme.hue.toString()
  );

  root.style.setProperty(
    "--secondary-hue",
    secondaryHue.toString()
  );
}

export function useColorTheme(): UseColorThemeReturn {
  // Synchronisation avec localStorage sans setState dans un effet
  const themeName = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const currentTheme =
    COLOR_HUES.find((theme) => theme.name === themeName) ??
    DEFAULT_THEME;

  // Synchroniser uniquement les variables CSS
  useEffect(() => {
    applyThemeStyles(currentTheme);
  }, [currentTheme]);

  // Changer le thème à la demande de l'utilisateur
  const setColorTheme = useCallback((theme: ColorHue) => {
    applyThemeStyles(theme);

    try {
      localStorage.setItem(STORAGE_KEY, theme.name);
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch (error) {
      console.error(
        "Impossible de sauvegarder le thème :",
        error
      );
    }
  }, []);

  return {
    currentTheme,
    setColorTheme,
  };
}
