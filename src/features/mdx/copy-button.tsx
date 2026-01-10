"use client";

import { JSX, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Props du composant CopyButton.
 * 
 * @interface CopyButtonProps
 * @property {string} text - Le texte à copier dans le presse-papier
 */
interface CopyButtonProps {
  text: string;
}

/**
 * Bouton client pour copier du texte dans le presse-papier avec feedback visuel.
 * 
 * Utilise l'API Clipboard pour copier le contenu et affiche un état de confirmation
 * pendant 2 secondes avec une icône de validation verte.
 * 
 * **Fonctionnalités** :
 * - Copie du texte dans le presse-papier via l'API Clipboard
 * - Feedback visuel avec changement d'icône (Copy → Check)
 * - Animation de scale au hover pour améliorer l'UX
 * - Accessible via aria-label et title dynamique
 * - Position absolue pour s'intégrer dans les blocs de code
 * - Backdrop blur pour un effet moderne
 * 
 * @param {CopyButtonProps} props - Props du composant
 * @param {string} props.text - Le contenu textuel à copier
 * @returns {JSX.Element} Un bouton avec icône animée et feedback visuel
 * 
 * @example
 * <CopyButton text="const x = 5;" />
 * 
 * @client-component
 */
export function CopyButton({ text }: CopyButtonProps): JSX.Element {
  // État pour gérer l'affichage du feedback de copie
  const [copied, setCopied] = useState(false);

  /**
   * Gère la copie du texte dans le presse-papier.
   * Active le feedback visuel pendant 2 secondes.
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    // Réinitialiser l'état après 5 secondes
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 z-10 rounded-md border border-border bg-background/90 p-2 backdrop-blur-sm transition-all hover:bg-muted hover:scale-105"
      aria-label="Copier le code"
      title={copied ? "Copié !" : "Copier le code"}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}
