import { type ComponentPropsWithoutRef, type ReactNode, isValidElement, type ReactElement, JSX } from "react";
import Image from "next/image";
import { CopyButton } from "./copy-button";

/**
 * Récupère le contenu textuel d'un nœud React, en parcourant récursivement ses enfants.
 * Utile pour extraire le texte brut d'un bloc de code afin de le copier dans le presse-papier.
 * 
 * @param {ReactNode} children - Le nœud React à analyser (string, array, element, etc.)
 * @return {string} Le contenu textuel extrait, ou une chaîne vide si aucun texte n'est trouvé
 * 
 * @example
 * getTextContent("Hello") // "Hello"
 * getTextContent(["Hello", " ", "World"]) // "Hello World"
 * getTextContent(<code>const x = 5;</code>) // "const x = 5;"
 */
function getTextContent(children: ReactNode): string {
  // Si l'enfant est une chaîne de caractères, la retourner directement
  if (typeof children === "string") {
    return children;
  }
  
  // Si l'enfant est un tableau, parcourir récursivement tous les éléments et concaténer leur contenu textuel
  if (Array.isArray(children)) {
    return children.map(getTextContent).join("");
  }
  
  // Si l'enfant est un élément React valide, extraire récursivement le contenu textuel de ses props.children
  if (isValidElement(children)) {
    const element = children as ReactElement<{ children?: ReactNode }>;
    if (element.props?.children) {
      return getTextContent(element.props.children);
    }
  }
  
  // Retourner une chaîne vide pour les autres types (number, boolean, null, undefined, etc.)
  return "";
}

/**
 * Composant pour les blocs de code préformatés avec fonctionnalité de copie.
 * Entoure le contenu d'un conteneur relatif pour positionner le bouton de copie.
 * 
 * @param {ComponentPropsWithoutRef<"pre">} props - Props standard HTML pour l'élément <pre>
 * @returns {JSX.Element} Un bloc de code avec bouton de copie intégré
 * 
 * @example
 * <Pre><code>const x = 5;</code></Pre>
 */
export function Pre({ children, ...props }: ComponentPropsWithoutRef<"pre">): JSX.Element {
  const textContent = getTextContent(children);

  return (
    <div className="relative group">
      <pre {...props}>{children}</pre>
      <CopyButton text={textContent} />
    </div>
  );
}

/**
 * Composant pour le code inline et dans les blocs de code.
 * Ajoute un défilement horizontal automatique pour le contenu qui dépasse.
 * 
 * @param {ComponentPropsWithoutRef<"code">} props - Props standard HTML pour l'élément <code>
 * @returns {JSX.Element} Un élément code avec overflow-x-auto
 * 
 * @example
 * <Code>console.log('Hello')</Code>
 */
export function Code({ children, ...props }: ComponentPropsWithoutRef<"code">): JSX.Element {
  return (
    <code {...props} className="overflow-x-auto">
      {children}
    </code>
  );
}

/**
 * Composant pour les titres de niveau 1 (H1) avec styles personnalisés.
 * Utilise les classes Tailwind pour un design moderne et responsive.
 * 
 * @param {ComponentPropsWithoutRef<"h1">} props - Props standard HTML pour l'élément <h1>
 * @returns {JSX.Element} Un titre H1 stylisé avec scroll-margin pour l'ancrage
 */
export function H1({ children, ...props }: ComponentPropsWithoutRef<"h1">): JSX.Element {
  return (
    <h1 className="mt-8 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl" {...props}>
      {children}
    </h1>
  );
}

/**
 * Composant pour les titres de niveau 2 (H2) avec bordure inférieure et support d'ancrage.
 * Optimisé pour la navigation par ancres avec scroll-margin.
 * 
 * @param {ComponentPropsWithoutRef<"h2">} props - Props standard HTML pour l'élément <h2>
 * @returns {JSX.Element} Un titre H2 stylisé avec bordure et capacité d'ancrage
 */
export function H2({ children, ...props }: ComponentPropsWithoutRef<"h2">): JSX.Element {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props}>
      {children}
    </h2>
  );
}

