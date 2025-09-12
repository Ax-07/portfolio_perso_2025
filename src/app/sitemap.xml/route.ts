import { NextResponse } from 'next/server';
import { SITE_METADATA } from '@/config';
import { PROJECTS_SECTION_CONTENT } from '@/constants/projects.content';

// Liste des pages statiques du site
const staticPages = [
  '',
  '/portfolio',
  '/mentions-legales',
  '/politique-confidentialite',
];

export async function GET() {
  const baseUrl = SITE_METADATA.url;
  const currentDate = new Date().toISOString();

  // Générer les URLs des projets dynamiques
  const projectPages = PROJECTS_SECTION_CONTENT.projects.map(project => `/portfolio/${project.slug}`);

  // Combiner toutes les pages
  const allPages = [...staticPages, ...projectPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page.startsWith('/portfolio/') ? 'monthly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/portfolio/') ? '0.8' : '0.7'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache pendant 24h
    },
  });
}
