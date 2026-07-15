import { Header } from "@/components/layouts/header";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SEO_CONFIG } from "@/config";
import { getAllBlogPosts, getCategories } from "@/lib/blog-utils";
import { ChevronDown } from "lucide-react";
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const fileNames = await getAllBlogPosts();
  const categories = await getCategories();

  return (
    <>
      <Header />
      <div className="relative flex flex-1 w-full">
        <nav className="sticky top-16 hidden lg:flex flex-col w-full lg:max-w-50 2xl:max-w-80 shrink-0 border-r border-primary-200/50 dark:border-primary-800/50 py-8 px-4 space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <h2 className="text-2xl bold">Articles</h2>
            {categories.map((category) => (
              <Collapsible key={category} defaultOpen={true}>
                <CollapsibleTrigger className="text-left w-full flex items-center justify-between text-md font-medium text-muted-foreground hover:text-foreground">
                {category}
                <ChevronDown className="ml-2 h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2 ml-2 mt-2 mb-4">
                    {fileNames
                      .filter((file) => file.category === category)
                      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                      .map((file) => (
                        <li key={file.slug}>
                          <Link href={`/blog/${file.slug}`} className="block h-full text-sm text-muted-foreground hover:text-foreground">
                            {file.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </nav>
        {children}
      </div>
    </>
  );
}
