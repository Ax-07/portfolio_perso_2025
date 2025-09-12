// Types pour le portfolio
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: {
    short: string; // Description courte pour vignettes (80-120 caractères)
    long: string; // Description détaillée pour page projet (200-300 caractères)
  };
  image: string;
  favicon?: {
    ico?: string;
    png32?: string;
    png16?: string;
    png192?: string;
    png512?: string;
    appleTouch?: string;
  }
  category: string;
  objectif: string;
  defi: string;
  technologies: {
    frontend?: {
      language?: string;
      frameworks?: string[];
      styling?: string[];
      uiLibraries?: string[];
      stateManagement?: string[];
      libraries?: string[];
    };
    backend?: {
      language?: string;
      runtime?: string[];
      frameworks?: string[];
      apiTypes?: string[];
      security?: string[];
      authentication?: string[];
      libraries?: string[];
    };
    database?: {
      databases?: string[];
      orm?: string[];
    };
    tools?: string[];
    deployment?: {
      platforms?: string[];
      containerization?: string[];
      ciCd?: string[];
    };
  };
  pages: {
    nom: string;
    description: string;
  }[];
  features: string[];
  technicalHighlights?: string[];
  links: {
    demo: string;
    github?: string;
  };
  status: string;
  year: string;
}

export interface ProjectsSectionContent {
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
