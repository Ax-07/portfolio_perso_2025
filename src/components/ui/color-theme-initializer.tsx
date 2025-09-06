"use client";

import { useColorTheme } from '@/hooks/use-color-theme';
import { useEffect } from 'react';

export function ColorThemeInitializer() {
  const { currentTheme } = useColorTheme();
  
  // Log pour debug
  useEffect(() => {
    console.log('ColorThemeInitializer - Thème actuel:', currentTheme);
  }, [currentTheme]);
  
  return null;
}
