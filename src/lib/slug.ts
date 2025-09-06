// Utilitaire pour générer des slugs SEO-friendly
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Remplacer les caractères spéciaux français
    .replace(/[àáâäã]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôöõ]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    // Remplacer les espaces et caractères spéciaux par des tirets
    .replace(/[^a-z0-9]/g, '-')
    // Supprimer les tirets multiples
    .replace(/-+/g, '-')
    // Supprimer les tirets en début/fin
    .replace(/^-|-$/g, '');
}

// Fonction pour trouver un projet par son slug
export function findProjectBySlug(projects: { title: string; slug?: string }[], slug: string) {
  return projects.find(project => 
    project.slug ? project.slug === slug : createSlug(project.title) === slug
  );
}
