import { Metadata } from "next";
import { PortfolioPage } from "@/components/pages";
import { SEO_CONFIG } from "@/config";

export const metadata: Metadata = {
  title: "Portfolio",
  description: SEO_CONFIG.pages.portfolio.description,
  openGraph: {
    title: `Portfolio | ${SEO_CONFIG.openGraph.siteName}`,
    description: SEO_CONFIG.pages.portfolio.description,
    url: `${SEO_CONFIG.canonical}/portfolio`,
  },
};

export default function Portfolio() {
  return <PortfolioPage />;
}
