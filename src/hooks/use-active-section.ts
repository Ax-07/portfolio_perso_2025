"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>("");
    const isManualNavigation = useRef(false);

    useEffect(() => {
        // Intersection Observer pour détecter la section la plus visible
        const observer = new IntersectionObserver(
            (entries) => {
                // Ne pas mettre à jour si on est en navigation manuelle
                if (isManualNavigation.current) return;

                // Trier les entrées par ordre de visibilité (ratio d'intersection)
                const visibleEntries = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                // Prendre la section la plus visible
                if (visibleEntries.length > 0) {
                    const mostVisible = visibleEntries[0];
                    if (mostVisible.intersectionRatio > 0.1) { // Au moins 20% visible
                        const newSection = mostVisible.target.id;
                        setActiveSection(newSection);
                        
                        // Mettre à jour l'URL automatiquement lors du scroll
                        const newUrl = newSection === "hero" ? "/" : `#${newSection}`;
                        const currentUrl = window.location.pathname + window.location.hash;
                        if (currentUrl !== newUrl) {
                            window.history.replaceState(null, '', newUrl);
                        }
                    }
                }
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1], // Plusieurs seuils pour une meilleure détection
                rootMargin: "-80px 0px -80px 0px", // Compenser le header et footer
            }
        );

        // Observer toutes les sections
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        // Écouter le scroll uniquement comme fallback pour les cas extrêmes
        const handleScroll = () => {
            // Ne pas mettre à jour si on est en navigation manuelle
            if (isManualNavigation.current) return;

            // Uniquement si on est tout en haut pour forcer hero
            if (window.scrollY < 50) {
                setActiveSection("hero");
                // Mettre à jour l'URL pour la section hero
                const currentUrl = window.location.pathname + window.location.hash;
                if (currentUrl !== "/") {
                    window.history.replaceState(null, '', '/');
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActiveLink = (href: string) => {
        if (href === "/") {
            return activeSection === "" || activeSection === "hero";
        }
        return href === `#${activeSection}`;
    };

    const scrollToSection = (href: string) => {
        // Activer le verrouillage pour empêcher les conflits
        isManualNavigation.current = true;

        if (href === "/") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Mettre à jour l'état immédiatement pour éviter les conflits
            setActiveSection("hero");
            // Nettoyer l'URL en supprimant le hash
            window.history.pushState(null, '', '/');
        } else if (href.startsWith('#')) {
            const sectionId = href.substring(1);
            const element = document.getElementById(sectionId);

            if (element) {
                const headerHeight = 80; // Hauteur du header
                const elementPosition = element.offsetTop - headerHeight;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });

                // Mettre à jour l'état immédiatement pour éviter les conflits
                setActiveSection(sectionId);
                // Mettre à jour l'URL
                window.history.pushState(null, '', href);
            }
        }

        // Désactiver le verrouillage après un délai pour permettre le scroll naturel
        setTimeout(() => {
            isManualNavigation.current = false;
        }, 1000); // 1 seconde devrait être suffisant pour le smooth scroll
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#') || href === '/') {
            e.preventDefault();
            scrollToSection(href);
        }
    };

    return {
        activeSection,
        isActiveLink,
        scrollToSection,
        handleNavClick
    };
}
