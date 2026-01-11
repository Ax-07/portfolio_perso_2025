// app/blog/page.tsx
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog-utils";
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

/**
 * Page principale du blog affichant la liste de tous les articles publiés.
 * 
 * Composant serveur asynchrone qui récupère tous les articles du blog
 * et les affiche dans une grille responsive de cartes (cards).
 * 
 * **Fonctionnalités** :
 * - Récupération asynchrone des articles côté serveur
 * - Tri par date décroissante (plus récents en premier)
 * - Affichage en grille responsive (1 colonne mobile → 3 colonnes desktop)
 * - Images de couverture optimisées avec Next/Image
 * - Effet hover avec scale et changement de fond
 * - Format de date localisé en français
 * - Troncature du titre à 2 lignes (line-clamp-2)
 * 
 * @returns {Promise<JSX.Element>} La page blog avec grille d'articles
 * 
 * @example
 * // Route: /blog
 * // Affiche automatiquement tous les articles publiés
 * 
 * @async
 * @server-component
 */
export default async function BlogIndex(): Promise<JSX.Element> {
  // Récupération de tous les articles publiés
  const fileNames = await getAllBlogPosts();
  return (
    <main className="container flex-1 mx-auto mt-10 mb-16 px-4 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {fileNames
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((fileName) => {
            return (
              <Link key={fileName.slug} href={`/blog/${fileName.slug}`} className="block h-full">
                <Card className="h-full hover:bg-muted/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col pt-0">
                  {fileName.coverImage && (
                    <div className="relative w-full h-auto object-fill aspect-video">
                      <Image src={fileName.coverImage} alt={fileName.title} fill className="object-fill" />
                    </div>
                  )}
                  <CardHeader>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(fileName.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <CardTitle className="line-clamp-2">{fileName.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
