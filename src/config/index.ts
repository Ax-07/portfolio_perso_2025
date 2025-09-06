// ====================================================================
// INDEX CENTRALISÉ DES CONFIGURATIONS
// ====================================================================
// Point d'entrée unique pour toutes les configurations du projet

// Configuration SEO et métadonnées
export {
  SEO_CONFIG,
  SITE_METADATA,
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
  FOOTER_NAVIGATION,
  SECTIONS
} from './navigation.config';
