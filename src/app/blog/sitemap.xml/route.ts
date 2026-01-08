import { getAllBlogPosts } from "@/lib/blog-utils";
import { MetadataRoute } from "next";

/**
 * Route API pour générer dynamiquement le sitemap XML des articles de blog.
 * 
 * Génère un fichier sitemap.xml conforme au protocole Sitemaps 0.9
 * listant tous les articles de blog publiés avec leurs métadonnées.
 * 
 * **Avantages SEO** :
 * - Facilite l'indexation des articles par Google et autres moteurs
 * - Indique la fraîcheur du contenu (lastmod)
 * - Priorise l'importance relative des pages (priority)
 * - Suggère la fréquence de mise à jour (changefreq)
 * 
 * **Format XML généré** :
 * ```xml
 * <?xml version="1.0" encoding="UTF-8"?>
 * <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 *   <url>
 *     <loc>https://site.com/blog/article-1</loc>
 *     <lastmod>2026-01-07</lastmod>
 *     <changefreq>monthly</changefreq>
 *     <priority>0.8</priority>
 *   </url>
 * </urlset>
 * ```
 * 
 * **Paramètres** :
 * - changefreq: "monthly" (contenu stable après publication)
 * - priority: 0.8 (important mais pas autant que la page d'accueil)
 * 
 * @returns {Promise<Response>} Response HTTP avec XML du sitemap
 * 
 * @example
 * // Accessible via : https://votre-site.com/blog/sitemap.xml
 * // À référencer dans robots.txt :
 * // Sitemap: https://votre-site.com/blog/sitemap.xml
 * 
 * @see https://www.sitemaps.org/protocol.html
 * @async
 */
export async function GET(): Promise<Response> {
  const posts = await getAllBlogPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-perso-2025.vercel.app";

  const sitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.lastUpdated || post.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap
    .map(
      (item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${new Date(item.lastModified!).toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
