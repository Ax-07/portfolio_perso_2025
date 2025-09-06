# 💼 Portfolio Personnel - Xavier Affringue

## 🚀 Portfolio de Développeur Full Stack

Portfolio moderne et professionnel développé avec les dernières technologies. Architecture modulaire avec système de contenu centralisé, navigation optimisée et URLs SEO-friendly.

## ✨ Fonctionnalités Principales

### 🎨 **Design & Interface**
- **Style Corporate** : Design professionnel avec effets glassmorphism
- **Thème Emeraude** : Palette de couleurs signature verte
- **Mode Sombre/Clair** : Bascule fluide entre les thèmes
- **Responsive Design** : Optimisé pour tous les appareils
- **Animations CSS** : Transitions et effets visuels modernes
- **Navigation Intelligente** : Détection de scroll avec système de verrouillage anti-conflit

### 📧 **Système de Contact Avancé**
- **API Nodemailer** : Envoi d'emails fonctionnel avec gestion d'erreurs
- **Validation Zod** : Validation robuste côté serveur et client
- **Templates HTML** : Emails stylisés et professionnels
- **Email de confirmation** : Retour automatique à l'expéditeur
- **Support multi-SMTP** : Gmail, Outlook, SMTP personnalisé

### �️ **Architecture Projets 3 Niveaux**
- **Niveau 1** : Section projets sur l'accueil (3 projets en aperçu)
- **Niveau 2** : Page portfolio complète (`/portfolio`)
- **Niveau 3** : Pages projet détaillées avec URLs SEO (`/portfolio/nom-du-projet`)
- **Slugs SEO-friendly** : URLs lisibles (ex: `/portfolio/e-commerce-moderne`)
- **Navigation progressive** : Découverte hiérarchique des projets

### 🎯 **Gestion de Contenu Centralisée**
- **Source de vérité unique** : Fichier `brand.ts` pour toutes les informations
- **Modularité** : Séparation claire du contenu et des composants
- **TypeScript** : Types définis pour la cohérence des données
- **Évolutivité** : Structure adaptable aux besoins futurs

### 🔧 **Fonctionnalités Techniques**
- **Forms ShadCN** : Formulaires avec validation avancée
- **Performance optimisée** : Next.js 15 avec Turbopack
- **Accessibilité** : Respecte les standards WCAG
- **SEO Ready** : Métadonnées optimisées et génération statique
- **Error Handling** : Gestion d'erreurs robuste

## 🛠️ Stack Technique

### **Frontend**
- **Next.js 15** : Framework React avec App Router et Turbopack
- **React 19** : Dernière version avec nouvelles fonctionnalités
- **Tailwind CSS 4** : Framework CSS utilitaire nouvelle génération
- **ShadCN UI** : Composants UI modernes et accessibles
- **React Hook Form** : Gestion avancée des formulaires
- **Zod 4** : Validation de schémas TypeScript-first
- **Lucide React** : Bibliothèque d'icônes modernes
- **next-themes** : Gestion des thèmes sombre/clair
- **Framer Motion** : Animations fluides et performantes

### **Backend & API**
- **API Routes Next.js** : Endpoints serveur intégrés
- **Nodemailer** : Service d'envoi d'emails robuste
- **Validation serveur** : Sécurité avec Zod

### **Développement & Outils**
- **TypeScript 5** : Typage statique avancé
- **ESLint 9** : Analyse de code moderne
- **Turbopack** : Bundler ultra-rapide
- **Types personnalisés** : Types définis pour les projets et contenu

## 🚀 Installation et Configuration

### 1. **Installation des dépendances**
```bash
pnpm install
```

### 2. **Configuration Email**
```bash
# Copiez le fichier d'exemple
cp .env.example .env.local

# Éditez .env.local avec vos paramètres
```

#### Configuration Gmail (Recommandée) :
```env
EMAIL_SERVICE=gmail
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-app-password-google
EMAIL_TO=xavier.affringue@email.com
SEND_CONFIRMATION=true
```

> 📋 **Instructions détaillées** : Voir `docs/EMAIL_CONFIG.md`

