// Script d'initialisation immédiate du thème de couleur
// Ce script s'exécute avant l'hydratation React pour éviter les flashs
(function() {
  'use strict';
  
  const COLOR_HUES = [
    { name: 'emerald', hue: 162.68, label: 'Émeraude' },
    { name: 'orange', hue: 70, label: 'Orange' },
    { name: 'purple', hue: 270, label: 'Violet' },
    { name: 'blue', hue: 240, label: 'Bleu' },
    { name: 'red', hue: 25, label: 'Rouge' },
    { name: 'green', hue: 120, label: 'Vert' },
  ];

  function applyTheme(hue) {
    const root = document.documentElement;
    const secondaryHue = (hue + 30) % 360;
    
    root.style.setProperty('--primary-hue', hue.toString());
    root.style.setProperty('--secondary-hue', secondaryHue.toString());
  }

  // Récupérer et appliquer le thème sauvegardé
  try {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme) {
      const theme = COLOR_HUES.find(t => t.name === savedTheme);
      if (theme) {
        applyTheme(theme.hue);
        console.log('Thème appliqué immédiatement:', theme.name);
      } else {
        applyTheme(COLOR_HUES[0].hue);
        console.log('Thème par défaut appliqué immédiatement');
      }
    } else {
      applyTheme(COLOR_HUES[0].hue);
      console.log('Aucun thème sauvegardé, thème par défaut appliqué');
    }
  } catch (error) {
    console.error('Erreur lors de l\'initialisation immédiate du thème:', error);
    applyTheme(COLOR_HUES[0].hue);
  }
})();
