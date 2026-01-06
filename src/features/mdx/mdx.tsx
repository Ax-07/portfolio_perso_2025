import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeShiki from "@shikijs/rehype";
import { mdxComponents } from "./mdx-components";

export const Mdx = async ({ children }: { children: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote 
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeShiki,
                {
                  themes: {
                    light: "dark-plus",
                    dark: "dark-plus",
                  },
                },
              ],
            ],
          },
        }}
        components={mdxComponents}
      />
    </Suspense>
  );
};
