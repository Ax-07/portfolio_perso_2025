// Types pour le portfolio
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  links: {
    demo: string;
    github: string;
  };
  status: string;
  year: string;
}

export interface ProjectsContent {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  projects: Project[];
  categories: string[];
  cta: {
    title: string;
    description_1: string;
    description_2: string;
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}