/**
 * Composant pour les titres de niveau 3 (H3).
 * Style semi-bold avec taille de texte 2xl.
 * 
 * @param {ComponentPropsWithoutRef<"h3">} props - Props standard HTML pour l'élément <h3>
 * @returns {JSX.Element} Un titre H3 stylisé
 */
export function H3({ children, ...props }: ComponentPropsWithoutRef<"h3">): JSX.Element {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...props}>
      {children}
    </h3>
  );
}

/**
 * Composant pour les titres de niveau 4 (H4).
 * Style semi-bold avec taille de texte xl.
 * 
 * @param {ComponentPropsWithoutRef<"h4">} props - Props standard HTML pour l'élément <h4>
 * @returns {JSX.Element} Un titre H4 stylisé
 */
export function H4({ children, ...props }: ComponentPropsWithoutRef<"h4">): JSX.Element {
  return (
    <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight" {...props}>
      {children}
    </h4>
  );
}

/**
 * Composant pour les paragraphes avec espacement vertical automatique.
 * Applique une marge supérieure à tous les paragraphes sauf le premier.
 * 
 * @param {ComponentPropsWithoutRef<"p">} props - Props standard HTML pour l'élément <p>
 * @returns {JSX.Element} Un paragraphe avec leading optimisé et espacement
 */
export function P({ children, ...props }: ComponentPropsWithoutRef<"p">): JSX.Element {
  return (
    <p className="leading-7 not-first:mt-6" {...props}>
      {children}
    </p>
  );
}

/**
 * Composant pour les listes non ordonnées (à puces).
 * Affiche des puces de type disc avec espacement entre les items.
 * 
 * @param {ComponentPropsWithoutRef<"ul">} props - Props standard HTML pour l'élément <ul>
 * @returns {JSX.Element} Une liste non ordonnée stylisée
 */
export function Ul({ children, ...props }: ComponentPropsWithoutRef<"ul">): JSX.Element {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
}

/**
 * Composant pour les listes ordonnées (numérotées).
 * Affiche des numéros décimaux avec espacement entre les items.
 * 
 * @param {ComponentPropsWithoutRef<"ol">} props - Props standard HTML pour l'élément <ol>
 * @returns {JSX.Element} Une liste ordonnée stylisée
 */
export function Ol({ children, ...props }: ComponentPropsWithoutRef<"ol">): JSX.Element {
  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  );
}

/**
 * Composant pour les citations en bloc (blockquotes).
 * Affiche une bordure gauche colorée et un style italique pour différencier les citations.
 * 
 * @param {ComponentPropsWithoutRef<"blockquote">} props - Props standard HTML pour l'élément <blockquote>
 * @returns {JSX.Element} Une citation en bloc stylisée avec bordure latérale
 */
export function Blockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">): JSX.Element {
  return (
    <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground" {...props}>
      {children}
    </blockquote>
  );
}

/**
 * Composant pour les liens hypertextes.
 * Style avec soulignement et effet hover pour une meilleure UX.
 * 
 * @param {ComponentPropsWithoutRef<"a">} props - Props standard HTML pour l'élément <a>
 * @returns {JSX.Element} Un lien stylisé avec couleur primaire et animation
 */
export function A({ children, ...props }: ComponentPropsWithoutRef<"a">): JSX.Element {
  return (
    <a className="font-medium text-primary underline underline-offset-4 hover:text-primary/80" {...props}>
      {children}
    </a>
  );
}

/**
 * Composant pour les séparateurs horizontaux.
 * Ajoute un espacement vertical et utilise la couleur de bordure du thème.
 * 
 * @param {ComponentPropsWithoutRef<"hr">} props - Props standard HTML pour l'élément <hr>
 * @returns {JSX.Element} Un séparateur horizontal stylisé
 */
export function Hr(props: ComponentPropsWithoutRef<"hr">): JSX.Element {
  return <hr className="my-8 border-border" {...props} />;
}

/**
 * Composant conteneur pour les tableaux avec défilement horizontal automatique.
 * Wrapper nécessaire pour gérer le débordement du contenu sur mobile.
 * 
 * @param {ComponentPropsWithoutRef<"table">} props - Props standard HTML pour l'élément <table>
 * @returns {JSX.Element} Un tableau responsive avec overflow-y-auto
 */
export function Table({ children, ...props }: ComponentPropsWithoutRef<"table">): JSX.Element {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  );
}

