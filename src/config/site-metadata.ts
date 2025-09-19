import { CONTACT_INFO, PERSONAL_INFO, TECH_STACK, SITE_URL } from "./brand.config";

// Métadonnées centralisées du site
export const SITE_METADATA = {
  title: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.jobTitle}`,
  description: PERSONAL_INFO.descriptions.seo,
  url: SITE_URL,
  domain: SITE_URL.replace('https://', ''),
  author: PERSONAL_INFO.fullName,
  email: CONTACT_INFO.email,
  
  // Pour les métadonnées SEO
  keywords: [
    "développeur web",
    "développeur full stack", 
    ...TECH_STACK.main.map(tech => tech.toLowerCase()),
    "freelance",
    "portfolio"
  ]
} as const;