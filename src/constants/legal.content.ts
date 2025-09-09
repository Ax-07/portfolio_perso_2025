// ==================================
// CONTENU LÉGAL
// ==================================
// Contenu des mentions légales et politique de confidentialité

import { User, Mail, Globe, Server, Shield, Scale } from "lucide-react";

export const LEGAL_CONTENT = {
  mentionsLegales: {
    metadata: {
      title: "Mentions Légales | Xavier Affringue - Développeur Full Stack",
      description: "Mentions légales du portfolio de Xavier Affringue, développeur Full Stack spécialisé en React, Next.js et Node.js.",
    },
    header: {
      title: "Mentions",
      titleHighlight: "Légales",
      description: "Informations légales concernant ce site web personnel.",
      lastUpdate: "Dernière mise à jour :",
    },
    sections: {
      editeur: {
        title: "1. Éditeur du site",
        icon: User,
        content: {
          nom: "Xavier Affringue",
          statut: "Développeur Full Stack indépendant",
          email: "xavier.affringue@email.com",
          localisation: "France",
        }
      },
      hebergement: {
        title: "2. Hébergement",
        icon: Server,
        content: {
          hebergeur: "Vercel Inc.",
          adresse: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
          siteWeb: "https://vercel.com",
        }
      },
      proprieteIntellectuelle: {
        title: "3. Propriété intellectuelle",
        icon: Shield,
        content: [
          "L'ensemble de ce site web, y compris sa conception, son contenu, ses textes, images, et son code source, est la propriété exclusive de Xavier Affringue, sauf mention contraire.",
          "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.",
          "Les marques, logos et noms de domaines mentionnés sur ce site sont la propriété de leurs détenteurs respectifs."
        ]
      },
      responsabilite: {
        title: "4. Limitation de responsabilité",
        icon: Globe,
        content: [
          "Les informations contenues sur ce site sont données à titre indicatif et sont susceptibles d'évoluer. Xavier Affringue ne peut être tenu responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site.",
          "L'utilisateur assume l'ensemble des risques découlant de l'utilisation des informations contenues sur le site. Il appartient à l'utilisateur de s'assurer que les informations consultées sont exactes et à jour.",
          "Ce site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Xavier Affringue n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu."
        ]
      },
      donnees: {
        title: "5. Protection des données personnelles",
        icon: Mail,
        content: [
          "Ce site collecte uniquement les données nécessaires via le formulaire de contact (nom, email, entreprise, message). Ces données sont utilisées exclusivement pour répondre aux demandes des utilisateurs.",
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données personnelles.",
          "Pour exercer ces droits ou pour toute question concernant le traitement de vos données personnelles, vous pouvez me contacter à l'adresse email mentionnée ci-dessus."
        ],
        cta: {
          text: "Voir la politique de confidentialité",
          href: "/politique-confidentialite"
        }
      },
      droitApplicable: {
        title: "6. Droit applicable",
        icon: Scale,
        content: [
          "Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.",
          "Si une clause des présentes mentions légales était déclarée nulle ou sans effet, cela n'affecterait pas la validité des autres clauses."
        ]
      },
      contact: {
        title: "Questions ?",
        description: "Pour toute question concernant ces mentions légales, n'hésitez pas à me contacter.",
        cta: {
          text: "Me contacter",
          href: "/#contact"
        }
      }
    }
  }
};

export type LegalContent = typeof LEGAL_CONTENT;
