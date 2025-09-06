"use client";

import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

/**
 * Composant qui active le smooth scroll automatique pour toute l'application
 */
export function SmoothScrollProvider() {
  useSmoothScroll();
  return null;
}
