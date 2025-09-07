// ====================================================================
// INDEX CENTRALISÉ DES CONFIGURATIONS
// ====================================================================
// Point d'entrée unique pour toutes les configurations du projet

// Configuration SEO et métadonnées
export {
  SEO_CONFIG,
  generatePageMetadata,
  getStructuredData
} from './seo.config';

// Configuration branding et informations personnelles
export {
  PERSONAL_INFO,
  CONTACT_INFO,
  ONLINE_PRESENCE,
  TECH_STACK,
  VISUAL_BRAND,
  BRAND_INFO,
  SOCIAL_LINKS
} from './brand.config';

// Configuration navigation
export {
  MAIN_NAVIGATION,
  EXTERNAL_LINKS,
  FOOTER_NAVIGATION,
  SECTIONS
} from './navigation.config';

// Métadonnées globales du site
export { SITE_METADATA } from './site-metadata';
