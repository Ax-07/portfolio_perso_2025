# Portfolio Xavier Affringue

Portfolio personnel moderne et performant, développé avec **Next.js 15** et **React 19**.

Ce projet met l'accent sur la performance (Turbopack), l'expérience utilisateur (animations fluides, responsive design) et un référencement (SEO) optimisé.

## ✨ Fonctionnalités Clés

- **Stack Moderne** : Next.js 15 (App Router), React 19, TypeScript.
- **Design System** : Interface soignée avec Tailwind CSS v4 et ShadCN UI.
- **Animations** : Transitions fluides avec Framer Motion.
- **Formulaire de Contact** : Intégration complète avec React-Email et Nodemailer.
- **Blog / Contenu** : Support du MDX (Markdown enrichi) avec coloration syntaxique (Shiki).
- **SEO Avancé** : Génération automatique des métadonnées (Open Graph, JSON-LD, Twitter Cards) et monitoring (Vercel Analytics).
- **Architecture** : Structure modulaire et scalable.

## 🛠️ Stack Technique

### Core

- **Framework** : [Next.js 15.1](https://nextjs.org/) (avec Turbopack)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **UI Library** : [React 19](https://react.dev/)

### Styling & UI

- **CSS** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Components** : [ShadCN UI](https://ui.shadcn.com/) (Radix Primitives)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)

### Data & Content

- **Validation** : [Zod](https://zod.dev/) & React Hook Form
- **Markdown** : MDX avec `next-mdx-remote-client`, `gray-matter`, `rehype-slug`
- **Email** : [React Email](https://react.email/)

## 🚀 Installation

Pré-requis : Node.js 18+ et pnpm.

```bash
# 1. Cloner le repo
git clone https://github.com/votre-username/portfolio-perso.git

# 2. Installer les dépendances
pnpm install

# 3. Configurer l'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`.

## ⚙️ Configuration

### Variables d'environnement (`.env.local`)

Pour faire fonctionner l'envoi d'emails via le formulaire de contact :

```env
# Configuration Gmail (ou autre service SMTP)
EMAIL_SERVICE=gmail
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
EMAIL_TO=destinataire@email.com
```

### Configuration du site (`src/config/`)

Le projet centralise sa configuration dans `src/config` pour faciliter la maintenance :

- `site-metadata.ts` : Informations générales du site (titre, auteur, url...).
- `navigation.config.ts` : Liens du menu et structure de navigation.
- `brand.config.ts` : Identité visuelle.

## 📁 Structure du Projet

```txt
src/
├── app/                 # Routes Next.js (App Router)
├── assets/              # Images, icones statiques
├── components/
│   ├── ui/              # Composants de base (ShadCN)
│   ├── sections/        # Sections de page (Hero, About...)
│   └── ...
├── config/              # Configuration globale (SEO, Nav, Brand)
├── content/             # Fichiers MDX (Blog, Projets)
├── emails/              # Templates React-Email
├── features/            # Logique complexe (ex: moteur MDX)
├── hooks/               # Custom React Hooks
├── lib/                 # Utilitaires (SEO utils, helpers)
└── types/               # Définitions TypeScript
```

## 📈 SEO & Performance

Le projet intègre une gestion avancée du SEO via `src/lib/metadata-utils.ts` qui génère dynamiquement :

- Les balises Title et Description optimisées.
- Les données structurées JSON-LD.
- Les images Open Graph pour le partage social.

## 📜 Scripts

- `pnpm dev` : Lance le serveur de développement avec Turbopack.
- `pnpm build` : Compile l'application pour la production.
- `pnpm start` : Lance le serveur de production.
- `pnpm lint` : Vérifie la qualité du code avec ESLint.

---

***Développé par Xavier Affringue***
