import { MDXRemote } from "next-mdx-remote-client/rsc";
import { JSX, Suspense } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeShiki from "@shikijs/rehype";
import { mdxComponents } from "./mdx-components";

/**
 * Composant serveur asynchrone pour rendre du contenu MDX avec plugins et composants personnalisés.
 * 
 * Configure le pipeline de transformation MDX avec :
 * - **remarkGfm** : Support des tables, listes de tâches, barré, etc. (GitHub Flavored Markdown)
 * - **rehypeSlug** : Génère automatiquement des IDs pour les titres (pour les ancres de navigation)
 * - **rehypeShiki** : Coloration syntaxique du code avec le thème "dark-plus"
 * 
 * Utilise Suspense pour gérer le chargement asynchrone et éviter les layouts shifts.
 * 
 * @param {Object} props - Props du composant
 * @param {string} props.children - Le contenu MDX brut à rendre (chaîne de caractères)
 * @returns {Promise<JSX.Element>} Le contenu MDX transformé en composants React
 * 
 * @example
 * // Dans un Server Component
 * const post = await getBlogPost();
 * <Mdx>{post.content}</Mdx>
 * 
 * @async
 * @server-component
 */
export const Mdx = async ({ children }: { children: string }): Promise<JSX.Element> => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote 
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeShiki,
                {
                  themes: {
                    light: "dark-plus",
                    dark: "dark-plus",
                  },
                },
              ],
            ],
          },
        }}
        components={mdxComponents}
      />
    </Suspense>
  );
};
