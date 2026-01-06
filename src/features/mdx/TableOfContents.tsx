"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/lib/blog-utils";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden xl:block w-70 shrink-0 pl-12 border-l border-border max-h-[calc(100vh-11rem)] overflow-y-auto">
      <h4 className="mb-4 text-xl underline font-semibold text-foreground">
        Sur cette page
      </h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            className={cn(
              "transition-colors hover:text-foreground",
              heading.level === 3 && "pl-4",
              heading.level === 4 && "pl-8",
              activeId === heading.slug
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            <a
              href={`#${heading.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.slug)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(heading.slug);
                window.history.pushState(null, "", `#${heading.slug}`);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
