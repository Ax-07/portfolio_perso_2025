// ==================================
// SECTION CONTACT
// ==================================
// ⚠️ Utilise brand.ts comme source de vérité pour les informations personnelles

import { CheckCircle, Clock, MapPin } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/config';

export const CONTACT_CONTENT = {
  badge: "Contact",
  title: "Travaillons",
  titleHighlight: "ensemble",
  description_1: "Vous avez un projet en tête ?",
  description_2: "Discutons de la façon dont je peux vous aider à le concrétiser.",
  form: {
    title: "Parlez-moi de votre projet",
    subtitle: "Plus vous me donnez de détails, mieux je pourrai vous aider.",
    fields: {
      name: {
        label: "Nom complet *",
        placeholder: "Votre nom",
        required: true,
        minLength: 2,
        errorMessage: "Le nom doit contenir au moins 2 caractères."
      },
      email: {
        label: "Email professionnel *",
        placeholder: "votre@entreprise.com",
        required: true,
        type: "email",
        errorMessage: "Veuillez entrer une adresse email valide."
      },
      company: {
        label: "Entreprise / Organisation",
        placeholder: "Nom de votre structure",
        required: false
      },
      budget: {
        label: "Budget approximatif",
        placeholder: "Sélectionnez une fourchette",
        required: false,
        options: [
          { value: "<5k", label: "< 5 000€" },
          { value: "5k-10k", label: "5 000€ - 10 000€" },
          { value: "10k-25k", label: "10 000€ - 25 000€" },
          { value: "25k-50k", label: "25 000€ - 50 000€" },
          { value: "50k+", label: "50 000€+" },
          { value: "discuss", label: "À discuter" }
        ]
      },
      message: {
        label: "Décrivez votre projet *",
        placeholder: "Décrivez votre projet : objectifs, délais, contraintes techniques, public cible...",
        required: true,
        minLength: 10,
        errorMessage: "Le message doit contenir au moins 10 caractères."
      }
    },
    submit: {
      text: "Envoyer ma demande",
      loading: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi. Veuillez réessayer."
    },
    privacy: "Vos données sont protégées et ne seront utilisées que pour répondre à votre demande.",
    successMessage: {
      title: "Message envoyé avec succès !",
      description: "Merci pour votre message. Je vais l'examiner attentivement et vous répondre dans les plus brefs délais.",
      buttonText: "Envoyer un autre message"
    }
  },
  infos: {
    title: "Informations utiles",
    items: [
      {
        name: "Délai de réponse",
        icon: Clock,
        description: PERSONAL_INFO.status.responseTime
      },
      {
        name: "Localisation",
        icon: MapPin,
        description: `${PERSONAL_INFO.status.location} - ${PERSONAL_INFO.status.remote}`
      },
      {
        name: "Disponibilité",
        icon: CheckCircle,
        description: PERSONAL_INFO.status.available ? "Ouvert aux nouveaux projets" : "Indisponible actuellement"
      }
    ]
  },

  social: SOCIAL_LINKS
} as const;