// ==================================
// CONTENU POLITIQUE DE CONFIDENTIALITÉ
// ==================================
// Contenu de la politique de confidentialité et protection des données

import { Shield, Database, Mail, Eye, Settings, UserCheck } from "lucide-react";

export const POLICY_CONTENT = {
  politiqueConfidentialite: {
    metadata: {
      title: "Politique de Confidentialité | Xavier Affringue - Développeur Full Stack",
      description: "Politique de confidentialité et protection des données personnelles du portfolio de Xavier Affringue. Conformité RGPD.",
    },
    header: {
      title: "Politique de",
      titleHighlight: "Confidentialité",
      description: "Comment nous collectons, utilisons et protégeons vos données personnelles.",
      lastUpdate: "Dernière mise à jour :",
    },
    sections: [
      {
        title: "Introduction",
        icon: Shield,
        content: [
          "Cette politique de confidentialité explique comment Xavier Affringue collecte, utilise et protège vos informations personnelles lorsque vous utilisez ce site web.",
          "Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)."
        ]
      },
      {
        title: "Données que nous collectons",
        icon: Database,
        content: [
          "Informations que vous nous fournissez : Nom et prénom lorsque vous me contactez via le formulaire, adresse e-mail pour pouvoir vous répondre, message et détails de votre demande, numéro de téléphone si vous choisissez de le partager.",
          "Informations collectées automatiquement : Adresse IP pour la sécurité et l'analyse du trafic, type de navigateur et système d'exploitation, pages visitées et temps passé sur le site, référent (site d'où vous venez)."
        ]
      },
      {
        title: "Comment nous utilisons vos données",
        icon: Settings,
        content: [
          "J'utilise vos données personnelles uniquement pour : répondre à vos demandes de contact et questions, vous fournir les services que vous demandez, améliorer mon site web et mes services, assurer la sécurité et le bon fonctionnement du site, respecter mes obligations légales.",
          "Je ne vends, ne loue, ni ne partage vos données personnelles avec des tiers à des fins commerciales sans votre consentement explicite."
        ]
      },
      {
        title: "Partage et divulgation des données",
        icon: Eye,
        content: [
          "Vos données personnelles peuvent être partagées uniquement dans les cas suivants : avec des prestataires de services qui m'aident à faire fonctionner le site (hébergement, email), si requis par la loi ou une autorité judiciaire, pour protéger mes droits, ma propriété ou ma sécurité, en cas de vente ou transfert de mon activité.",
          "Tous les prestataires sont contractuellement tenus de protéger vos données selon les mêmes standards que moi."
        ]
      },
      {
        title: "Conservation des données",
        icon: Database,
        content: [
          "Je conserve vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées : Messages de contact (3 ans après notre dernière interaction), données de navigation (13 mois maximum pour les cookies analytiques), données de sécurité (1 an pour les logs de sécurité).",
          "Passés ces délais, vos données sont automatiquement supprimées de manière sécurisée."
        ]
      },
      {
        title: "Vos droits",
        icon: UserCheck,
        content: [
          "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles : droit d'accès (demander une copie de vos données personnelles), droit de rectification (corriger des données inexactes ou incomplètes), droit à l'effacement (demander la suppression de vos données), droit à la limitation (limiter le traitement de vos données), droit à la portabilité (récupérer vos données dans un format structuré), droit d'opposition (vous opposer au traitement de vos données), droit de retrait du consentement (retirer votre consentement à tout moment).",
          "Pour exercer ces droits, contactez-moi à : xavier.affringue@gmail.com",
          "Vous avez également le droit de déposer une plainte auprès de la CNIL si vous estimez que vos droits ne sont pas respectés."
        ]
      },
      {
        title: "Sécurité des données",
        icon: Shield,
        content: [
          "Je mets en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles : chiffrement (toutes les données sont transmises via HTTPS/SSL), accès restreint (seules les personnes autorisées ont accès aux données), sauvegardes sécurisées (copies de sauvegarde chiffrées et sécurisées), mise à jour (systèmes et logiciels régulièrement mis à jour), surveillance (monitoring des tentatives d'accès non autorisé).",
          "Malgré ces mesures, aucun système n'est 100% sécurisé. Je m'engage à vous informer rapidement en cas de violation de données."
        ]
      },
      {
        title: "Cookies et technologies similaires",
        icon: Settings,
        content: [
          "Ce site utilise des cookies pour améliorer votre expérience : cookies essentiels (nécessaires au fonctionnement du site, préférences thème), cookies analytiques (pour comprendre comment vous utilisez le site, anonymisés).",
          "Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités."
        ]
      },
      {
        title: "Contact et questions",
        icon: Mail,
        content: [
          "Pour toute question concernant cette politique de confidentialité ou le traitement de vos données, vous pouvez me contacter :",
          "Xavier Affringue - Développeur Web | Email : xavier.affringue@gmail.com | Téléphone : 06 20 40 10 95 | Site web : https://xavier-affringue.com",
          "Je m'engage à répondre à vos demandes dans les meilleurs délais et au plus tard dans un délai d'un mois."
        ]
      }
    ]
  }
};

export type PolicyContent = typeof POLICY_CONTENT;
