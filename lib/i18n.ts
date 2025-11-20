export type Language = 'en' | 'fr';

export interface Translations {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  benefits: {
    title: string;
    items: string[];
  };
  examples: {
    title: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  waitlist: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    button: string;
  };
  footer: {
    privacy: string;
    terms: string;
    betaNote: string;
  };
  languageToggle: {
    en: string;
    fr: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      headline: 'One personal boost every morning.',
      subheadline: 'Receive a short, personal message + abstract background — bilingual (FR/EN) — save or share in one tap.',
      cta: 'Get early access',
    },
    benefits: {
      title: 'Why DailySpark?',
      items: [
        'Personal tone – messages written just for you.',
        'Bilingual FR / EN – morning boost in your language.',
        'Save or share in one tap – make it yours or spread the word.',
      ],
    },
    examples: {
      title: 'See it in action',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'When will I start receiving messages?',
          answer: 'We\'re launching the beta soon! Early access members will receive their first message within 1-2 weeks of sign-up.',
        },
        {
          question: 'Can I change my language later?',
          answer: 'Yes, absolutely! You can switch between English and French at any time in your settings.',
        },
        {
          question: 'Is it free during beta?',
          answer: 'Yes, DailySpark is completely free during the beta period. We want to gather feedback and make it perfect for you.',
        },
        {
          question: 'How many messages per week?',
          answer: 'You\'ll receive one personalized message every morning.',
        },
        {
          question: 'Can I unsubscribe anytime?',
          answer: 'Of course! You can unsubscribe at any time with a single click. No questions asked.',
        },
      ],
    },
    waitlist: {
      title: 'Join the waitlist',
      subtitle: 'Enter your email to join the waitlist and get early access.',
      emailPlaceholder: 'Enter your email',
      button: 'Get early access',
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      betaNote: 'Free during beta – limited spots',
    },
    languageToggle: {
      en: 'EN',
      fr: 'FR',
    },
  },
  fr: {
    hero: {
      headline: 'Un boost personnel chaque matin.',
      subheadline: 'Recevez un court message personnel + arrière-plan abstrait — bilingue (FR/EN) — sauvegardez ou partagez en un tap.',
      cta: 'Obtenir un accès anticipé',
    },
    benefits: {
      title: 'Pourquoi DailySpark?',
      items: [
        'Ton personnel – messages écrits juste pour vous.',
        'Bilingue FR / EN – boost matinal dans votre langue.',
        'Sauvegarder ou partager en un tap – faites-en le vôtre ou faites passer le mot.',
      ],
    },
    examples: {
      title: 'Voir en action',
    },
    faq: {
      title: 'Questions Fréquemment Posées',
      items: [
        {
          question: 'Quand vais-je commencer à recevoir des messages?',
          answer: 'Nous lançons la bêta bientôt! Les membres avec accès anticipé recevront leur premier message dans 1-2 semaines après l\'inscription.',
        },
        {
          question: 'Puis-je changer ma langue plus tard?',
          answer: 'Oui, absolument! Vous pouvez basculer entre l\'anglais et le français à tout moment dans vos paramètres.',
        },
        {
          question: 'Est-ce gratuit pendant la bêta?',
          answer: 'Oui, DailySpark est complètement gratuit pendant la période bêta. Nous voulons recueillir des commentaires et le rendre parfait pour vous.',
        },
        {
          question: 'Combien de messages par semaine?',
          answer: 'Vous recevrez un message personnalisé chaque matin.',
        },
        {
          question: 'Puis-je me désabonner à tout moment?',
          answer: 'Bien sûr! Vous pouvez vous désabonner à tout moment en un seul clic. Aucune question posée.',
        },
      ],
    },
    waitlist: {
      title: 'Rejoignez la liste d\'attente',
      subtitle: 'Entrez votre email pour rejoindre la liste d\'attente et obtenir un accès anticipé.',
      emailPlaceholder: 'Entrez votre email',
      button: 'Obtenir un accès anticipé',
    },
    footer: {
      privacy: 'Confidentialité',
      terms: 'Conditions',
      betaNote: 'Gratuit pendant la bêta – places limitées',
    },
    languageToggle: {
      en: 'EN',
      fr: 'FR',
    },
  },
};