### 3. **Lancement**
```bash
# Développement avec Turbopack
pnpm dev

# Build de production avec Turbopack
pnpm build

# Production
pnpm start
```

Le portfolio est accessible sur **http://localhost:3001**

## 📁 Structure du Projet

```
src/
├── app/                        # App Router Next.js 15
│   ├── api/contact/           # API d'envoi d'emails
│   ├── portfolio/
│   │   ├── page.tsx          # Liste complète des projets
│   │   └── [slug]/           # Pages projet individuelles avec slugs SEO
│   ├── mentions-legales/     # Pages légales
│   ├── politique-confidentialite/
│   ├── globals.css           # Styles globaux & thèmes
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── ui/                   # Composants ShadCN UI
│   ├── layouts/              # Header, Footer, Navigation
│   ├── pages/                # Pages complètes (portfolio, projet détail)
│   ├── providers/            # Context providers (thème)
│   └── sections/             # Sections modulaires
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── projects-section.tsx  # Aperçu 3 projets
│       └── contact-section.tsx
├── constants/                 # Contenu centralisé
│   ├── brand.ts              # Source de vérité principale
│   ├── projects.content.ts   # Données projets avec slugs
│   ├── hero.content.ts       # Contenu section hero
│   ├── about.content.ts      # Contenu section à propos
│   └── contact.content.ts    # Contenu section contact
├── types/                    # Types TypeScript
│   └── project.ts           # Interface Project avec slugs
├── lib/                      # Utilitaires
│   ├── utils.ts             # Helpers généraux
│   └── slug.ts              # Générateur de slugs SEO
└── hooks/                    # Hooks personnalisés
    └── use-mobile.ts
```

## 🎨 Système de Design

### **Couleurs**
- **Primaire** : Emeraude (`emerald-500` à `emerald-950`)
- **Glassmorphism** : Effets de transparence et flou
- **Mode sombre** : Support natif avec `next-themes`

### **Composants Clés**
- `.glass-card` : Cards avec effet glassmorphism
- `.floating-card` : Animation de flottement
- `.professional-button` : Boutons avec style corporate
- `.emerald-glow` : Effet lumineux émeraude

## �️ Architecture Projets

### **Navigation 3 Niveaux**
1. **Accueil** (`/#projects`) : 3 projets en aperçu avec liens vers détails
2. **Portfolio** (`/portfolio`) : Liste complète de tous les projets
3. **Projet** (`/portfolio/[slug]`) : Page détaillée de chaque projet

### **URLs SEO-Friendly**
- ✅ `/portfolio/e-commerce-moderne`
- ✅ `/portfolio/application-saas`
- ✅ `/portfolio/portfolio-agence`
- ✅ `/portfolio/api-graphql`

### **Fonctionnalités Projets**
- **Slugs automatiques** : Générés à partir des titres
- **Métadonnées dynamiques** : SEO optimisé par projet
- **Navigation breadcrumb** : Retour facilité
- **Images responsives** : Optimisation Next.js
- **Filtrage par catégorie** : Frontend, Backend, Full Stack, SaaS

## �📧 Configuration Email

### **Fournisseurs Supportés**
| Service | Configuration |
|---------|--------------|
| **Gmail** | Service automatique avec App Password |
| **Outlook** | SMTP : `smtp-mail.outlook.com:587` |
| **Yahoo** | SMTP : `smtp.mail.yahoo.com:587` |
| **SMTP Custom** | Configuration manuelle |

### **Fonctionnalités Email**
- ✅ Validation Zod côté serveur
- ✅ Templates HTML responsives
- ✅ Email de confirmation automatique
- ✅ Gestion d'erreurs complète
- ✅ Logs de débogage

## 🎯 Personnalisation

### **Modifier les couleurs**
Éditez `tailwind.config.ts` pour changer la palette :
```js
colors: {
  primary: colors.emerald,  // Changez ici
}
```

### **Ajouter des sections**
1. Créez un composant dans `src/components/sections/`
2. Ajoutez le contenu dans `src/constants/`
3. Importez dans `src/app/page.tsx`

