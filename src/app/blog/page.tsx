// app/blog/page.tsx
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog-utils";
import Link from "next/link";
import Image from "next/image";

export default async function BlogIndex() {
  const fileNames = await getAllBlogPosts();
  return (
    <main className="container mx-auto my-10 px-4 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {fileNames
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((fileName) => {
            return (
              <Link key={fileName.slug} href={`/blog/${fileName.slug}`} className="block h-full">
                <Card className="h-full hover:bg-muted/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col pt-0">
                  {fileName.coverImage && (
                    <div className="relative w-full h-auto object-fill aspect-video">
                      <Image src={fileName.coverImage} alt={fileName.title} fill className="object-fill" />
                    </div>
                  )}
                  <CardHeader>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(fileName.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <CardTitle className="line-clamp-2">{fileName.title}</CardTitle>
                    {/* <CardDescription className="line-clamp-3 mt-2">
                    {fileName.description}
                  </CardDescription> */}
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
