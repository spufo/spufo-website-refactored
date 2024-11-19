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

      //Solutions
      solutions: {
        mobile: {
          title: "Mobile Development",
          description: "Apps that work on both iOS and Android."
        },
        business: {
          title: "Business Application",
          description: "Applications tailored for your business."
        },
        interactive: {
          title: "Interactive Experiences",
          description: "Gamify your advertisement."
        }
      },
      common: {
        learnMore: "Learn more"
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
      location: 'Zug, Switzerland',
      name: 'Name',
      emailAddress: 'Email Address',
      company: 'Company/Organisation',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      required: '*',
      sendMessage: 'Send Message',
      formSuccessMessage: 'Thank you for contacting us!',
      formSuccessSubtitle: 'Your message has been received, and we will get back to you shortly.',

      // Testimonial Section
      testimonialTitle: 'Testimonial',
      testimonialQuote: '"The example of SPUFO shows how significant new technologies are for forensic science." ... "The app ensures significantly more efficiency and, above all, more traces submitted."',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Head of IT at the Forensic Institute Zurich',

      evidence: {
        title: "Transform Your Evidence Collection",
        subtitle: "Experience the evolution from complex equipment to streamlined efficiency",
        traditional: {
          label: "TRADITIONAL METHOD",
          title: "Complex Equipment Setup",
          subtitle: "Multiple pieces of specialized equipment required",
          dslr: {
            name: "DSLR Camera",
            negative1: "Expensive equipment (2000+ CHF)",
            negative2: "Requires technical training"
          },
          flash: {
            name: "Flash System",
            negative1: "Complex setup process",
            negative2: "Additional cost"
          },
          tripod: {
            name: "Tripod",
            negative1: "Bulky and cumbersome",
            negative2: "Time-consuming setup"
          },
          gelatin: {
            name: "Gelatin Film",
            negative1: "Time-consuming application",
            negative2: "Risk of contamination"
          },
          timeImpact: {
            title: "Time Impact",
            description: "Significant setup time required for each scene"
          }
        },
        spufo: {
          label: "SPUFO SOLUTION",
          title: "Smart Integration",
          subtitle: "Using the device you already carry",
          advantage1: "Always in your pocket - no extra equipment to carry",
          advantage2: "Simple and intuitive to use",
          advantage3: "Built-in image stabilization",
          advantage4: "Integrated flash for most lighting situations",
          optional: {
            title: "Optional: External Flashlight",
            description: "Additional illumination when needed"
          },
          summary: {
            title: "Ready When You Need It",
            description: "No setup required"
          }
        },
        caseInfo: {
          title: "Intelligent Case Information Storage",
          description: "Users can add and securely store comprehensive case information for every investigation within the SPUFO app",
          details: {
            title: "Case Details",
            classification: {
              title: "Case Classification",
              description: "Type of incident (fraud, theft, etc.)"
            },
            subject: {
              title: "Subject Information",
              description: "Relevant person details"
            }
          },
          location: {
            title: "Location Details",
            address: {
              title: "Address Information",
              description: "Street address and city details"
            },
            specific: {
              title: "Specific Location or other Notes",
              description: "Building, floor, and office details"
            }
          },
          time: {
            title: "Time Information",
            date: {
              title: "Date Recording",
              description: "Date capture for each case"
            },
            stamps: {
              title: "Time Stamps",
              description: "Precise time tracking"
            }
          }
        }
      },
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
      },

      twojo: {
        hero: {
          title: 'Developed in Switzerland.',
          subTitle: 'We\'re a dedicated team crafting solutions to help your business thrive.'
        },
        partner: {
          title: 'Partnered with'
        },
        solutions: {
          title: 'Our Solutions',
          about: "Experience",
          subTitle: 'We offer flexible solutions for your business',
          mobileDev: {
            title: 'Mobile Development',
            description: 'Apps that work on both iOS and Android.',
            link: 'Learn more'
          },
          businessApp: {
            title: 'Business Application',
            description: 'Applications tailored for your business.',
            link: 'Learn more',
          },
          interactiveExp: {
            title: 'Interactive Experiences',
            description: 'Gamify your advertisement.',
            link: 'Learn more',
          }
        },
        highlightedProduct: {
          title: 'Highlighted Product',
          product: {
            title: 'SPUFO',
            subTitle: 'The Crime Scene Photography App',
            slogan: 'Digital - Fast - Efficient',
            description: 'The SPUFO app is a forensic iOS solution that simplifies and streamlines the collection of dactyloscopic traces at crime scenes.',
            bulletPoints: {
              first: 'Replaces traditional DSLR cameras and gelatin sheets with mobile technology.',
              second: 'Captures traces on-site, accurately scaled 1:1 and in 1000 dpi resolution.',
              third: 'Allows direct numbering, cropping, and preparation for AFIS searches.'
            },
            button: 'Learn more'
          }
        },
        about: {
          teamTitle: 'Meet Our Team',
          teamSubtitle: 'Passionate Developers Creating Innovative Solutions',
          description: 'We are a team of passionate software engineers who met during our apprenticeship at BBBaden School. While pursuing our individual careers in technology, we\'ve joined forces to create innovative solutions through Twojo Software.',
          teamImageAlt: 'Twojo Software Team',
          festim: {
            name: 'Festim Jetishi',
            role: 'Software Engineer',
            education: 'FHNW Windisch/Brugg',
            description: 'After completing his apprenticeship as an Informatiker at BBBaden School, Festim pursued his studies in Informatik at FHNW. His passion for software development and innovative solutions drives our technical excellence forward.',
            linkedin: 'https://www.linkedin.com/in/festim-jetishi-b8ba82334/',
            email: 'mailto:festim.jetishi@twojo.ch'
          },
          josip: {
            name: 'Josip Corkovic',
            role: 'Cybersecurity Specialist',
            education: 'HSLU Rotkreuz',
            description: 'Following his apprenticeship at BBBaden School, Josip specialized in Cybersecurity at HSLU. His expertise in security and system architecture ensures our solutions are both innovative and secure.',
            linkedin: 'https://www.linkedin.com/company/twojo/',
            email: 'mailto:josip.corkovic@twojo.ch'
          },
          jordan: {
            name: 'Jordan Suter',
            role: 'Software Engineer',
            education: 'HSLU Rotkreuz',
            description: 'Jordan completed his apprenticeship at BBBaden School and continued his education in Informatik at HSLU. His technical knowledge and problem-solving skills contribute significantly to our development process.',
            linkedin: 'https://www.linkedin.com/in/jordan-suter/',
            email: 'mailto:jordan.suter@twojo.ch'
          },
          closingStatement: 'While we each maintain our careers as software engineers at various companies, Twojo Software represents our shared vision to create impactful solutions. Our diverse professional experiences and complementary skill sets allow us to approach challenges from multiple perspectives, resulting in more robust and innovative solutions.'
        },
        blog: {
          title: 'Blog',
          description: 'Stay up to date with the latest news, updates, and insights from Twojo Software GmbH. Discover our innovative solutions and technology developments.',
          featuredArticle: {
            tag: 'News | October 8, 2024',
            title: 'New Crime Scene App Secures Fingerprints for Police',
            content: 'The Zurich Forensic Institute fully relies on SPUFO. The innovative app revolutionizes forensic work and makes it more efficient than ever.',
            link: 'Learn More'
          },
          olderArticles: {
            article1: {
              tag: 'Update | August 22, 2024',
              title: 'Enhanced Logging and User Experience',
              content: 'The latest SPUFO update brings powerful logging functions and UI improvements. Users can now track app activities with local logs and send error reports via email when needed.',
              link: 'Learn More'
            },
            article2: {
              tag: 'Update | February 15, 2024',
              title: 'Advanced Image Processing and Export Features',
              content: 'SPUFO now offers advanced image processing functions with adjustable contrast, brightness, and free rotation. Exported images contain important metadata such as GPS coordinates and timestamps.',
              link: 'Learn More'
            },
            article3: {
              tag: 'Update | November 19, 2023',
              title: 'Camera Improvements and Multilingual Support',
              content: 'A new macro mode simplifies camera operation. The app now supports German, English, and French and offers improved data management with automatic case cleanup.',
              link: 'Learn More'
            }
          }
        }
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
      aboutPoint2: 'Erfasst Spuren vor Ort, massstabsgetreu 1:1 und in 1000 dpi Auflösung.',
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
      location: 'Zug, Schweiz',
      name: 'Name',
      emailAddress: 'E-Mail-Adresse',
      company: 'Firma/Organisation',
      phone: 'Telefonnummer',
      subject: 'Betreff',
      message: 'Nachricht',
      required: '*',
      sendMessage: 'Nachricht senden',
      formSuccessMessage: 'Vielen Dank für Ihre Kontaktaufnahme!',
      formSuccessSubtitle: 'Ihre Nachricht ist bei uns eingegangen, und wir melden uns in Kürze bei Ihnen.',

      // Testimonial Section
      testimonialTitle: 'Testimonial',
      testimonialQuote: '«Das Beispiel SPUFO zeigt auf, wie bedeutsam neue Technologien auch für die Kriminaltechnik sind.» ... «Die App sorgt für deutlich mehr Effizienz und vor allem mehr eingelieferte Spuren.»',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Leiter Informatik beim Forensischen Institut Zürich',

      evidence: {
        title: "Verändern Sie Ihre Beweissammlung",
        subtitle: "Erleben Sie die Evolution von komplexer Ausrüstung zu optimierter Effizienz",
        traditional: {
          label: "TRADITIONELLE METHODEN",
          title: "Komplexe Geräteeinrichtung",
          subtitle: "Mehrere spezialisierte Geräte erforderlich",
          dslr: {
            name: "DSLR-Kamera",
            negative1: "Teure Ausrüstung (2000 CHF oder mehr)",
            negative2: "Technische Ausbildung erforderlich"
          },
          flash: {
            name: "Blitzsystem",
            negative1: "Komplexer Einrichtungsprozess",
            negative2: "Zusätzliche Kosten"
          },
          tripod: {
            name: "Stativ",
            negative1: "Sperrig und unhandlich",
            negative2: "Zeitaufwendige Einrichtung"
          },
          gelatin: {
            name: "Gelatinefilm",
            negative1: "Zeitaufwendige Anwendung",
            negative2: "Risiko einer Verschmierung"
          },
          timeImpact: {
            title: "Zeitlicher Einfluss",
            description: "Signifikanter Einrichtungsaufwand für jeden Fall erforderlich"
          }
        },
        spufo: {
          label: "SPUFO-LÖSUNG",
          title: "Intelligente Integration",
          subtitle: "Verwendung des Geräts, das Sie bereits tragen",
          advantage1: "Immer in Ihrer Tasche - kein zusätzliches Equipment erforderlich",
          advantage2: "Einfach und intuitiv zu bedienen",
          advantage3: "Integrierte Bildstabilisierung",
          advantage4: "Integrierter Blitz für die meisten Lichtverhältnisse",
          optional: {
            title: "Optional: Taschenlampe",
            description: "Zusätzliche Beleuchtung bei Bedarf"
          },
          summary: {
            title: "Bereit, wenn Sie es brauchen",
            description: "Keine Einrichtung erforderlich"
          }
        },
        caseInfo: {
          title: "Speicherung von Fallinformationen",
          description: "Benutzer können vollständige Fallinformationen für jede Untersuchung sicher in der SPUFO-App hinzufügen und speichern",
          details: {
            title: "Falldetails",
            classification: {
              title: "Fallklassifikation",
              description: "Art des Vorfalls (Betrug, Diebstahl, etc.)"
            },
            subject: {
              title: "Informationen zur Person",
              description: "Relevante Personendetails"
            }
          },
          location: {
            title: "Standortdetails",
            address: {
              title: "Adressinformationen",
              description: "Strassenadresse und Stadtdetails"
            },
            specific: {
              title: "Spezieller Standort oder andere Hinweise",
              description: "Gebäude-, Etagen- und Büroraumdetails"
            }
          },
          time: {
            title: "Zeitangaben",
            date: {
              title: "Datenerfassung",
              description: "Datenerfassung für jeden Fall"
            },
            stamps: {
              title: "Zeitstempel",
              description: "Genaue Zeitverfolgung"
            }
          }
        }
      },


      // Footer Section
      footerAdress: 'Adresse',
      footerContact: 'Kontakt',
      footerSocials: 'Soziale Netzwerke',
      footerAllRightsReserved: 'Twojo Software GmbH. All Rechte vorbehalten.',
      footerPrivacyStatement: 'Datenschutzerklärung',
      footerPublisher: 'Impressum',

      // Impressum Section
      impressum: {
        publisher: 'Impressum',
        operatedBy: 'Diese Webseite wird betrieben durch',
        companyName: 'Twojo Software GmbH',
        addressLine1: 'c/o Hochschule Luzern - Informatik',
        addressLine2: 'Smart-up Campus Zug-Rotkreuz',
        street: 'Suurstoffi 1',
        cityCode: '6343 Rotkreuz',
        email: 'E-Mail',
        commercialRegister: 'Handelsregister-Nr'
      },

      twojo: {
        hero: {
          title: 'Entwickelt in der Schweiz.',
          subTitle: 'Wir sind ein engagiertes Team, das Lösungen entwickelt, um Ihrem Unternehmen zum Erfolg zu verhelfen.'
        },
        partner: {
          title: 'Partnerschaft mit'
        },
        solutions: {
          title: 'Unsere Lösungen',
          subTitle: 'Wir bieten flexible Lösungen für Ihr Unternehmen',
          mobileDev: {
            title: 'Mobile Entwicklung',
            description: 'Apps, die sowohl auf iOS als auch auf Android funktionieren.',
            link: 'Erfahren Sie mehr'
          },
          businessApp: {
            title: 'Business-Anwendung',
            description: 'Anwendungen massgeschneidert für Ihr Unternehmen.',
            link: 'Erfahren Sie mehr'
          },
          interactiveExp: {
            title: 'Interaktive Erlebnisse',
            description: 'Gamifizieren Sie Ihre Werbung.',
            link: 'Erfahren Sie mehr'
          }
        },
        highlightedProduct: {
          title: 'Hervorgehobenes Produkt',
          product: {
            title: 'SPUFO',
            subTitle: 'Die Tatort-Fotografie-App',
            slogan: 'Digital - Schnell - Effizient',
            description: 'Die SPUFO-App ist eine forensische iOS-Lösung, die das Sammeln daktyloskopischer Spuren am Tatort vereinfacht und optimiert.',
            bulletPoints: {
              first: 'Ersetzt herkömmliche DSLR-Kameras und Gelatinefolien durch mobile Technologie.',
              second: 'Erfasst Spuren vor Ort, massstabsgetreu 1:1 und in 1000 dpi Auflösung.',
              third: 'Ermöglicht direkte Nummerierung, Zuschneiden und Vorbereitung für AFIS-Suchen.'
            },
            button: 'Erfahren Sie mehr'
          }
        },
        about: {
          teamTitle: 'Treffen Sie Unser Team',
          teamSubtitle: 'Leidenschaftliche Entwickler, die innovative Lösungen schaffen',
          description: 'Wir sind ein Team leidenschaftlicher Softwareingenieure, die sich während ihrer Ausbildung an der BBBaden Schule kennengelernt haben. Während wir unsere individuellen Karrieren in der Technologie verfolgen, haben wir uns zusammengeschlossen, um durch Twojo Software innovative Lösungen zu schaffen.',
          teamImageAlt: 'Twojo Software Team',
          festim: {
            name: 'Festim Jetishi',
            role: 'Softwareingenieur',
            education: 'FHNW Windisch/Brugg',
            description: 'Nach seiner Ausbildung zum Informatiker an der BBBaden Schule setzte Festim sein Studium der Informatik an der FHNW fort. Seine Leidenschaft für Softwareentwicklung und innovative Lösungen treibt unsere technische Exzellenz voran.',
            linkedin: 'https://www.linkedin.com/in/festim-jetishi-b8ba82334/',
            email: 'mailto:festim.jetishi@twojo.ch'
          },
          josip: {
            name: 'Josip Corkovic',
            role: 'Cybersecurity-Spezialist',
            education: 'HSLU Rotkreuz',
            description: 'Nach seiner Ausbildung an der BBBaden Schule spezialisierte sich Josip an der HSLU auf Cybersicherheit. Seine Expertise in Sicherheit und Systemarchitektur stellt sicher, dass unsere Lösungen sowohl innovativ als auch sicher sind.',
            linkedin: 'https://www.linkedin.com/company/twojo/',
            email: 'mailto:josip.corkovic@twojo.ch'
          },
          jordan: {
            name: 'Jordan Suter',
            role: 'Softwareingenieur',
            education: 'HSLU Rotkreuz',
            description: 'Jordan absolvierte seine Ausbildung an der BBBaden Schule und setzte seine Ausbildung in Informatik an der HSLU fort. Sein technisches Wissen und seine Problemlösungsfähigkeiten tragen erheblich zu unserem Entwicklungsprozess bei.',
            linkedin: 'https://www.linkedin.com/in/jordan-suter/',
            email: 'mailto:jordan.suter@twojo.ch'
          },
          closingStatement: 'Während wir alle unsere Karrieren als Softwareingenieure in verschiedenen Unternehmen weiterführen, steht Twojo Software für unsere gemeinsame Vision, wirkungsvolle Lösungen zu schaffen. Unsere vielfältigen beruflichen Erfahrungen und komplementären Fähigkeiten ermöglichen es uns, Herausforderungen aus mehreren Perspektiven zu betrachten und so robustere und innovativere Lösungen zu schaffen.'
        },
        blog: {
          title: 'Blog',
          description: 'Bleiben Sie auf dem Laufenden über die neuesten Nachrichten, Updates und Einblicke von Twojo Software GmbH. Entdecken Sie unsere innovativen Lösungen und technologischen Entwicklungen.',
          featuredArticle: {
            tag: 'News | 8. Oktober 2024',
            title: 'Neue Tatort-App sichert Fingerabdrücke für die Polizei',
            content: 'Das Forensische Institut Zürich setzt voll auf SPUFO. Die innovative App revolutioniert die Spurensicherung und macht sie effizienter denn je.',
            link: 'Mehr erfahren'
          },
          olderArticles: {
            article1: {
              tag: 'Update | 22. August 2024',
              title: 'Enhanced Logging and User Experience',
              content: 'Das neueste SPUFO Update bringt leistungsstarke Logging-Funktionen und UI-Verbesserungen. Nutzer können nun App-Aktivitäten mit lokalen Logs verfolgen und bei Bedarf Fehlerberichte per E-Mail senden.',
              link: 'Mehr erfahren'
            },
            article2: {
              tag: 'Update | 15. Februar 2024',
              title: 'Advanced Image Processing and Export Features',
              content: 'SPUFO bietet nun erweiterte Bildverarbeitungsfunktionen mit einstellbarem Kontrast, Helligkeit und freier Rotation. Exportierte Bilder enthalten wichtige Metadaten wie GPS-Koordinaten und Zeitstempel.',
              link: 'Mehr erfahren'
            },
            article3: {
              tag: 'Update | 19. November 2023',
              title: 'Camera Improvements and Multilingual Support',
              content: 'Ein neuer Nahaufnahmemodus vereinfacht die Kamerabedienung. Die App unterstützt nun Deutsch, Englisch und Französisch und bietet verbesserte Datenverwaltung mit automatischer Fallbereinigung.',
              link: 'Mehr erfahren'
            }
          }
        }
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
      location: 'Zugo, Svizzera',
      name: 'Nome',
      emailAddress: 'Indirizzo Email',
      company: 'Azienda/Organizzazione',
      phone: 'Numero di Telefono',
      subject: 'Oggetto',
      message: 'Messaggio',
      required: '*',
      sendMessage: 'Invia Messaggio',
      formSuccessMessage: 'Grazie per averci contattato!',
      formSuccessSubtitle: 'Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.',

      // Testimonial Section
      testimonialTitle: 'Testimonianza',
      testimonialQuote: '"L\'esempio di SPUFO dimostra quanto siano significative le nuove tecnologie per la scienza forense." ... "L\'app garantisce una maggiore efficienza e, soprattutto, più tracce presentate."',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Responsabile IT presso l\'Istituto Forense di Zurigo',

      evidence: {
        title: "Trasforma la tua raccolta di prove",
        subtitle: "Vivi l'evoluzione da attrezzature complesse a un'efficienza semplificata",
        traditional: {
          label: "METODO TRADIZIONALE",
          title: "Impostazione di attrezzature complesse",
          subtitle: "Richiesta di più pezzi di attrezzature specializzate",
          dslr: {
            name: "Fotocamera DSLR",
            negative1: "Attrezzatura costosa (oltre 2000 CHF)",
            negative2: "Richiede formazione tecnica"
          },
          flash: {
            name: "Sistema di flash",
            negative1: "Processo di configurazione complesso",
            negative2: "Costo aggiuntivo"
          },
          tripod: {
            name: "Treppiede",
            negative1: "Ingombrante e pesante",
            negative2: "Impostazione che richiede tempo"
          },
          gelatin: {
            name: "Film di gelatina",
            negative1: "Applicazione che richiede tempo",
            negative2: "Rischio di contaminazione"
          },
          timeImpact: {
            title: "Impatto temporale",
            description: "Tempo di configurazione significativo richiesto per ogni scena"
          }
        },
        spufo: {
          label: "SOLUZIONE SPUFO",
          title: "Integrazione intelligente",
          subtitle: "Usando il dispositivo che porti sempre con te",
          advantage1: "Sempre in tasca - nessuna attrezzatura aggiuntiva",
          advantage2: "Facile e intuitivo da usare",
          advantage3: "Stabilizzazione dell'immagine integrata",
          advantage4: "Flash integrato per la maggior parte delle situazioni di illuminazione",
          optional: {
            title: "Opzionale: Torcia esterna",
            description: "Illuminazione aggiuntiva quando necessario"
          },
          summary: {
            title: "Pronto quando serve",
            description: "Nessuna configurazione richiesta"
          }
        },
        caseInfo: {
          title: "Archiviazione intelligente delle informazioni sul caso",
          description: "Gli utenti possono aggiungere e archiviare in modo sicuro informazioni complete per ogni indagine all'interno dell'app SPUFO",
          details: {
            title: "Dettagli del caso",
            classification: {
              title: "Classificazione del caso",
              description: "Tipo di incidente (frode, furto, ecc.)"
            },
            subject: {
              title: "Informazioni sul soggetto",
              description: "Dettagli rilevanti della persona"
            }
          },
          location: {
            title: "Dettagli della posizione",
            address: {
              title: "Informazioni sull'indirizzo",
              description: "Indirizzo e dettagli della città"
            },
            specific: {
              title: "Luogo specifico o altre note",
              description: "Dettagli di edificio, piano e ufficio"
            }
          },
          time: {
            title: "Informazioni temporali",
            date: {
              title: "Registrazione della data",
              description: "Cattura della data per ogni caso"
            },
            stamps: {
              title: "Time Stamps",
              description: "Monitoraggio preciso del tempo"
            }
          }
        }
      },


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
      },
      twojo: {
        hero: {
          title: 'Sviluppato in Svizzera.',
          subTitle: 'Siamo un team dedicato, che crea soluzioni per aiutare la tua azienda a prosperare.'
        },
        partner: {
          title: 'In collaborazione con'
        },
        solutions: {
          title: 'Le Nostre Soluzioni',
          subTitle: 'Offriamo soluzioni flessibili per la tua azienda',
          mobileDev: {
            title: 'Sviluppo Mobile',
            description: 'App che funzionano su iOS e Android.',
            link: 'Scopri di più'
          },
          businessApp: {
            title: 'Applicazione Aziendale',
            description: 'Applicazioni su misura per la tua azienda.',
            link: 'Scopri di più'
          },
          interactiveExp: {
            title: 'Esperienze Interattive',
            description: 'Gamifica la tua pubblicità.',
            link: 'Scopri di più'
          }
        },
        highlightedProduct: {
          title: 'Prodotto in Evidenza',
          product: {
            title: 'SPUFO',
            subTitle: 'L’app di fotografia per le scene del crimine',
            slogan: 'Digitale - Veloce - Efficiente',
            description: 'L’app SPUFO è una soluzione iOS forense che semplifica e ottimizza la raccolta di tracce dattiloscopiche nelle scene del crimine.',
            bulletPoints: {
              first: 'Sostituisce le fotocamere DSLR tradizionali e le pellicole in gelatina con la tecnologia mobile.',
              second: 'Cattura le tracce sul posto, con scala 1:1 e risoluzione di 1000 dpi.',
              third: 'Permette la numerazione diretta, il ritaglio e la preparazione per le ricerche AFIS.'
            },
            button: 'Scopri di più'
          }
        },
        about: {
          teamTitle: 'Incontra il Nostro Team',
          teamSubtitle: 'Sviluppatori appassionati che creano soluzioni innovative',
          description: 'Siamo un team di ingegneri del software appassionati che si sono conosciuti durante il loro apprendistato presso la scuola BBBaden. Pur proseguendo le nostre carriere individuali nella tecnologia, ci siamo uniti per creare soluzioni innovative attraverso Twojo Software.',
          teamImageAlt: 'Team di Twojo Software',
          festim: {
            name: 'Festim Jetishi',
            role: 'Ingegnere del Software',
            education: 'FHNW Windisch/Brugg',
            description: 'Dopo aver completato il suo apprendistato come informatico presso la scuola BBBaden, Festim ha proseguito gli studi in informatica alla FHNW. La sua passione per lo sviluppo software e le soluzioni innovative spinge avanti la nostra eccellenza tecnica.',
            linkedin: 'https://www.linkedin.com/in/festim-jetishi-b8ba82334/',
            email: 'mailto:festim.jetishi@twojo.ch'
          },
          josip: {
            name: 'Josip Corkovic',
            role: 'Specialista di Cybersecurity',
            education: 'HSLU Rotkreuz',
            description: 'Dopo il suo apprendistato alla scuola BBBaden, Josip si è specializzato in Cybersecurity presso la HSLU. La sua esperienza in sicurezza e architettura dei sistemi garantisce che le nostre soluzioni siano innovative e sicure.',
            linkedin: 'https://www.linkedin.com/company/twojo/',
            email: 'mailto:josip.corkovic@twojo.ch'
          },
          jordan: {
            name: 'Jordan Suter',
            role: 'Ingegnere del Software',
            education: 'HSLU Rotkreuz',
            description: 'Jordan ha completato il suo apprendistato presso la scuola BBBaden e ha proseguito la sua formazione in informatica presso la HSLU. Le sue conoscenze tecniche e le sue capacità di problem-solving contribuiscono in modo significativo al nostro processo di sviluppo.',
            linkedin: 'https://www.linkedin.com/in/jordan-suter/',
            email: 'mailto:jordan.suter@twojo.ch'
          },
          closingStatement: 'Pur mantenendo le nostre carriere come ingegneri del software in varie aziende, Twojo Software rappresenta la nostra visione comune di creare soluzioni di impatto. Le nostre diverse esperienze professionali e le nostre competenze complementari ci permettono di affrontare le sfide da diverse prospettive, con soluzioni più solide e innovative.'
        },
        blog: {
          title: 'Blog',
          description: 'Resta aggiornato sulle ultime novità, gli aggiornamenti e gli approfondimenti di Twojo Software GmbH. Scopri le nostre soluzioni innovative e gli sviluppi tecnologici.',
          featuredArticle: {
            tag: 'News | 8 Ottobre 2024',
            title: 'Nuova app per la scena del crimine assicura le impronte digitali per la polizia',
            content: 'L\'Istituto Forense di Zurigo si affida completamente a SPUFO. L\'app innovativa rivoluziona l\'analisi forense e la rende più efficiente che mai.',
            link: 'Scopri di più'
          },
          olderArticles: {
            article1: {
              tag: 'Aggiornamento | 22 Agosto 2024',
              title: 'Logging avanzato e esperienza utente migliorata',
              content: 'L\'ultimo aggiornamento di SPUFO porta potenti funzioni di logging e miglioramenti dell\'interfaccia utente. Gli utenti possono ora monitorare le attività dell\'app con log locali e inviare report di errore via email quando necessario.',
              link: 'Scopri di più'
            },
            article2: {
              tag: 'Aggiornamento | 15 Febbraio 2024',
              title: 'Elaborazione avanzata delle immagini e funzioni di esportazione',
              content: 'SPUFO ora offre funzioni avanzate di elaborazione delle immagini con contrasto regolabile, luminosità e rotazione libera. Le immagini esportate contengono metadati importanti come coordinate GPS e timestamp.',
              link: 'Scopri di più'
            },
            article3: {
              tag: 'Aggiornamento | 19 Novembre 2023',
              title: 'Miglioramenti della fotocamera e supporto multilingue',
              content: 'Una nuova modalità macro semplifica l\'uso della fotocamera. L\'app ora supporta tedesco, inglese e francese e offre una gestione migliorata dei dati con pulizia automatica dei casi.',
              link: 'Scopri di più'
            }
          }
        }
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
      location: 'Zoug, Suisse',
      name: 'Nom',
      emailAddress: 'Adresse Email',
      company: 'Entreprise/Organisation',
      phone: 'Numéro de Téléphone',
      subject: 'Sujet',
      message: 'Message',
      required: '*',
      sendMessage: 'Envoyer le Message',
      formSuccessMessage: 'Merci de nous avoir contactés !',
      formSuccessSubtitle: 'Votre message a bien été reçu, et nous vous répondrons rapidement.',

      // Testimonial Section
      testimonialTitle: 'Témoignage',
      testimonialQuote: '"L\'exemple de SPUFO montre l\'importance des nouvelles technologies pour la science médico-légale." ... "L\'application assure une efficacité nettement supérieure et, surtout, plus de traces soumises."',
      testimonialAuthor: 'Dominik Hänni',
      testimonialRole: 'Chef de l\'informatique à l\'Institut médico-légal de Zurich',

      evidence: {
        title: "Transformez votre collecte de preuves",
        subtitle: "Vivez l'évolution d'un équipement complexe vers une efficacité simplifiée",
        traditional: {
          label: "MÉTHODE TRADITIONNELLE",
          title: "Configuration d'équipement complexe",
          subtitle: "Plusieurs pièces d'équipement spécialisé requises",
          dslr: {
            name: "Appareil photo DSLR",
            negative1: "Équipement coûteux (2000 CHF et plus)",
            negative2: "Nécessite une formation technique"
          },
          flash: {
            name: "Système de flash",
            negative1: "Processus de configuration complexe",
            negative2: "Coût supplémentaire"
          },
          tripod: {
            name: "Trépied",
            negative1: "Encombrant et lourd",
            negative2: "Configuration chronophage"
          },
          gelatin: {
            name: "Film gélatineux",
            negative1: "Application chronophage",
            negative2: "Risque de contamination"
          },
          timeImpact: {
            title: "Impact temporel",
            description: "Temps de configuration significatif requis pour chaque scène"
          }
        },
        spufo: {
          label: "SOLUTION SPUFO",
          title: "Intégration intelligente",
          subtitle: "Utilisation de l'appareil que vous transportez déjà",
          advantage1: "Toujours dans votre poche - pas d'équipement supplémentaire à transporter",
          advantage2: "Simple et intuitif à utiliser",
          advantage3: "Stabilisation d'image intégrée",
          advantage4: "Flash intégré pour la plupart des situations d'éclairage",
          optional: {
            title: "Optionnel : Flash externe",
            description: "Éclairage supplémentaire si nécessaire"
          },
          summary: {
            title: "Prêt quand vous en avez besoin",
            description: "Aucune configuration requise"
          }
        },
        caseInfo: {
          title: "Stockage intelligent des informations de cas",
          description: "Les utilisateurs peuvent ajouter et stocker en toute sécurité des informations de cas complètes pour chaque enquête dans l'application SPUFO",
          details: {
            title: "Détails du cas",
            classification: {
              title: "Classification du cas",
              description: "Type d'incident (fraude, vol, etc.)"
            },
            subject: {
              title: "Informations sur le sujet",
              description: "Détails pertinents de la personne"
            }
          },
          location: {
            title: "Détails de localisation",
            address: {
              title: "Informations d'adresse",
              description: "Adresse et détails de la ville"
            },
            specific: {
              title: "Lieu spécifique ou autres notes",
              description: "Bâtiment, étage et détails du bureau"
            }
          },
          time: {
            title: "Informations temporelles",
            date: {
              title: "Enregistrement de la date",
              description: "Date de capture pour chaque cas"
            },
            stamps: {
              title: "Horodatages",
              description: "Suivi précis du temps"
            }
          }
        }
      },


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
      },
      twojo: {
        hero: {
          title: 'Développé en Suisse.',
          subTitle: 'Nous sommes une équipe dédiée, créant des solutions pour faire prospérer votre entreprise.'
        },
        partner: {
          title: 'Partenariat avec'
        },
        solutions: {
          title: 'Nos Solutions',
          subTitle: 'Nous offrons des solutions flexibles pour votre entreprise',
          mobileDev: {
            title: 'Développement Mobile',
            description: 'Applications fonctionnant sur iOS et Android.',
            link: 'En savoir plus'
          },
          businessApp: {
            title: 'Application Professionnelle',
            description: 'Applications adaptées à votre entreprise.',
            link: 'En savoir plus'
          },
          interactiveExp: {
            title: 'Expériences Interactives',
            description: 'Gamifiez votre publicité.',
            link: 'En savoir plus'
          }
        },
        highlightedProduct: {
          title: 'Produit Vedette',
          product: {
            title: 'SPUFO',
            subTitle: 'L’application de photographie de scènes de crime',
            slogan: 'Digital - Rapide - Efficace',
            description: 'L’application SPUFO est une solution iOS médico-légale qui simplifie et optimise la collecte de traces dactyloscopiques sur les scènes de crime.',
            bulletPoints: {
              first: 'Remplace les caméras DSLR traditionnelles et les feuilles de gélatine par la technologie mobile.',
              second: 'Capture les traces sur place, à l’échelle 1:1 et avec une résolution de 1000 dpi.',
              third: 'Permet la numérotation directe, le recadrage et la préparation pour les recherches AFIS.'
            },
            button: 'En savoir plus'
          }
        },
        about: {
          teamTitle: 'Rencontrez Notre Équipe',
          teamSubtitle: 'Des développeurs passionnés créant des solutions innovantes',
          description: 'Nous sommes une équipe d\'ingénieurs logiciels passionnés qui se sont rencontrés lors de notre apprentissage à l\'école BBBaden. Tout en poursuivant nos carrières individuelles dans la technologie, nous avons uni nos forces pour créer des solutions innovantes via Twojo Software.',
          teamImageAlt: 'Équipe de Twojo Software',
          festim: {
            name: 'Festim Jetishi',
            role: 'Ingénieur Logiciel',
            education: 'FHNW Windisch/Brugg',
            description: 'Après avoir terminé son apprentissage en tant qu\'informaticien à l\'école BBBaden, Festim a poursuivi ses études en informatique à la FHNW. Sa passion pour le développement de logiciels et les solutions innovantes fait progresser notre excellence technique.',
            linkedin: 'https://www.linkedin.com/in/festim-jetishi-b8ba82334/',
            email: 'mailto:festim.jetishi@twojo.ch'
          },
          josip: {
            name: 'Josip Corkovic',
            role: 'Spécialiste en Cybersécurité',
            education: 'HSLU Rotkreuz',
            description: 'Après son apprentissage à l\'école BBBaden, Josip s\'est spécialisé en cybersécurité à la HSLU. Son expertise en sécurité et architecture des systèmes garantit que nos solutions sont à la fois innovantes et sécurisées.',
            linkedin: 'https://www.linkedin.com/company/twojo/',
            email: 'mailto:josip.corkovic@twojo.ch'
          },
          jordan: {
            name: 'Jordan Suter',
            role: 'Ingénieur Logiciel',
            education: 'HSLU Rotkreuz',
            description: 'Jordan a terminé son apprentissage à l\'école BBBaden et a poursuivi sa formation en informatique à la HSLU. Ses connaissances techniques et ses compétences en résolution de problèmes contribuent de manière significative à notre processus de développement.',
            linkedin: 'https://www.linkedin.com/in/jordan-suter/',
            email: 'mailto:jordan.suter@twojo.ch'
          },
          closingStatement: 'Tout en maintenant nos carrières respectives en tant qu\'ingénieurs logiciels dans diverses entreprises, Twojo Software représente notre vision commune de créer des solutions impactantes. Nos expériences professionnelles diversifiées et nos compétences complémentaires nous permettent d\'aborder les défis sous plusieurs angles, aboutissant à des solutions plus robustes et innovantes.'
        },
        blog: {
          title: 'Blog',
          description: 'Restez informé des dernières actualités, mises à jour et perspectives de Twojo Software GmbH. Découvrez nos solutions innovantes et nos développements technologiques.',
          featuredArticle: {
            tag: 'Actualités | 8 octobre 2024',
            title: 'Nouvelle application pour scènes de crime sécurise les empreintes digitales pour la police',
            content: 'L\'Institut médico-légal de Zurich fait entièrement confiance à SPUFO. L\'application innovante révolutionne l\'investigation criminelle et la rend plus efficace que jamais.',
            link: 'En savoir plus'
          },
          olderArticles: {
            article1: {
              tag: 'Mise à jour | 22 août 2024',
              title: 'Journalisation améliorée et expérience utilisateur',
              content: 'La dernière mise à jour de SPUFO apporte de puissantes fonctions de journalisation et des améliorations de l\'interface utilisateur. Les utilisateurs peuvent désormais suivre les activités de l\'application avec des journaux locaux et envoyer des rapports d\'erreur par e-mail si nécessaire.',
              link: 'En savoir plus'
            },
            article2: {
              tag: 'Mise à jour | 15 février 2024',
              title: 'Traitement d\'image avancé et fonctionnalités d\'exportation',
              content: 'SPUFO propose désormais des fonctions avancées de traitement d\'image avec contraste réglable, luminosité et rotation libre. Les images exportées contiennent des métadonnées importantes comme les coordonnées GPS et les horodatages.',
              link: 'En savoir plus'
            },
            article3: {
              tag: 'Mise à jour | 19 novembre 2023',
              title: 'Améliorations de l\'appareil photo et support multilingue',
              content: 'Un nouveau mode macro simplifie l\'utilisation de l\'appareil photo. L\'application prend maintenant en charge l\'allemand, l\'anglais et le français et offre une meilleure gestion des données avec un nettoyage automatique des cas.',
              link: 'En savoir plus'
            }
          }
        }
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
