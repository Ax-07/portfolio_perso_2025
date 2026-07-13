import { Header } from "@/components/layouts/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO_CONFIG } from "@/config";
import { getAllBlogPosts, getCategories } from "@/lib/blog-utils";
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
          <Accordion type="single" collapsible className="w-full">
            {categories.map((category) => (
              <AccordionItem value={category} key={category}>
                <AccordionTrigger className="text-left w-full hover:none">{category}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-2 mb-4">
                    {fileNames
                      .filter((file) => file.category === category)
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((file) => (
                        <li key={file.slug}>
                          <Link href={`/blog/${file.slug}`} className="block h-full text-sm text-muted-foreground hover:text-foreground">
                            {file.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
        {children}
      </div>
    </>
  );
}
