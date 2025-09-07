import { CONTACT_INFO, ONLINE_PRESENCE, PERSONAL_INFO, TECH_STACK } from "./brand.config";

// Métadonnées centralisées du site
export const SITE_METADATA = {
  title: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.jobTitle}`,
  description: PERSONAL_INFO.descriptions.seo,
  url: ONLINE_PRESENCE.website.url,
  domain: ONLINE_PRESENCE.website.domain,
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