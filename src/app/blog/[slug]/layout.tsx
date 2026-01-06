import ScrollToTopBtn from "@/components/customs/ScrollToTopBtn";
import { Header } from "@/components/layouts/header";
import { Button } from "@/components/ui/button";
import { SEO_CONFIG } from "@/config";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-4 m-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blogs
            </Link>
          </Button>
        </div>
      </div>
      {children}
      <ScrollToTopBtn/>
    </>
  );
}
