export type Locale = "de" | "fr" | "it" | "nl" | "pt";

export interface LocaleLabels {
  nav: {
    home: string;
    sports: string;
    movies: string;
    pricing: string;
    howToOrder: string;
    guide: string;
    contact: string;
  };
  footer: {
    quickLinks: string;
    legal: string;
    home: string;
    pricing: string;
    guide: string;
    contact: string;
    terms: string;
    privacy: string;
    refund: string;
    desc: string;
    copyright: string;
  };
  contact: {
    title: string;
    intro: string;
    fastResponse: string;
    fastResponseText: string;
    installationGuides: string;
    installationGuidesIntro: string;
    installationGuidesOutro: string;
    faq: string;
    faqIntro: string;
    faqLinkText: string;
    faqOutro: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
  };
  guide: {
    title: string;
    subtitle: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    refundTitle: string;
  };
}

export const localeLabels: Record<Locale, LocaleLabels> = {
  de: {
    nav: {
      home: "Startseite",
      sports: "Sport",
      movies: "Filme",
      pricing: "Preise",
      howToOrder: "Bestellanleitung",
      guide: "Installationsanleitung",
      contact: "Kontakt",
    },
    footer: {
      quickLinks: "Schnelllinks",
      legal: "Rechtliches",
      home: "Startseite",
      pricing: "Preise",
      guide: "Installationsanleitung",
      contact: "Kontakt",
      terms: "AGB",
      privacy: "Datenschutzerklärung",
      refund: "Rückerstattung",
      desc: "Premium IPTV Subscription Service.",
      copyright: "© 2025 Plex Plus. All rights reserved.",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      intro:
        "Haben Sie Fragen oder benötigen Sie Hilfe? Unser dediziertes Support-Team ist rund um die Uhr für Sie da.",
      fastResponse: "Schnelle Antwort",
      fastResponseText:
        "Wir bemühen uns, alle Anfragen innerhalb von 1-2 Stunden zu beantworten. Bitte überprüfen Sie Ihren Spam-Ordner, falls Sie keine Antwort sehen.",
      installationGuides: "Installationsanleitungen",
      installationGuidesIntro: "Brauchen Sie Hilfe bei der Einrichtung? Schauen Sie sich unsere detaillierten ",
      installationGuidesOutro: " für Schritt-für-Schritt-Anweisungen an.",
      faq: "FAQ",
      faqIntro: "Finden Sie Antworten auf häufige Fragen zu Kanälen, Pufferung und mehr in unserem ",
      faqLinkText: "FAQ-Bereich",
      faqOutro: ".",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Wie können wir helfen?",
      sendButton: "Nachricht senden",
      sending: "Senden...",
      successMessage: "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze.",
      errorMessage: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    },
    guide: {
      title: "Installationsanleitung",
      subtitle:
        "In wenigen Minuten einsatzbereit. Folgen Sie unseren Schritt-für-Schritt-Anleitungen zur Einrichtung von Plex Plus auf jedem Gerät.",
    },
    legal: {
      privacyTitle: "Datenschutzerklärung",
      termsTitle: "AGB",
      refundTitle: "Rückerstattung",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      sports: "Sports",
      movies: "Films",
      pricing: "Tarifs",
      howToOrder: "Comment commander",
      guide: "Guide d'installation",
      contact: "Contact",
    },
    footer: {
      quickLinks: "Liens Rapides",
      legal: "Légal",
      home: "Accueil",
      pricing: "Tarifs",
      guide: "Guide d'installation",
      contact: "Contact",
      terms: "Conditions Générales",
      privacy: "Confidentialité",
      refund: "Remboursement",
      desc: "Service d'abonnement IPTV Premium.",
      copyright: "© 2025 Plex Plus. Tous droits réservés.",
    },
    contact: {
      title: "Contactez-nous",
      intro:
        "Vous avez des questions ou besoin d'aide ? Notre équipe de support dédiée est là pour vous 24/7.",
      fastResponse: "Réponse Rapide",
      fastResponseText:
        "Nous nous efforçons de répondre à toutes les demandes en 1-2 heures. Veuillez vérifier votre dossier Spam si vous ne voyez pas de réponse.",
      installationGuides: "Guides d'Installation",
      installationGuidesIntro: "Besoin d'aide pour l'installation ? Consultez nos ",
      installationGuidesOutro: " détaillés étape par étape.",
      faq: "FAQ",
      faqIntro: "Trouvez des réponses aux questions fréquentes sur les chaînes, les coupures et plus dans notre ",
      faqLinkText: "section FAQ",
      faqOutro: ".",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      sendButton: "Envoyer le message",
      sending: "Envoi...",
      successMessage: "Merci pour votre message. Nous vous répondrons sous peu.",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
    },
    guide: {
      title: "Guide d'installation",
      subtitle:
        "Opérationnel en quelques minutes. Suivez nos tutoriels étape par étape pour configurer Plex Plus sur n'importe quel appareil.",
    },
    legal: {
      privacyTitle: "Confidentialité",
      termsTitle: "Conditions Générales",
      refundTitle: "Remboursement",
    },
  },
  it: {
    nav: {
      home: "Home",
      sports: "Sport",
      movies: "Film",
      pricing: "Prezzi",
      howToOrder: "Come ordinare",
      guide: "Guida Installazione",
      contact: "Contatti",
    },
    footer: {
      quickLinks: "Link Rapidi",
      legal: "Legale",
      home: "Home",
      pricing: "Prezzi",
      guide: "Guida Installazione",
      contact: "Contatti",
      terms: "Termini e Condizioni",
      privacy: "Privacy",
      refund: "Rimborsi",
      desc: "Servizio di abbonamento IPTV Premium.",
      copyright: "© 2025 Plex Plus. Tutti i diritti riservati.",
    },
    contact: {
      title: "Contattaci",
      intro:
        "Hai domande o bisogno di aiuto? Il nostro team di supporto dedicato è qui per te 24/7.",
      fastResponse: "Risposta Rapida",
      fastResponseText:
        "Ci impegniamo a rispondere a tutte le richieste in 1-2 ore. Controlla la cartella Spam se non vedi una risposta.",
      installationGuides: "Guide Installazione",
      installationGuidesIntro: "Serve aiuto per l'installazione? Consulta le nostre ",
      installationGuidesOutro: " dettagliate passo dopo passo.",
      faq: "FAQ",
      faqIntro: "Trova risposte alle domande frequenti su canali, blocchi e altro nella nostra ",
      faqLinkText: "sezione FAQ",
      faqOutro: ".",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Messaggio",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "La tua email",
      messagePlaceholder: "Come possiamo aiutarti?",
      sendButton: "Invia messaggio",
      sending: "Invio...",
      successMessage: "Grazie per il tuo messaggio. Ti risponderemo a breve.",
      errorMessage: "Si è verificato un errore. Riprova.",
    },
    guide: {
      title: "Guida Installazione",
      subtitle:
        "Operativo in pochi minuti. Segui i nostri tutorial passo-passo per configurare Plex Plus su qualsiasi dispositivo.",
    },
    legal: {
      privacyTitle: "Privacy",
      termsTitle: "Termini e Condizioni",
      refundTitle: "Rimborsi",
    },
  },
  nl: {
    nav: {
      home: "Home",
      sports: "Sport",
      movies: "Films",
      pricing: "Prijzen",
      howToOrder: "Hoe bestellen",
      guide: "Installatie Gids",
      contact: "Contact",
    },
    footer: {
      quickLinks: "Snelle Links",
      legal: "Legale Info",
      home: "Home",
      pricing: "Prijzen",
      guide: "Installatie Gids",
      contact: "Contact",
      terms: "Algemene Voorwaarden",
      privacy: "Privacybeleid",
      refund: "Restitutiebeleid",
      desc: "Premium IPTV Abonnement Service.",
      copyright: "© 2025 Plex Plus. Alle rechten voorbehouden.",
    },
    contact: {
      title: "Neem Contact Op",
      intro:
        "Heb je vragen of hulp nodig? Ons toegewijde support team staat 24/7 voor je klaar.",
      fastResponse: "Snelle Reactie",
      fastResponseText:
        "We streven ernaar om alle aanvragen binnen 1-2 uur te beantwoorden. Controleer je Spam map als je geen antwoord ziet.",
      installationGuides: "Installatie Gidsen",
      installationGuidesIntro: "Hulp nodig bij installatie? Raadpleeg onze gedetailleerde ",
      installationGuidesOutro: " stap voor stap.",
      faq: "FAQ",
      faqIntro: "Vind antwoorden op veelgestelde vragen over zenders, storingen en meer in onze ",
      faqLinkText: "FAQ sectie",
      faqOutro: ".",
      nameLabel: "Naam",
      emailLabel: "Email",
      messageLabel: "Bericht",
      namePlaceholder: "Je naam",
      emailPlaceholder: "Je email",
      messagePlaceholder: "Hoe kunnen we helpen?",
      sendButton: "Bericht versturen",
      sending: "Versturen...",
      successMessage: "Bedankt voor je bericht. We nemen zo snel mogelijk contact op.",
      errorMessage: "Er is een fout opgetreden. Probeer het opnieuw.",
    },
    guide: {
      title: "Installatie Gids",
      subtitle:
        "Binnen enkele minuten aan de slag. Volg onze stapsgewijze handleidingen om Plex Plus op elk apparaat in te stellen.",
    },
    legal: {
      privacyTitle: "Privacybeleid",
      termsTitle: "Algemene Voorwaarden",
      refundTitle: "Restitutiebeleid",
    },
  },
  pt: {
    nav: {
      home: "Início",
      sports: "Desporto",
      movies: "Filmes",
      pricing: "Preços",
      howToOrder: "Como encomendar",
      guide: "Guia de Instalação",
      contact: "Contacto",
    },
    footer: {
      quickLinks: "Links Rápidos",
      legal: "Info Legal",
      home: "Início",
      pricing: "Preços",
      guide: "Guia de Instalação",
      contact: "Contacto",
      terms: "Termos e Condições",
      privacy: "Política de Privacidade",
      refund: "Política de Reembolso",
      desc: "Serviço de Assinatura IPTV Premium.",
      copyright: "© 2025 Plex Plus. Todos os direitos reservados.",
    },
    contact: {
      title: "Entre em Contacto",
      intro:
        "Tem dúvidas ou precisa de ajuda? A nossa dedicada equipa de suporte está disponível 24/7 para si.",
      fastResponse: "Resposta Rápida",
      fastResponseText:
        "Esforçamo-nos por responder a todas as solicitações dentro de 1-2 horas. Verifique a sua pasta de Spam se não vir uma resposta.",
      installationGuides: "Guias de Instalação",
      installationGuidesIntro: "Precisa de ajuda com a instalação? Consulte os nossos detalhados ",
      installationGuidesOutro: " passo a passo.",
      faq: "FAQ",
      faqIntro: "Encontre respostas a perguntas frequentes sobre canais, falhas e mais na nossa ",
      faqLinkText: "secção FAQ",
      faqOutro: ".",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Mensagem",
      namePlaceholder: "O seu nome",
      emailPlaceholder: "O seu email",
      messagePlaceholder: "Como podemos ajudar?",
      sendButton: "Enviar mensagem",
      sending: "A enviar...",
      successMessage: "Obrigado pela sua mensagem. Responderemos em breve.",
      errorMessage: "Ocorreu um erro. Por favor, tente novamente.",
    },
    guide: {
      title: "Guia de Instalação",
      subtitle:
        "A funcionar em minutos. Siga os nossos tutoriais passo a passo para configurar o Plex Plus em qualquer dispositivo.",
    },
    legal: {
      privacyTitle: "Política de Privacidade",
      termsTitle: "Termos e Condições",
      refundTitle: "Política de Reembolso",
    },
  },
};
