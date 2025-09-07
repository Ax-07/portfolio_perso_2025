import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ColorThemeInitializer } from "@/components/ui/color-theme-initializer";
import { generatePageMetadata, getStructuredData } from "@/config";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées SEO optimisées pour la page d'accueil
const homeMetadata = generatePageMetadata('home');

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL('https://portfolio-perso-2025.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées pour le SEO
  const personSchema = getStructuredData('person');
  const websiteSchema = getStructuredData('website');
  const organizationSchema = getStructuredData('organization');

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Données structurées Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* Script de gestion des thèmes couleur */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                
                const COLOR_HUES = [
                  { name: 'emerald', hue: 162.68, label: 'Émeraude' },
                  { name: 'orange', hue: 70, label: 'Orange' },
                  { name: 'purple', hue: 270, label: 'Violet' },
                  { name: 'blue', hue: 240, label: 'Bleu' },
                  { name: 'red', hue: 25, label: 'Rouge' },
                  { name: 'green', hue: 120, label: 'Vert' },
                ];

                function applyTheme(hue) {
                  const root = document.documentElement;
                  const secondaryHue = (hue + 30) % 360;
                  
                  root.style.setProperty('--primary-hue', hue.toString());
                  root.style.setProperty('--secondary-hue', secondaryHue.toString());
                }

                try {
                  const savedTheme = localStorage.getItem('color-theme');
                  if (savedTheme) {
                    const theme = COLOR_HUES.find(t => t.name === savedTheme);
                    if (theme) {
                      applyTheme(theme.hue);
                    } else {
                      applyTheme(COLOR_HUES[0].hue);
                    }
                  } else {
                    applyTheme(COLOR_HUES[0].hue);
                  }
                } catch (error) {
                  applyTheme(COLOR_HUES[0].hue);
                }
              })();
            `
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ColorThemeInitializer />
          <SmoothScrollProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
