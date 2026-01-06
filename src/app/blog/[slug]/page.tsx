// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getHeadings } from "@/lib/blog-utils";
import { Mdx } from "@/features/mdx/mdx";
import { TableOfContents } from "@/features/mdx/TableOfContents";
import Image from "next/image";

// export async function generateStaticParams() {
// }

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const blogPost = await getBlogPostBySlug(slug);
  if (!blogPost) {
    notFound();
  }

  const headings = getHeadings(blogPost.content);

  return (
    <main className="relative container mx-auto my-10 px-4">
      <div className="relative flex flex-col xl:flex-row gap-12 justify-center items-start">
        <article className="lg:max-w-3xl 2xl:max-w-5xl w-full">
          {blogPost.coverImage && (
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={blogPost.coverImage}
                alt={blogPost.title}
                fill
                className="object-fill"
                priority
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <p className="text-sm text-muted-foreground mb-8 lead">
            {new Date(blogPost.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <Mdx>{blogPost.content}</Mdx>
        </article>
        <TableOfContents headings={headings} />
      </div>
    </main>
  );
}
