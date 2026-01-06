import { type ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { CopyButton } from "./copy-button";

// Fonction pour extraire le texte du code
function getTextContent(children: any): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(getTextContent).join("");
  }
  if (children?.props?.children) {
    return getTextContent(children.props.children);
  }
  return "";
}

// Composant pour les blocs de code <pre>
export function Pre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
  const textContent = getTextContent(children);
  
  return (
    <div className="relative group">
      <pre {...props}>{children}</pre>
      <CopyButton text={textContent} />
    </div>
  );
}

// Composant pour le code inline et dans les blocs
export function Code({ children, ...props }: ComponentPropsWithoutRef<"code">) {
  return <code {...props} className="overflow-x-auto">{children}</code>;
}

export function H1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="mt-8 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
      {...props}
    >
      {children}
    </h1>
  );
}

// Composant pour les titres avec ancres
export function H2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h4>
  );
}

// Composant pour les paragraphes
export function P({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className="leading-7 not-first:mt-6" {...props}>
      {children}
    </p>
  );
}

// Composant pour les listes
export function Ul({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
}

export function Ol({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  );
}

// Composant pour les blockquotes
export function Blockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  );
}

// Composant pour les liens
export function A({ children, ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      {...props}
    >
      {children}
    </a>
  );
}

// Composant pour les séparateurs
export function Hr(props: ComponentPropsWithoutRef<"hr">) {
  return <hr className="my-8 border-border" {...props} />;
}

// Composant pour les tableaux
export function Table({ children, ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  );
}

export function Thead({ children, ...props }: ComponentPropsWithoutRef<"thead">) {
  return (
    <thead className="bg-muted/50" {...props}>
      {children}
    </thead>
  );
}

export function Tbody({ children, ...props }: ComponentPropsWithoutRef<"tbody">) {
  return <tbody {...props}>{children}</tbody>;
}

export function Tr({ children, ...props }: ComponentPropsWithoutRef<"tr">) {
  return (
    <tr className="border-b border-border transition-colors hover:bg-muted/50" {...props}>
      {children}
    </tr>
  );
}

export function Th({ children, ...props }: ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className="border border-border px-4 py-2 text-left font-semibold [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    >
      {children}
    </th>
  );
}

export function Td({ children, ...props }: ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className="border border-border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    >
      {children}
    </td>
  );
}

export function Img({ src, alt, title, width, height, ...props }: ComponentPropsWithoutRef<"img">) {
  if (!src) return null;

  return (
    <figure className="my-8">
        <Image
          src={src as string}
          alt={alt || ""}
          width={(width as number) || 1000}
          height={(height as number) || 500}
          fill
          className="h-auto w-full rounded-md object-fill aspect-video"
          // style={{ width: '100%', height: 'auto' }}
          {...props}
        />
      {title && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {title}
        </figcaption>
      )}
    </figure>
  );
}

// Exporter tous les composants MDX
export const mdxComponents = {
  pre: Pre,
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: Ul,
  ol: Ol,
  blockquote: Blockquote,
  a: A,
  hr: Hr,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  img: Img,
};
