import { SEO_CONFIG } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: SEO_CONFIG.pages.portfolio.description,
  openGraph: {
    title: `Portfolio | ${SEO_CONFIG.openGraph.siteName}`,
    description: SEO_CONFIG.pages.portfolio.description,
    url: `${SEO_CONFIG.canonical}/portfolio`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>
  {children}
  </>
  );
}
