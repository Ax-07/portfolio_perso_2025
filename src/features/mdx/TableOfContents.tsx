"use client";

import { JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/lib/blog-utils";

/**
 * Props du composant TableOfContents.
 * 
 * @interface TableOfContentsProps
 * @property {Heading[]} headings - Liste des titres extraits du contenu MDX
 */
interface TableOfContentsProps {
  headings: Heading[];
}

/**
 * Composant client pour afficher un sommaire interactif avec détection du scroll.
 * 
 * Utilise l'API IntersectionObserver pour détecter quel titre est actuellement visible
 * et le surligner dans le sommaire. Permet une navigation smooth vers les sections.
 * 
 * **Fonctionnalités** :
 * - Détection automatique du titre visible (IntersectionObserver)
 * - Scroll smooth vers les sections au clic
 * - Mise à jour de l'URL avec l'ancre sans recharger la page
 * - Indentation progressive selon le niveau de titre (H2, H3, H4)
 * - Masqué sur mobile, visible uniquement sur XL+ (≥1280px)
 * - Position sticky pour suivre le scroll
 * 
 * @param {TableOfContentsProps} props - Props du composant
 * @param {Heading[]} props.headings - Liste des titres avec level, text et slug
 * @returns {JSX.Element | null} Le sommaire ou null si aucun titre n'est fourni
 * 
 * @example
 * const headings = getHeadings(post.content);
 * <TableOfContents headings={headings} />
 * 
 * @client-component
 */
export function TableOfContents({ headings }: TableOfContentsProps): JSX.Element | null {
  // État pour suivre l'ID du titre actuellement visible
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Utiliser un Set pour suivre les IDs des éléments actuellement visibles
    const visibleHeadings = new Set<string>();

    // Configuration de l'IntersectionObserver pour détecter les titres visibles
    // rootMargin négatif de 80% en bas pour activer quand le titre est dans les 20% supérieurs
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleHeadings.add(entry.target.id);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        });

        // Trouver le titre visible le plus haut (le premier dans l'ordre du DOM)
        const firstVisibleHeading = headings.find((heading) =>
          visibleHeadings.has(heading.slug)
        );

        if (firstVisibleHeading) {
          setActiveId(firstVisibleHeading.slug);
        }
      },
      { 
        rootMargin: "0px 0px -66% 0px",
        threshold: [0, 1]
      }
    );

    // Observer tous les titres présents dans la page
    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup : arrêter d'observer les éléments au démontage du composant
    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  // Ne rien afficher si aucun titre n'est disponible
  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden xl:block w-70 shrink-0 pl-12 border-l border-border max-h-[calc(100vh-11rem)] overflow-y-auto">
      <h4 className="mb-4 text-xl underline font-semibold text-foreground">
        Sur cette page
      </h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            className={cn(
              "transition-colors hover:text-foreground",
              heading.level === 3 && "pl-4",
              heading.level === 4 && "pl-8",
              activeId === heading.slug
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            <a
              href={`#${heading.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.slug)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(heading.slug);
                window.history.pushState(null, "", `#${heading.slug}`);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