### **Modifier le contenu**
- **Informations personnelles** : `src/constants/brand.ts` (source de vérité)
- **Contenu Hero** : `src/constants/hero.content.ts`
- **À propos** : `src/constants/about.content.ts`
- **Projets** : `src/constants/projects.content.ts`
- **Contact** : `src/constants/contact.content.ts`

### **Ajouter un projet**
```typescript
// Dans src/constants/projects.content.ts
{
  id: 5,
  slug: "nouveau-projet", // Sera l'URL finale
  title: "Nouveau Projet",
  description: "Description du projet...",
  category: "Full Stack",
  technologies: ["React", "Node.js"],
  // ... autres propriétés
}
```

### **Gestion Centralisée**
- **Une seule source** : Toutes les infos personnelles dans `brand.ts`
- **Cohérence** : Réutilisation automatique dans tous les composants
- **Types sûrs** : Validation TypeScript pour éviter les erreurs

## 🚀 Déploiement

### **Vercel (Recommandé)**
```bash
# Deploy automatique
git push origin main

# Variables d'environnement à configurer :
# EMAIL_SERVICE, EMAIL_USER, EMAIL_PASS, EMAIL_TO
```

### **Autres plateformes**
- **Netlify** : Ajoutez les variables d'environnement
- **Railway** : Support Node.js intégré
- **Heroku** : Configuration Buildpack Node.js

## 📋 Scripts Disponibles

```bash
pnpm dev          # Serveur de développement avec Turbopack
pnpm build        # Build de production avec Turbopack
pnpm start        # Serveur de production
pnpm lint         # Analyse ESLint
```

## 🐛 Débogage

### **Problèmes courants**
1. **Emails non envoyés** : Vérifiez `.env.local` et les logs console
2. **Erreurs de build** : Vérifiez les types TypeScript
3. **Styles manquants** : Vérifiez la configuration Tailwind
4. **404 sur projets** : Vérifiez que les slugs correspondent dans `projects.content.ts`
5. **Navigation mobile** : Vérifiez les breakpoints responsive

### **Logs utiles**
```bash
# Développement avec logs détaillés
pnpm dev

# Vérification des variables d'environnement
echo $EMAIL_USER
```

### **Turbopack**
Le projet utilise Turbopack pour des builds ultra-rapides. En cas de problème :
```bash
# Fallback vers Webpack
npm run dev:webpack
npm run build:webpack
```

## 📄 Documentation

- 📧 **Configuration Email** : `docs/EMAIL_CONFIG.md`
- �️ **Architecture Projets** : `docs/PROJECTS_ARCHITECTURE.md`
- 🎯 **Centralisation** : `docs/CENTRALIZATION.md`
- �🎨 **Guide Design** : Dans les commentaires CSS
- 🔧 **API Reference** : `src/app/api/contact/route.ts`

## 🔄 Évolutions Récentes

### **v2.0 - Architecture Modulaire**
- ✅ Centralisation du contenu dans `brand.ts`
- ✅ URLs SEO-friendly avec slugs
- ✅ Architecture projets 3 niveaux
- ✅ Types TypeScript personnalisés
- ✅ Navigation intelligente avec anti-conflit

### **v1.5 - Optimisations**
- ✅ Next.js 15 avec Turbopack
- ✅ React 19 et nouvelles fonctionnalités
- ✅ Tailwind CSS 4
- ✅ Amélioration de l'accessibilité

## 🤝 Contribution

Ce portfolio est personnel, mais les suggestions et améliorations sont les bienvenues !

### **Structure pour les contributions**
- Issues : Signalement de bugs ou suggestions
- Pull Requests : Améliorations du code
- Documentation : Corrections ou ajouts

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ par Xavier Affringue**  
*Développeur Full Stack spécialisé en React, Next.js et Node.js*

### **Liens Utiles**
- 🌐 **Portfolio Live** : [xavier-affringue.dev](https://xavier-affringue.dev)
- 💼 **LinkedIn** : [Xavier Affringue](https://linkedin.com/in/xavier-affringue)
- 🐙 **GitHub** : [@xavier-affringue](https://github.com/xavier-affringue)
- 📧 **Contact** : xavier.affringue@email.com
