import { Project } from '@/types/project';

/**
 * Convertit les technologies organisées par catégorie en tableau plat
 * @param technologies - Technologies organisées par catégorie (frontend, backend, etc.)
 * @returns Tableau de toutes les technologies
 */
export const getAllTechnologies = (technologies: Project['technologies']['all']): string[] => {
  const allTechs: string[] = [];
  
  // Frontend technologies
  if (technologies.frontend) {
    if (technologies.frontend.language) allTechs.push(technologies.frontend.language);
    if (technologies.frontend.frameworks) allTechs.push(...technologies.frontend.frameworks);
    if (technologies.frontend.styling) allTechs.push(...technologies.frontend.styling);
    if (technologies.frontend.uiLibraries) allTechs.push(...technologies.frontend.uiLibraries);
    if (technologies.frontend.stateManagement) allTechs.push(...technologies.frontend.stateManagement);
    if (technologies.frontend.libraries) allTechs.push(...technologies.frontend.libraries);
  }
  
  // Backend technologies
  if (technologies.backend) {
    if (technologies.backend.language) allTechs.push(technologies.backend.language);
    if (technologies.backend.runtime) allTechs.push(...technologies.backend.runtime);
    if (technologies.backend.frameworks) allTechs.push(...technologies.backend.frameworks);
    if (technologies.backend.apiTypes) allTechs.push(...technologies.backend.apiTypes);
    if (technologies.backend.security) allTechs.push(...technologies.backend.security);
    if (technologies.backend.authentication) allTechs.push(...technologies.backend.authentication);
    if (technologies.backend.libraries) allTechs.push(...technologies.backend.libraries);
  }
  
  // Database technologies
  if (technologies.database) {
    if (technologies.database.databases) allTechs.push(...technologies.database.databases);
    if (technologies.database.orm) allTechs.push(...technologies.database.orm);
  }
  
  // Tools
  if (technologies.tools) allTechs.push(...technologies.tools);
  
  // Deployment technologies
  if (technologies.deployment) {
    if (technologies.deployment.platforms) allTechs.push(...technologies.deployment.platforms);
    if (technologies.deployment.containerization) allTechs.push(...technologies.deployment.containerization);
    if (technologies.deployment.ciCd) allTechs.push(...technologies.deployment.ciCd);
  }
  
  return allTechs;
};

export const getPrincipalesTechnologies = (technologies: Project['technologies']["principales"]): string[] => {
  return technologies || [];
};

/**
 * Calcule le nombre total de technologies d'un projet
 * @param technologies - Technologies du projet
 * @returns Nombre total de technologies
 */
export const getTotalTechnologiesCount = (technologies: Project['technologies']): number => {
  console.log('Calculating total technologies count for:', getAllTechnologies(technologies.all).length);
  return getAllTechnologies(technologies.all).length;
};

/**
 * Configuration des statuts de projet avec leurs couleurs et icônes
 */
export const PROJECT_STATUS_CONFIG = {
  "Terminé": { 
    color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400",
    iconName: "CheckCircle" 
  },
  "En cours": { 
    color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-400",
    iconName: "Clock" 
  },
  "Planifié": { 
    color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-400",
    iconName: "Calendar" 
  }
} as const;

/**
 * Obtient toutes les technologies frontend d'un projet
 */
export const getFrontendTechnologies = (frontend?: Project['technologies']['all']['frontend']): string[] => {
  if (!frontend) return [];
  
  const techs: string[] = [];
  if (frontend.language) techs.push(frontend.language);
  if (frontend.frameworks) techs.push(...frontend.frameworks);
  if (frontend.styling) techs.push(...frontend.styling);
  if (frontend.uiLibraries) techs.push(...frontend.uiLibraries);
  if (frontend.stateManagement) techs.push(...frontend.stateManagement);
  if (frontend.libraries) techs.push(...frontend.libraries);
  
  return techs;
};

/**
 * Obtient toutes les technologies backend d'un projet
 */
export const getBackendTechnologies = (backend?: Project['technologies']['all']['backend']): string[] => {
  if (!backend) return [];
  
  const techs: string[] = [];
  if (backend.language) techs.push(backend.language);
  if (backend.runtime) techs.push(...backend.runtime);
  if (backend.frameworks) techs.push(...backend.frameworks);
  if (backend.apiTypes) techs.push(...backend.apiTypes);
  if (backend.security) techs.push(...backend.security);
  if (backend.authentication) techs.push(...backend.authentication);
  if (backend.libraries) techs.push(...backend.libraries);
  
  return techs;
};

/**
 * Obtient toutes les technologies de base de données d'un projet
 */
export const getDatabaseTechnologies = (database?: Project['technologies']['all']['database']): string[] => {
  if (!database) return [];
  
  const techs: string[] = [];
  if (database.databases) techs.push(...database.databases);
  if (database.orm) techs.push(...database.orm);
  
  return techs;
};

/**
 * Obtient toutes les technologies de déploiement d'un projet
 */
export const getDeploymentTechnologies = (deployment?: Project['technologies']['all']['deployment']): string[] => {
  if (!deployment) return [];
  
  const techs: string[] = [];
  if (deployment.platforms) techs.push(...deployment.platforms);
  if (deployment.containerization) techs.push(...deployment.containerization);
  if (deployment.ciCd) techs.push(...deployment.ciCd);
  
  return techs;
};

/**
 * Vérifie si une section de technologies a du contenu
 */
export const hasFrontendTechnologies = (frontend?: Project['technologies']['all']['frontend']): boolean => {
  return getFrontendTechnologies(frontend).length > 0;
};

export const hasBackendTechnologies = (backend?: Project['technologies']['all']['backend']): boolean => {
  return getBackendTechnologies(backend).length > 0;
};

export const hasDatabaseTechnologies = (database?: Project['technologies']['all']['database']): boolean => {
  return getDatabaseTechnologies(database).length > 0;
};

export const hasDeploymentTechnologies = (deployment?: Project['technologies']['all']['deployment']): boolean => {
  return getDeploymentTechnologies(deployment).length > 0;
};

/**
 * Configuration des couleurs pour les badges de technologies par catégorie
 */
export const TECH_BADGE_COLORS = {
  frontend: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800",
  backend: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-800",
  database: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800",
  tools: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-800",
  deployment: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950/30 dark:text-gray-400 dark:border-gray-800",
  technical: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800",
  default: "bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-950/30 dark:text-primary-400 dark:border-primary-800"
} as const;

/**
 * Récupère la couleur appropriée pour un badge de technologie
 * @param category - Catégorie de la technologie (frontend, backend, etc.)
 * @returns Classes CSS pour le badge
 */
export const getTechBadgeColor = (category: keyof typeof TECH_BADGE_COLORS = 'default'): string => {
  return TECH_BADGE_COLORS[category] || TECH_BADGE_COLORS.default;
};
