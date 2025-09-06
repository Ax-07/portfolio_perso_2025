"use client";

import { useEffect } from 'react';
import { smoothScrollTo } from '@/lib/utils';

/**
 * Hook qui applique automatiquement le smooth scroll pour tous les liens d'ancrage (#)
 * À utiliser à la racine de l'application (layout.tsx ou page.tsx)
 */
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Vérifier si l'élément cliqué est un lien ou un enfant d'un lien
      let linkElement: HTMLAnchorElement | null = null;
      
      if (target.tagName === 'A') {
        linkElement = target as HTMLAnchorElement;
      } else {
        // Chercher dans les parents si c'est un enfant d'un lien
        linkElement = target.closest('a');
      }
      
      if (linkElement) {
        const href = linkElement.href;
        
        // Si c'est un lien d'ancrage interne
        if (href && href.includes('#')) {
          const url = new URL(href);
          
          // Vérifier si c'est un lien vers la même page (même pathname ou pas de pathname)
          if (url.pathname === window.location.pathname || href.startsWith('#')) {
            const hash = url.hash;
            
            if (hash && hash.length > 1) {
              event.preventDefault();
              
              // Supprimer le # et faire le smooth scroll
              const elementId = hash.substring(1);
              smoothScrollTo(elementId);
              
              // Mettre à jour l'URL sans recharger la page
              window.history.pushState(null, '', hash);
            }
          }
        }
      }
    };

    // Ajouter l'écouteur d'événements
    document.addEventListener('click', handleClick);

    // Gérer le cas où l'utilisateur arrive sur la page avec une ancre dans l'URL
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        // Délai pour s'assurer que la page est entièrement chargée
        setTimeout(() => {
          const elementId = hash.substring(1);
          smoothScrollTo(elementId);
        }, 100);
      }
    };

    // Appeler au montage du composant
    handleInitialHash();

    // Gérer les changements d'historique (bouton retour/avant du navigateur)
    const handlePopState = () => {
      handleInitialHash();
    };

    window.addEventListener('popstate', handlePopState);

    // Nettoyage
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
