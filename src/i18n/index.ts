import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      features: 'Features',
      testimonials: 'Testimonials',
      contact: 'Contact',
      
      // Hero Section
      heroTitle: 'The Crime Scene Photography App',
      heroDigital: 'Digital',
      heroFast: 'Fast',
      heroEfficient: 'Efficient',
      tryNow: 'Try Now',
      pdfBrochure: 'PDF Brochure',
      developedWith: 'Developed in collaboration with',
      
      // About Section
      aboutTitle: 'About SPUFO',
      aboutDescription: 'The SPUFO app is a forensic iOS solution that simplifies and streamlines the collection of dactyloscopic traces at crime scenes.',
      aboutPoint1: 'Replaces traditional DSLR cameras and gelatin films with mobile technology.',
      aboutPoint2: 'Captures traces on-site, scaled 1:1, and saved in 1000 dpi resolution.',
      aboutPoint3: 'Allows direct numbering, cropping, and preparation for AFIS searches.',
      
      // Advantages Section
      advantagesTitle: 'Smartphone Advantages',
      advantage1: 'Improved Efficiency',
      advantage2: 'Enhanced Security',
      advantage3: 'Better Performance',

      // Testimonials Section
      testimonialsTitle: 'What Our Users Say',
      testimonialText: 'SPUFO has completely transformed how I use my smartphone. The features are incredible!',

      // Features Section
      featuresTitle: 'Key Advantages',
      feature1: {
        title: 'Mobile Fingerprint Capture',
        description: 'Effortlessly collect high-quality fingerprints at crime scenes using the Spufo App on your iOS device. Designed for both forensic technicians and front-line officers.',
        link: 'Learn how it works'
      },
      feature2: {
        title: 'Streamlined Evidence Collection',
        description: 'Replace bulky DSLR cameras and gelatine foils with our efficient mobile solution. Spufo App accelerates your evidence gathering process, saving time and effort.',
        link: 'Discover the benefits'
      },
      feature3: {
        title: 'Optimal Resolution Imaging',
        description: 'Automatically capture 1:1 scaled photographs at 1000 dpi resolution. Ensure every fingerprint is recorded with the highest quality for accurate analysis.',
        link: 'See the technical details'
      },
      feature4: {
        title: 'Proven in the Field',
        description: 'Developed in collaboration with Forensic Science Zurich, SPUFO is actively used in real-world scenarios. Our app has significantly increased the number of fingerprints captured, demonstrating its effectiveness and reliability in forensic investigations.',
        link: 'Read success stories'
      },

      // Smartphone Advantages Section
      smartphoneTitle: 'Redefining Evidence Capture',
      advantages: {
        costEffective: {
          title: 'Cost-effective',
          description: 'Leverage existing smartphone technology to reduce equipment costs significantly.'
        },
        efficient: {
          title: 'Efficient',
          description: 'Streamline the evidence collection process, saving valuable time at crime scenes.'
        },
        easeOfUse: {
          title: 'Ease of use',
          description: 'Intuitive interface familiar to smartphone users, minimizing training requirements.'
        },
        mobile: {
          title: 'Mobile & Accessible',
          description: 'Compact and portable, allowing investigators to reach any spot on a crime scene with ease.'
        },
        camera: {
          title: 'Reliable camera quality',
          description: 'High-resolution smartphone cameras capture detailed evidence with precision.'
        },
        processing: {
          title: 'On-device processing',
          description: 'Powerful smartphone processors enable real-time analysis and evidence preparation.'
        }
      },

      // Contact Section
      contactTitle: 'Get in Touch',
      contactSubtitle: 'Have a question or want to learn more? We\'d love to hear from you.',
      email: 'Email',
      location: 'Zurich, Switzerland',
      name: 'Name',
      emailAddress: 'Email Address',
      company: 'Company/Organisation',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      required: '*',
      sendMessage: 'Send Message',

      // Testimonial Section
      testimonialTitle: 'Testimonial',
      testimonialQuote: '"The example of SPUFO shows how significant new technologies are for forensic science." ... "The app ensures significantly more efficiency and, above all, more traces submitted."',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Head of IT at the Forensic Institute Zurich',

      // Footer Section
      footerAdress: 'Adress',
      footerContact: 'Contact',
      footerSocials: 'Socials',
      footerAllRightsReserved: 'Twojo Software GmbH. All rights reserved.',
      footerPrivacyStatement: 'Privacy Statement',
      footerPublisher: 'Publisher',

      // Impressum Section
      impressum: {
        publisher: 'Publisher',
        operatedBy: 'This website is operated by:',
        companyName: 'Twojo Software GmbH',
        addressLine1: 'c/o Hochschule Luzern - Informatik',
        addressLine2: 'Smart-up Campus Zug-Rotkreuz',
        street: 'Suurstoffi 1',
        cityCode: '6343 Rotkreuz',
        email: 'E-Mail',
        commercialRegister: 'Commercial Register'
      }
    }
  },
  de: {
    translation: {
      // Navigation
      home: 'Startseite',
      about: 'Über uns',
      features: 'Funktionen',
      testimonials: 'Referenzen',
      contact: 'Kontakt',
      
      // Hero Section
      heroTitle: 'Die Tatortfotografie-App',
      heroDigital: 'Digital',
      heroFast: 'Schnell',
      heroEfficient: 'Effizient',
      tryNow: 'Jetzt testen',
      pdfBrochure: 'PDF Broschüre',
      developedWith: 'Entwickelt in Zusammenarbeit mit',
      
      // About Section
      aboutTitle: 'Über SPUFO',
      aboutDescription: 'Die SPUFO-App ist eine forensische iOS-Lösung, die die Erfassung von daktyloskopischen Spuren am Tatort vereinfacht und optimiert.',
      aboutPoint1: 'Ersetzt traditionelle DSLR-Kameras und Gelatinefolien durch mobile Technologie.',
      aboutPoint2: 'Erfasst Spuren vor Ort, maßstabsgetreu 1:1 und in 1000 dpi Auflösung.',
      aboutPoint3: 'Ermöglicht direkte Nummerierung, Zuschnitt und Vorbereitung für AFIS-Suchen.',
      
      
      // Advantages Section
      advantagesTitle: 'Smartphone-Vorteile',
      advantage1: 'Verbesserte Effizienz',
      advantage2: 'Erhöhte Sicherheit',
      advantage3: 'Bessere Leistung',
      
      // Testimonials Section
      testimonialsTitle: 'Was unsere Nutzer sagen',
      testimonialText: 'SPUFO hat die Art und Weise, wie ich mein Smartphone nutze, komplett verändert. Die Funktionen sind unglaublich!',
      
      
      // Features Section
      featuresTitle: 'Hauptvorteile',
      feature1: {
        title: 'Mobile Fingerabdruckerfassung',
        description: 'Erfassen Sie mühelos hochwertige Fingerabdrücke am Tatort mit der Spufo App auf Ihrem iOS-Gerät. Entwickelt für forensische Techniker und Einsatzkräfte.',
        link: 'Erfahren Sie wie es funktioniert'
      },
      feature2: {
        title: 'Optimierte Beweisaufnahme',
        description: 'Ersetzen Sie schwere DSLR-Kameras und Gelatinefolien durch unsere effiziente mobile Lösung. Die Spufo App beschleunigt Ihren Beweisaufnahmeprozess und spart Zeit und Aufwand.',
        link: 'Entdecken Sie die Vorteile'
      },
      feature3: {
        title: 'Optimale Auflösungsbildgebung',
        description: 'Erfassen Sie automatisch 1:1 skalierte Fotografien in 1000 dpi Auflösung. Stellen Sie sicher, dass jeder Fingerabdruck in höchster Qualität für eine genaue Analyse aufgezeichnet wird.',
        link: 'Technische Details ansehen'
      },
      feature4: {
        title: 'Praxiserprobt',
        description: 'Entwickelt in Zusammenarbeit mit der Forensischen Wissenschaft Zürich, wird SPUFO aktiv in realen Szenarien eingesetzt. Unsere App hat die Anzahl der erfassten Fingerabdrücke deutlich erhöht und demonstriert ihre Effektivität und Zuverlässigkeit in forensischen Untersuchungen.',
        link: 'Erfolgsgeschichten lesen'
      },
      // Smartphone Advantages Section
      smartphoneTitle: 'Neudefinition der Beweisaufnahme',
      advantages: {
        costEffective: {
          title: 'Kostengünstig',
          description: 'Nutzen Sie vorhandene Smartphone-Technologie, um Ausrüstungskosten erheblich zu reduzieren.'
        },
        efficient: {
          title: 'Effizient',
          description: 'Optimieren Sie den Beweisaufnahmeprozess und sparen Sie wertvolle Zeit am Tatort.'
        },
        easeOfUse: {
          title: 'Einfache Bedienung',
          description: 'Intuitive Benutzeroberfläche, die Smartphone-Nutzern vertraut ist und den Schulungsbedarf minimiert.'
        },
        mobile: {
          title: 'Mobil & Zugänglich',
          description: 'Kompakt und tragbar, ermöglicht Ermittlern einfachen Zugang zu jedem Punkt am Tatort.'
        },
        camera: {
          title: 'Zuverlässige Kameraqualität',
          description: 'Hochauflösende Smartphone-Kameras erfassen Beweise präzise und detailliert.'
        },
        processing: {
          title: 'Verarbeitung auf dem Gerät',
          description: 'Leistungsstarke Smartphone-Prozessoren ermöglichen Echtzeitanalyse und Beweisaufbereitung.'
        }
      },

      // Contact Section
      contactTitle: 'Kontaktieren Sie uns',
      contactSubtitle: 'Haben Sie eine Frage oder möchten Sie mehr erfahren? Wir freuen uns von Ihnen zu hören.',
      email: 'E-Mail',
      location: 'Zürich, Schweiz',
      name: 'Name',
      emailAddress: 'E-Mail-Adresse',
      company: 'Firma/Organisation',
      phone: 'Telefonnummer',
      subject: 'Betreff',
      message: 'Nachricht',
      required: '*',
      sendMessage: 'Nachricht senden',

      // Testimonial Section
      testimonialTitle: 'Testimonial',
      testimonialQuote: '«Das Beispiel SPUFO zeigt auf, wie bedeutsam neue Technologien auch für die Kriminaltechnik sind.» ... «Die App sorgt für deutlich mehr Effizienz und vor allem mehr eingelieferte Spuren.»',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Leiter Informatik beim Forensischen Institut Zürich',

      // Footer Section
      footerAdress: 'Adresse',
      footerContact: 'Kontakt',
      footerSocials: 'Soziale Netzwerke',
      footerAllRightsReserved: 'Twojo Software GmbH. All Rechte vorbehalten.',
      footerPrivacyStatement: 'Datenschutzerklärung',
      footerPublisher: 'Herausgeber',

      // Impressum Section
      impressum: {
        publisher: 'Herausgeber',
        operatedBy: 'Diese Webseite wird betrieben durch',
        companyName: 'Twojo Software GmbH',
        addressLine1: 'c/o Hochschule Luzern - Informatik',
        addressLine2: 'Smart-up Campus Zug-Rotkreuz',
        street: 'Suurstoffi 1',
        cityCode: '6343 Rotkreuz',
        email: 'E-Mail',
        commercialRegister: 'Handelsregister-Nr'
      }
    }
  },
  it: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'Chi Siamo',
      features: 'Funzionalità',
      testimonials: 'Testimonianze',
      contact: 'Contatti',
      
      // Hero Section
      heroTitle: "L'App Forense Fotografica",
      heroDigital: 'Digitale',
      heroFast: 'Veloce',
      heroEfficient: 'Efficiente',
      tryNow: 'Prova Ora',
      pdfBrochure: 'Brochure PDF',
      developedWith: 'Sviluppato in collaborazione con',
      
      // About Section
      aboutTitle: 'Chi è SPUFO',
      aboutDescription: "L'app SPUFO è una soluzione forense iOS che semplifica e ottimizza la raccolta di tracce dattiloscopiche sulla scena del crimine.",
      aboutPoint1: 'Sostituisce le tradizionali fotocamere DSLR e le pellicole di gelatina con tecnologia mobile.',
      aboutPoint2: 'Cattura tracce sul posto, in scala 1:1 e salvate in risoluzione 1000 dpi.',
      aboutPoint3: 'Permette numerazione diretta, ritaglio e preparazione per ricerche AFIS.',
      
      // Advantages Section
      advantagesTitle: 'Vantaggi Smartphone',
      advantage1: 'Efficienza Migliorata',
      advantage2: 'Sicurezza Avanzata',
      advantage3: 'Prestazioni Migliori',

      // Testimonials Section
      testimonialsTitle: 'Cosa Dicono i Nostri Utenti',
      testimonialText: 'SPUFO ha completamente trasformato il modo in cui uso il mio smartphone. Le funzionalità sono incredibili!',
      // Features Section
      featuresTitle: 'Vantaggi Principali',
      feature1: {
        title: 'Acquisizione Mobile delle Impronte Digitali',
        description: 'Raccogli facilmente impronte digitali di alta qualità sulla scena del crimine utilizzando l\'app Spufo sul tuo dispositivo iOS. Progettata per tecnici forensi e agenti di prima linea.',
        link: 'Scopri come funziona'
      },
      feature2: {
        title: 'Raccolta Prove Ottimizzata',
        description: 'Sostituisci le ingombranti fotocamere DSLR e i fogli di gelatina con la nostra efficiente soluzione mobile. L\'app Spufo accelera il processo di raccolta delle prove, risparmiando tempo e fatica.',
        link: 'Scopri i vantaggi'
      },
      feature3: {
        title: 'Imaging a Risoluzione Ottimale',
        description: 'Cattura automaticamente fotografie in scala 1:1 a risoluzione 1000 dpi. Assicura che ogni impronta digitale sia registrata con la massima qualità per un\'analisi accurata.',
        link: 'Vedi i dettagli tecnici'
      },
      feature4: {
        title: 'Provato sul Campo',
        description: 'Sviluppato in collaborazione con Forensic Science Zurich, SPUFO è attivamente utilizzato in scenari reali. La nostra app ha aumentato significativamente il numero di impronte digitali catturate, dimostrando la sua efficacia e affidabilità nelle indagini forensi.',
        link: 'Leggi le storie di successo'
      },

      // Smartphone Advantages Section
      smartphoneTitle: 'Ridefinire la Raccolta delle Prove',
      advantages: {
        costEffective: {
          title: 'Conveniente',
          description: 'Sfrutta la tecnologia degli smartphone esistenti per ridurre significativamente i costi delle attrezzature.'
        },
        efficient: {
          title: 'Efficiente',
          description: 'Ottimizza il processo di raccolta delle prove, risparmiando tempo prezioso sulla scena del crimine.'
        },
        easeOfUse: {
          title: 'Facilità d\'uso',
          description: 'Interfaccia intuitiva familiare agli utenti di smartphone, minimizzando le esigenze di formazione.'
        },
        mobile: {
          title: 'Mobile & Accessibile',
          description: 'Compatto e portatile, permette agli investigatori di raggiungere facilmente qualsiasi punto sulla scena del crimine.'
        },
        camera: {
          title: 'Qualità fotografica affidabile',
          description: 'Fotocamere smartphone ad alta risoluzione catturano prove dettagliate con precisione.'
        },
        processing: {
          title: 'Elaborazione sul dispositivo',
          description: 'Potenti processori smartphone consentono analisi in tempo reale e preparazione delle prove.'
        }
      },

      // Contact Section
      contactTitle: 'Contattaci',
      contactSubtitle: 'Hai una domanda o vuoi saperne di più? Ci piacerebbe sentirti.',
      email: 'Email',
      location: 'Zurigo, Svizzera',
      name: 'Nome',
      emailAddress: 'Indirizzo Email',
      company: 'Azienda/Organizzazione',
      phone: 'Numero di Telefono',
      subject: 'Oggetto',
      message: 'Messaggio',
      required: '*',
      sendMessage: 'Invia Messaggio',

      // Testimonial Section
      testimonialTitle: 'Testimonianza',
      testimonialQuote: '"L\'esempio di SPUFO dimostra quanto siano significative le nuove tecnologie per la scienza forense." ... "L\'app garantisce una maggiore efficienza e, soprattutto, più tracce presentate."',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Responsabile IT presso l\'Istituto Forense di Zurigo',

      // Footer Section
      footerAdress: 'Indirizzo',
      footerContact: 'Contatto',
      footerSocials: 'Social Media',
      footerAllRightsReserved: 'Twojo Software GmbH. Tutti i diritti riservati.',
      footerPrivacyStatement: 'Informativa sulla Privacy',
      footerPublisher: 'Editore',

      // Impressum Section
      impressum: {
        publisher: 'Editore',
        operatedBy: 'Questo sito web è gestito da:',
        companyName: 'Twojo Software GmbH',
        addressLine1: 'c/o Hochschule Luzern - Informatik',
        addressLine2: 'Smart-up Campus Zug-Rotkreuz',
        street: 'Suurstoffi 1',
        cityCode: '6343 Rotkreuz',
        email: 'E-Mail',
        commercialRegister: 'Registro delle imprese'
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      home: 'Accueil',
      about: 'À Propos',
      features: 'Fonctionnalités',
      testimonials: 'Témoignages',
      contact: 'Contact',
      
      // Hero Section
      heroTitle: 'L\'App Photo pour Scènes de Crime',
      heroDigital: 'Numérique',
      heroFast: 'Rapide',
      heroEfficient: 'Efficace',
      tryNow: 'Essayer',
      pdfBrochure: 'Brochure PDF',
      developedWith: 'Développé en collaboration avec',
      
      // About Section
      aboutTitle: 'À Propos de SPUFO',
      aboutDescription: 'L\'application SPUFO est une solution iOS médico-légale qui simplifie et rationalise la collecte des traces dactyloscopiques sur les scènes de crime.',
      aboutPoint1: 'Remplace les appareils photo DSLR traditionnels et les films de gélatine par la technologie mobile.',
      aboutPoint2: 'Capture les traces sur place, à l\'échelle 1:1, et sauvegardées en résolution 1000 dpi.',
      aboutPoint3: 'Permet la numérotation directe, le recadrage et la préparation pour les recherches AFIS.',     
      
      // Advantages Section
      advantagesTitle: 'Avantages Smartphone',
      advantage1: 'Efficacité Améliorée',
      advantage2: 'Sécurité Renforcée',
      advantage3: 'Meilleures Performances',
      
      // Testimonials Section
      testimonialsTitle: 'Ce Que Disent Nos Utilisateurs',
      testimonialText: 'SPUFO a complètement transformé la façon dont j\'utilise mon smartphone. Les fonctionnalités sont incroyables !',
      
      // Features Section
      featuresTitle: 'Avantages Clés',
      feature1: {
        title: 'Capture Mobile d\'Empreintes Digitales',
        description: 'Collectez facilement des empreintes digitales de haute qualité sur les scènes de crime à l\'aide de l\'application Spufo sur votre appareil iOS. Conçue pour les techniciens médico-légaux et les agents de première ligne.',
        link: 'Découvrez comment ça marche'
      },
      feature2: {
        title: 'Collection de Preuves Optimisée',
        description: 'Remplacez les appareils photo DSLR encombrants et les feuilles de gélatine par notre solution mobile efficace. L\'application Spufo accélère votre processus de collecte de preuves, économisant temps et effort.',
        link: 'Découvrez les avantages'
      },
      feature3: {
        title: 'Imagerie à Résolution Optimale',
        description: 'Capturez automatiquement des photographies à l\'échelle 1:1 en résolution 1000 dpi. Assurez-vous que chaque empreinte digitale est enregistrée avec la plus haute qualité pour une analyse précise.',
        link: 'Voir les détails techniques'
      },
      feature4: {
        title: 'Prouvé sur le Terrain',
        description: 'Développé en collaboration avec Forensic Science Zurich, SPUFO est activement utilisé dans des scénarios réels. Notre application a considérablement augmenté le nombre d\'empreintes digitales capturées, démontrant son efficacité et sa fiabilité dans les enquêtes médico-légales.',
        link: 'Lire les histoires de réussite'
      },

      // Smartphone Advantages Section
      smartphoneTitle: 'Redéfinir la Collecte des Preuves',
      advantages: {
        costEffective: {
          title: 'Rentable',
          description: 'Utilisez la technologie des smartphones existants pour réduire significativement les coûts d\'équipement.'
        },
        efficient: {
          title: 'Efficace',
          description: 'Optimisez le processus de collecte des preuves, gagnant un temps précieux sur les scènes de crime.'
        },
        easeOfUse: {
          title: 'Facilité d\'utilisation',
          description: 'Interface intuitive familière aux utilisateurs de smartphones, minimisant les besoins en formation.'
        },
        mobile: {
          title: 'Mobile & Accessible',
          description: 'Compact et portable, permettant aux enquêteurs d\'atteindre facilement n\'importe quel point sur une scène de crime.'
        },
        camera: {
          title: 'Qualité photo fiable',
          description: 'Les caméras smartphone haute résolution capturent des preuves détaillées avec précision.'
        },
        processing: {
          title: 'Traitement sur l\'appareil',
          description: 'Les puissants processeurs des smartphones permettent l\'analyse en temps réel et la préparation des preuves.'
        }
      },

      // Contact Section
      contactTitle: 'Contactez-nous',
      contactSubtitle: 'Vous avez une question ou vous souhaitez en savoir plus ? Nous aimerions vous entendre.',
      email: 'Email',
      location: 'Zurich, Suisse',
      name: 'Nom',
      emailAddress: 'Adresse Email',
      company: 'Entreprise/Organisation',
      phone: 'Numéro de Téléphone',
      subject: 'Sujet',
      message: 'Message',
      required: '*',
      sendMessage: 'Envoyer le Message',

      // Testimonial Section
      testimonialTitle: 'Témoignage',
      testimonialQuote: '"L\'exemple de SPUFO montre l\'importance des nouvelles technologies pour la science médico-légale." ... "L\'application assure une efficacité nettement supérieure et, surtout, plus de traces soumises."',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Chef de l\'informatique à l\'Institut médico-légal de Zurich',

      // Footer Section
      footerAdress: 'Adresse',
      footerContact: 'Contact',
      footerSocials: 'Réseaux sociaux',
      footerAllRightsReserved: 'Twojo Software GmbH. Tous droits réservés.',
      footerPrivacyStatement: 'Politique de confidentialité',
      footerPublisher: 'Éditeur',

      // Impressum Section
      impressum: {
        publisher: 'Éditeur',
        operatedBy: 'Ce site web est exploité par :',
        companyName: 'Twojo Software GmbH',
        addressLine1: 'c/o Haute école de Lucerne - Informatique',
        addressLine2: 'Smart-up Campus Zoug-Rotkreuz',
        street: 'Suurstoffi 1',
        cityCode: '6343 Rotkreuz',
        email: 'E-mail',
        commercialRegister: 'Registre du commerce'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // Set German as default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
