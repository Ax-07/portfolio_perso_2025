import { getAllBlogPosts } from "@/lib/blog-utils";
import * as React from "react";
import { Badge } from "../ui/badge";
import { ARTICLES_CONTENT } from "@/constants/blog.content";
import Link from "next/link";
import { Card } from "../ui/card";

export async function BlogSection() {
  // Récupération de tous les articles publiés
  const fileNames = await getAllBlogPosts();
  return (
    <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="space-y-16">
          {/* En-tête de section */}
          <div className="text-center space-y-4">
            <Badge
              variant="outline"
              className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50 text-xs sm:text-sm px-2 sm:px-3 py-1"
            >
              {ARTICLES_CONTENT.badge}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {ARTICLES_CONTENT.title}
              <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {" "}
                {ARTICLES_CONTENT.titleHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              {ARTICLES_CONTENT.description}
            </p>
          </div>

          {/* Grille de projets - 3 projets en aperçu */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fileNames.slice(0, 3).map((fileName) => (
              <Link key={fileName.slug} href={`/blog/${fileName.slug}`} className="block h-full">
                <Card className="h-full hover:bg-muted/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col pt-0">
                  {fileName.coverImage && (
                    <img src={fileName.coverImage} alt={fileName.title} className="w-full h-48 object-cover" />
                  )}
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href={ARTICLES_CONTENT.cta.href}
              className="inline-block px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-500"
            >
              {ARTICLES_CONTENT.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
