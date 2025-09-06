# Portfolio Xavier Affringue

Portfolio personnel développé avec Next.js 15 et React 19.

## Technologies utilisées

- **Next.js 15** avec Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Nodemailer** pour l'envoi d'emails

## Installation

```bash
# Installation des dépendances
pnpm install

# Configuration email (optionnel)
cp .env.example .env.local

# Lancement en développement
pnpm dev
```

Le site est accessible sur `http://localhost:3001`

## Configuration Email (optionnel)

Pour activer le formulaire de contact, créez un fichier `.env.local` :

```env
EMAIL_SERVICE=gmail
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
EMAIL_TO=destinataire@email.com
```

## Scripts

```bash
pnpm dev          # Développement
pnpm build        # Build de production
pnpm start        # Serveur de production
```

## Structure

```
src/
├── app/                 # Pages Next.js
├── components/          # Composants React
├── constants/           # Contenu du site
└── lib/                 # Utilitaires
```

---

**Développé par Xavier Affringue**
