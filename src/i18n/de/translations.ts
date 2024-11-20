const deTranslations = {
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
        aboutDescription: 'Die SPUFO-App ist eine forensische Applikaiton, welche die Erfassung von daktyloskopischen Spuren am Tatort vereinfacht und optimiert.',
        aboutPoint1: 'Ersetzt traditionelle DSLR-Kameras und Gelatinefolien durch mobile Technologie.',
        aboutPoint2: 'Erfasst Spuren vor Ort, massstabsgetreu 1:1 und in 1000 dpi Auflösung.',
        aboutPoint3: 'Ermöglicht direkte Nummerierung, Zuschnitt und Vorbereitung für AFIS-Suchläufe.',

        // Image Editing Section
        imageEditing: {
            title: 'Professionelle Bildbearbeitung',
            subtitle: 'Umfangreiche Bildbearbeitungswerkzeuge stehen bereit, um Spurenaufnahmen optimal für die Analyse vorzubereiten.',
            features: {
                colorInversion: {
                    title: 'Farbinvertierung',
                    description: 'Invertierung der Farben zur verbesserten Sichtbarkeit von Beweismitteln auf dunklem Hintergrund.'
                },
                gamma: {
                    title: 'Gamma-Einstellung',
                    description: 'Präzise Anpassung der Gamma-Werte für die Sichtbarmachung feiner Details.'
                },
                contrast: {
                    title: 'Kontrastregelung',
                    description: 'Kontrastverstärkung zur deutlicheren Hervorhebung von Fingerabdruckmustern.'
                },
                brightness: {
                    title: 'Helligkeitsanpassung',
                    description: 'Korrektur von über- oder unterbelichteten Bereichen für optimale Darstellung.'
                },
                rotation: {
                    title: 'Freie Bildrotation',
                    description: 'Flexible Drehung von Aufnahmen für eine optimale Ausrichtung.'
                },
                crop: {
                    title: 'Präziser Bildausschnitt',
                    description: 'Gezieltes Zuschneiden zur Fokussierung auf relevante Bereiche.'
                },
                mirror: {
                    title: 'Bildspiegelung',
                    description: 'Spiegelung von Bildern zur Korrektur der Ausrichtung oder Perspektive.'
                },
                numbering: {
                    title: 'Beweismittel-Nummerierung',
                    description: 'Fotos können mit Nummern versehen werden, um die Zuordnung zu erleichtern.'
                }
            },
            bottomText: 'Alle Bearbeitungsfunktionen sind speziell für die forensische Arbeit optimiert und gewährleisten die Integrität der Beweismittel.'
        },

        rulerRecognition: {
            title: 'Linealerkennung',
            description: 'Fortschrittliche Mess- und Dokumentationsfunktionen für präzise Beweisaufnahme',
            features: {
                accurate_measurements: {
                    title: 'Genaues Messen',
                    description: 'Erkennt automatisch Lineale und berechnet präzise Abmessungen. Spezialisierte Lineale mit ArUco-Markern werden für beste Ergebnisse empfohlen.'
                },
                high_quality_images: {
                    title: 'Hochwertige Bilder',
                    description: 'Erzeugt Bilder mit einer Auflösung von 1000 DPI, die Details für eine zuverlässige Analyse bewahren. Originalbilder werden immer für die Nachvollziehbarkeit aufbewahrt.'
                },
                detailed_documentation: {
                    title: 'Detaillierte Dokumentation',
                    description: 'Exportiert Bilder mit Metadaten wie GPS-Koordinaten und Zeitstempeln. Unterstützt RAW- und TIFF-Formate für Flexibilität.'
                }
            },
            advanced_capabilities: 'Fortschrittliche Funktionen',
            comprehensive_suite: 'Umfassende Suite von Funktionen für die professionelle Beweisdokumentation',
            extra_features: {
                ultra_high_resolution: 'Ultra-hohe Auflösung mit 1000 DPI',
                embedded_gps_metadata: 'Eingebettete GPS- und Metadaten',
                supports_raw_tiff: 'Unterstützt RAW- und TIFF-Formate',
                true_to_scale_output: 'Massstabsgetreue Bilder',
                automatic_ruler_detection: 'Automatische Linealerkennung',
                greyscale_enhancement: 'Graustufenverbesserung',
                original_image_preservation: 'Erhaltung des Originalbildes',
                advanced_processing_algorithms: 'Fortschrittliche Verarbeitungsalgorithmen'
            }
        },

        // Advantages Section
        advantagesTitle: 'Smartphone-Vorteile',
        advantage1: 'Verbesserte Effizienz',
        advantage2: 'Erhöhte Sicherheit',
        advantage3: 'Bessere Leistung',

        // Features Section
        featuresTitle: 'Hauptvorteile',
        feature1: {
            title: 'Mobile Fingerabdruckerfassung',
            description: 'Mühelose Erfassung hochwertiger Fingerabdrücke am Tatort mit der SPUFO App. Entwickelt für forensische Techniker und Einsatzkräfte.',
            link: 'Mehr erfahren'
        },
        feature2: {
            title: 'Bildbearbeitung direkt in der App',
            description: 'Bilder können direkt in der App bearbeitet werden. Dadurch entfällt der Umweg über zusätzliche Software.',
            link: 'Zur Funktionsübersicht'
        },
        feature3: {
            title: 'Bildgebung mit optimaler Auflösung',
            description: 'Automatische Erfassung von 1:1 skalierten Fotografien in 1000 dpi Auflösung. Jeder Fingerabdruck wird in höchster Qualität für eine genaue Analyse aufgezeichnet.',
            link: 'Technische Details ansehen'
        },
        feature4: {
            title: 'Praxiserprobt',
            description: 'Entwickelt in Zusammenarbeit mit der Forensischen Institut Zürich, wird SPUFO aktiv in realen Szenarien eingesetzt. Unsere App hat die Anzahl der erfassten Fingerabdrücke deutlich erhöht und demonstriert ihre Effektivität und Zuverlässigkeit in forensischen Untersuchungen.',
            link: 'Erfolgsgeschichten lesen'
        },

        // Forensic Success Section
        forensicSuccess: {
            title: 'Operativer Erfolg mit der Kantonspolizei Zürich',
            subtitle: 'Wie SPUFO die forensische Fingerabdruckfotografie im echten Polizeieinsatz revolutioniert',
            adoption: {
                title: 'Flächendeckende Einführung in Zürich',
                description: 'SPUFO hat bedeutende Meilensteine bei der Einführung in Zürichs Strafverfolgung erreicht:',
                points: [
                    'Implementierung durch FOR Zürich seit April 2024',
                    'Vollständige Übernahme durch die Kantonspolizei (KAPO) seit Oktober 2024',
                    'Aktuell im täglichen Einsatz bei tausenden Polizeibeamten'
                ]
            },
            efficiency: {
                title: 'Verbesserte Ermittlungseffizienz',
                description: 'Durch die Optimierung des Fingerabdruckfotografie-Prozesses hat SPUFO die erforderliche Zeit für die Beweisaufnahme am Tatort erheblich reduziert. Diese Effizienz ermöglicht es den forensischen Teams, mehr Fälle zu bearbeiten und dabei höchste Beweisqualität zu gewährleisten.'
            },
            standard: {
                title: 'Professioneller Standard',
                description: 'SPUFO dient weiterhin als Standardwerkzeug für die forensische Fingerabdruckfotografie im Einsatz der Zürcher Polizei und demonstriert seine Effektivität und Zuverlässigkeit in realen Strafverfolgungsszenarien.'
            }
        },

        // Smartphone Advantages Section
        smartphoneTitle: 'Neudefinition der Beweisaufnahme',
        advantages: {
            costEffective: {
                title: 'Kostengünstig',
                description: 'Durch vorhandene Smartphone-Technologie lassen sich Ausrüstungskosten erheblich reduzieren.'
            },
            efficient: {
                title: 'Effizient',
                description: 'Der Beweisaufnahmeprozess wird optimiert, wodurch wertvolle Zeit am Tatort gespart werden kann.'
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

        evidence: {
            title: "Die Beweissammlung neu gedacht",
            subtitle: "Die Evolution von komplexer Ausrüstung hin zu optimierter Effizienz erleben",
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
                    name: "Gelatine-Folie",
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
                subtitle: "Ein Gerät verwenden, das bereits zur Verfügung steht",
                advantage1: "Immer griffbereit - kein zusätzliches Equipment notwendig",
                advantage2: "Einfach und intuitiv zu bedienen",
                advantage3: "Integrierte Bildstabilisierung",
                advantage4: "Integrierter Blitz für die meisten Lichtverhältnisse",
                optional: {
                    title: "Optional: Taschenlampe",
                    description: "Zusätzliche Beleuchtung bei Bedarf"
                },
                summary: {
                    title: "Immer bereit für den Einsatz",
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

        // Contact Section
        contactTitle: 'Kontakt aufnehmen',
        contactSubtitle: 'Fragen oder Interesse an weiteren Informationen? Es freut uns, von Interessierten zu hören.',
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
        formSuccessMessage: 'Vielen Dank für die Kontaktaufnahme!',
        formSuccessSubtitle: 'Die Nachricht ist bei uns eingegangen, und wir melden uns in Kürze bei Ihnen.',

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
                subTitle: 'Ein engagiertes Team entwickelt Lösungen, die Unternehmen zum Erfolg verhelfen.'
            },
            partner: {
                title: 'Partnerschaft mit'
            },
            solutions: {
                title: 'Unsere Lösungen',
                subTitle: 'Wir bieten flexible Lösungen in diversen Bereichen',
                mobileDev: {
                    title: 'Mobile Entwicklung',
                    description: 'Apps, die sowohl auf iOS als auch auf Android funktionieren.',
                    link: 'Mehr erfahren'
                },
                businessApp: {
                    title: 'Business-Anwendung',
                    description: 'Anwendungen, die passgenau auf Anforderungen zugeschnitten werden.',
                    link: 'Mehr erfahren'
                },
                interactiveExp: {
                    title: 'Interaktive Erlebnisse',
                    description: 'Werbung mit spielerischen Elementen bereichern.',
                    link: 'Mehr erfahren'
                }
            },
            highlightedProduct: {
                title: 'Hervorgehobenes Produkt',
                product: {
                    title: 'SPUFO',
                    subTitle: 'Die Tatort-Fotografie-App',
                    slogan: 'Digital - Schnell - Effizient',
                    description: 'Die SPUFO-App ist eine forensische Applikation, die das Sichern daktyloskopischer Spuren am Tatort vereinfacht und optimiert.',
                    bulletPoints: {
                        first: 'Ersetzt herkömmliche DSLR-Kameras und Gelatinefolien durch mobile Technologie.',
                        second: 'Erfasst Spuren vor Ort, massstabsgetreu 1:1 und in 1000 dpi Auflösung.',
                        third: 'Ermöglicht direkte Nummerierung, Zuschneiden und Vorbereitung für AFIS-Suchläufe.'
                    },
                    button: 'Mehr erfahren'
                }
            },
            about: {
                teamTitle: 'Das Team',
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
                description: 'Neueste Nachrichten, Updates und Einblicke von Twojo Software GmbH werden hier geteilt. Innovative Lösungen und technologische Entwicklungen entdecken.',
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
            },
            games: {
                about: 'Twojo Software GmbH unterstützt Unternehmen dabei, Spiele als effektives Marketinginstrument zu nutzen. Von auffälligen Spielen für Messestände bis hin zu mitreißenden Wettbewerben werden kreative Ideen umgesetzt. Die Spiele unterhalten nicht nur, sondern steigern die Sichtbarkeit der Marke und fördern tiefere Verbindungen zur Zielgruppe. Ob Marketingstrategien gamifiziert oder unvergessliche Event-Erlebnisse geschaffen werden sollen – passende Lösungen sind verfügbar.',
                experience: [
                    {
                        title: 'Interaktive Spielentwicklung',
                        description: 'Wir sind spezialisiert auf die Entwicklung fesselnder Spiele, die die Aufmerksamkeit der Kunden auf sich ziehen.'
                    },
                    {
                        title: 'Wettbewerbe und Events',
                        description: 'Unsere Spiele eignen sich perfekt, um bei Events durch interaktive Wettbewerbe für Engagement zu sorgen.'
                    },
                    {
                        title: 'Markeninteraktion stärken',
                        description: 'Gamification eröffnet Möglichkeiten, mit einer Zielgruppe in Kontakt zu treten und unvergessliche Markenerlebnisse zu schaffen.'
                    }
                ]
            },
            mobile: {
                about: 'Bei der Twojo Software GmbH entwickeln wir innovative mobile Anwendungen für Android- und iOS-Plattformen. Ein erfahrenes Team kombiniert technisches Fachwissen mit einem Fokus auf Benutzerfreundlichkeit und sorgt dafür, dass jede entwickelte App intuitiv und effizient ist. Besondere Expertise besteht in der Nutzung von Kamerafunktionen und Bildverarbeitung, um die Möglichkeiten mobiler Anwendungen zu erweitern.',
                experience: [
                    {
                        title: 'Plattformübergreifende Entwicklung',
                        description: 'Kompetent in der Erstellung hochwertiger Anwendungen für Android und iOS.'
                    },
                    {
                        title: 'Kamera und Bildverarbeitung',
                        description: 'Experten in der Implementierung fortschrittlicher Bildaufnahmefunktionen und Echtzeit-Bildmanipulation.'
                    },
                    {
                        title: 'Benutzerzentriertes Design',
                        description: 'Engagiert für die Bereitstellung ansprechender Benutzererlebnisse durch durchdachtes Design und Funktionalität.'
                    }
                ]
            },
            businessApplication: {
                about: 'Massgeschneiderte Geschäftsanwendungens',
                about_description: 'Bei Twojo Software GmbH sind wir auf die Entwicklung innovativer Geschäftsanwendungen spezialisiert, die auf Unternehmen zugeschnitten sind. Unsere Lösungen konzentrieren sich auf effiziente Datenmanipulation, nahtloses Cloud-Hosting von Webanwendungen und die Automatisierung von Prozessen zur Steigerung der betrieblichen Effizienz. Durch die Kombination technischer Expertise mit einem geschäftsorientierten Ansatz liefern wir skalierbare, intuitive und robuste Anwendungen.',
                experience: {
                    data_manipulation_expertise: {
                        title: 'Expertise in Datenmanipulation',
                        description: 'Erfahren in der Erstellung effizienter Lösungen für die Verwaltung, Verarbeitung und Analyse von Geschäftsdaten.'
                    },
                    web_application_hosting: {
                        title: 'Webanwendungs-Hosting',
                        description: 'Versiert in der Bereitstellung und Wartung skalierbarer und sicherer Webanwendungen.'
                    },
                    automation_and_efficiency: {
                        title: 'Automatisierung und Effizienz',
                        description: 'Unsere Anwendungen optimieren Geschäftsprozesse und helfen Unternehmen, automatisierter und effizienter zu werden.'
                    }
                }
            }
        }
    }
};

export default deTranslations;
