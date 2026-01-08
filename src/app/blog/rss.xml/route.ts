import { getAllBlogPosts } from "@/lib/blog-utils";

/**
 * Route API pour générer dynamiquement le flux RSS 2.0 du blog.
 * 
 * Génère un fichier RSS XML conforme à la spécification RSS 2.0
 * permettant aux lecteurs de flux et agrégateurs de contenu de suivre
 * les publications du blog.
 * 
 * **Avantages** :
 * - Permet aux lecteurs de s'abonner au blog via un lecteur RSS (Feedly, Inoreader, etc.)
 * - Syndication automatique du contenu
 * - Notifications automatiques des nouveaux articles
 * - Standard web ouvert et indépendant des plateformes
 * 
 * **Format RSS généré** :
 * ```xml
 * <?xml version="1.0" encoding="UTF-8"?>
 * <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
 *   <channel>
 *     <title>Blog Title</title>
 *     <link>https://site.com/blog</link>
 *     <description>Blog description</description>
 *     <item>
 *       <title>Article Title</title>
 *       <link>https://site.com/blog/article</link>
 *       <description>Article description</description>
 *       <pubDate>Mon, 06 Jan 2026 00:00:00 GMT</pubDate>
 *       <guid>https://site.com/blog/article</guid>
 *     </item>
 *   </channel>
 * </rss>
 * ```
 * 
 * **Métadonnées incluses** :
 * - Titre et description de chaque article
 * - Date de publication (format RFC 822)
 * - GUID unique pour chaque article
 * - Tags/catégories
 * - Lien atom:link pour l'auto-référence
 * 
 * **Cache** :
 * - Cache public pendant 1 heure (3600 secondes)
 * - Cache CDN (s-maxage) pendant 1 heure
 * 
 * @returns {Promise<Response>} Response HTTP avec XML du flux RSS
 * 
 * @example
 * // Accessible via : https://votre-site.com/blog/rss.xml
 * // À référencer dans le <head> :
 * // <link rel="alternate" type="application/rss+xml" href="/blog/rss.xml" />
 * 
 * @see https://www.rssboard.org/rss-specification
 * @async
 */
export async function GET(): Promise<Response> {
  const posts = await getAllBlogPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-perso-2025.vercel.app";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Xavier Affringue - Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Articles techniques sur Next.js, React et le développement web</description>
    <language>fr-FR</language>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description>${escapeXml(post.description || "")}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      ${post.tags?.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ") || ""}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

/**
 * Échappe les caractères spéciaux XML pour éviter les erreurs de parsing.
 * 
 * Remplace les caractères XML sensibles par leurs entités HTML :
 * - & → &amp;
 * - < → &lt;
 * - > → &gt;
 * - " → &quot;
 * - ' → &apos;
 * 
 * @param {string} str - La chaîne à échapper
 * @returns {string} La chaîne échappée et sécurisée pour XML
 * 
 * @example
 * escapeXml("React & Next.js") // "React &amp; Next.js"
 * escapeXml("<div>") // "&lt;div&gt;"
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