/**
 * Composant pour l'en-tête de tableau.
 * Applique un fond légèrement coloré pour distinguer l'en-tête du corps.
 * 
 * @param {ComponentPropsWithoutRef<"thead">} props - Props standard HTML pour l'élément <thead>
 * @returns {JSX.Element} Un en-tête de tableau stylisé
 */
export function Thead({ children, ...props }: ComponentPropsWithoutRef<"thead">): JSX.Element {
  return (
    <thead className="bg-muted/50" {...props}>
      {children}
    </thead>
  );
}

/**
 * Composant pour le corps de tableau.
 * Conteneur standard pour les lignes de données.
 * 
 * @param {ComponentPropsWithoutRef<"tbody">} props - Props standard HTML pour l'élément <tbody>
 * @returns {JSX.Element} Un corps de tableau
 */
export function Tbody({ children, ...props }: ComponentPropsWithoutRef<"tbody">): JSX.Element {
  return <tbody {...props}>{children}</tbody>;
}

/**
 * Composant pour les lignes de tableau.
 * Ajoute une bordure inférieure et un effet hover pour améliorer la lisibilité.
 * 
 * @param {ComponentPropsWithoutRef<"tr">} props - Props standard HTML pour l'élément <tr>
 * @returns {JSX.Element} Une ligne de tableau avec effet hover
 */
export function Tr({ children, ...props }: ComponentPropsWithoutRef<"tr">): JSX.Element {
  return (
    <tr className="border-b border-border transition-colors hover:bg-muted/50" {...props}>
      {children}
    </tr>
  );
}

/**
 * Composant pour les cellules d'en-tête de tableau.
 * Style semi-bold avec support de l'alignement (left, center, right).
 * 
 * @param {ComponentPropsWithoutRef<"th">} props - Props standard HTML pour l'élément <th>
 * @returns {JSX.Element} Une cellule d'en-tête stylisée avec bordures
 */
export function Th({ children, ...props }: ComponentPropsWithoutRef<"th">): JSX.Element {
  return (
    <th
      className="border border-border px-4 py-2 text-left font-semibold [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    >
      {children}
    </th>
  );
}

/**
 * Composant pour les cellules de données de tableau.
 * Style standard avec support de l'alignement (left, center, right).
 * 
 * @param {ComponentPropsWithoutRef<"td">} props - Props standard HTML pour l'élément <td>
 * @returns {JSX.Element} Une cellule de données stylisée avec bordures
 */
export function Td({ children, ...props }: ComponentPropsWithoutRef<"td">): JSX.Element {
  return (
    <td
      className="border border-border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    >
      {children}
    </td>
  );
}

/**
 * Composant pour les images optimisées avec Next/Image.
 * Utilise le composant Image de Next.js pour l'optimisation automatique et le lazy loading.
 * Supporte les légendes via l'attribut title.
 * 
 * @param {ComponentPropsWithoutRef<"img">} props - Props standard HTML pour l'élément <img>
 * @param {string} src - URL de l'image (obligatoire)
 * @param {string} alt - Texte alternatif pour l'accessibilité
 * @param {string} title - Légende optionnelle affichée sous l'image
 * @param {number} width - Largeur de l'image (par défaut: 1000)
 * @param {number} height - Hauteur de l'image (par défaut: 500)
 * @returns {JSX.Element | null} Une figure avec image optimisée et légende optionnelle, ou null si pas de src
 */
export function Img({ src, alt, title, width, height, ...props }: ComponentPropsWithoutRef<"img">): JSX.Element | null {
  if (!src) return null;

  return (
    <figure className="my-8">
      <Image
        src={src as string}
        alt={alt || ""}
        width={(width as number) || 1000}
        height={(height as number) || 500}
        fill
        className="h-auto w-full rounded-md object-fill aspect-video"
        // style={{ width: '100%', height: 'auto' }}
        {...props}
      />
      {title && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{title}</figcaption>}
    </figure>
  );
}

// Exporter tous les composants MDX
export const mdxComponents = {
  pre: Pre,
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: Ul,
  ol: Ol,
  blockquote: Blockquote,
  a: A,
  hr: Hr,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  img: Img,
};
