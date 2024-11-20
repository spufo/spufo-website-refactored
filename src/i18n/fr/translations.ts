const frTranslations = {
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

        // Image Editing Section
        imageEditing: {
            title: 'Édition d\'images professionnelle',
            subtitle: 'Utilisez nos outils d\'édition d\'images complets pour préparer de manière optimale vos enregistrements de traces pour l\'analyse.',
            features: {
                colorInversion: {
                    title: 'Inversion des couleurs',
                    description: 'Inversion des couleurs pour améliorer la visibilité des preuves sur les arrière-plans sombres.'
                },
                gamma: {
                    title: 'Réglage du gamma',
                    description: 'Ajustement précis des valeurs gamma pour révéler les détails fins.'
                },
                contrast: {
                    title: 'Contrôle du contraste',
                    description: 'Renforcement du contraste pour mieux mettre en évidence les motifs d\'empreintes digitales.'
                },
                brightness: {
                    title: 'Ajustement de la luminosité',
                    description: 'Correction des zones surexposées ou sous-exposées pour un affichage optimal.'
                },
                rotation: {
                    title: 'Rotation libre de l\'image',
                    description: 'Rotation flexible des images pour un alignement optimal.'
                },
                crop: {
                    title: 'Recadrage précis',
                    description: 'Recadrage ciblé pour se concentrer sur les zones pertinentes.'
                },
                mirror: {
                    title: 'Miroir de l\'image',
                    description: 'Miroir des images pour corriger l\'orientation ou la perspective.'
                },
                numbering: {
                    title: 'Numérotation des preuves',
                    description: 'Les photos peuvent être numérotées pour faciliter l\'attribution.'
                }
            },
            bottomText: 'Toutes les fonctions d\'édition sont spécialement optimisées pour le travail médico-légal et garantissent l\'intégrité des preuves.'
        },

        rulerRecognition: {
            title: 'Reconnaissance de Règle',
            description: 'Capacités avancées de mesure et de documentation pour un enregistrement précis des preuves',
            features: {
                accurate_measurements: {
                    title: 'Mesures Précises',
                    description: 'Détecte automatiquement les règles et calcule des dimensions précises. Des règles spécialisées avec des marqueurs ArUco sont recommandées pour de meilleurs résultats.'
                },
                high_quality_images: {
                    title: 'Images de Haute Qualité',
                    description: 'Produit des images avec une résolution de 1000 DPI, préservant les détails pour une analyse fiable. Les images originales sont toujours préservées pour la traçabilité.'
                },
                detailed_documentation: {
                    title: 'Documentation Détaillée',
                    description: 'Exporte des images avec des métadonnées telles que les coordonnées GPS et les horodatages. Prend en charge les formats RAW et TIFF pour plus de flexibilité.'
                }
            },
            advanced_capabilities: 'Fonctionnalités Avancées',
            comprehensive_suite: 'Suite complète de fonctionnalités pour la documentation professionnelle des preuves',
            extra_features: {
                ultra_high_resolution: 'Résolution ultra-haute de 1000 DPI',
                embedded_gps_metadata: 'GPS et métadonnées intégrés',
                supports_raw_tiff: 'Prend en charge les formats RAW et TIFF',
                true_to_scale_output: 'Sortie à l’échelle réelle',
                automatic_ruler_detection: 'Détection automatique de la règle',
                greyscale_enhancement: 'Amélioration en niveaux de gris',
                original_image_preservation: 'Préservation de l’image originale',
                advanced_processing_algorithms: 'Algorithmes de traitement avancés'
            }
        },

        // Advantages Section
        advantagesTitle: 'Avantages Smartphone',
        advantage1: 'Efficacité Améliorée',
        advantage2: 'Sécurité Renforcée',
        advantage3: 'Meilleures Performances',

        // Features Section
        featuresTitle: 'Avantages Clés',
        feature1: {
            title: 'Capture Mobile d\'Empreintes Digitales',
            description: 'Collectez facilement des empreintes digitales de haute qualité sur les scènes de crime à l\'aide de l\'application SPUFO sur votre appareil iOS. Conçue pour les techniciens médico-légaux et les agents de première ligne.',
            link: 'Découvrez comment ça marche'
        },
        feature2: {
            title: 'Édition d\'images directement dans l\'application',
            description: 'Les images peuvent être éditées directement dans l\'application, supprimant ainsi le besoin de logiciels supplémentaires.',
            link: 'Découvrez les avantages'
        },
        feature3: {
            title: 'Optimal Resolution Imaging',
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


        // Forensic Success Section
        forensicSuccess: {
            title: 'Succès opérationnel avec la police cantonale de Zurich',
            subtitle: 'Comment SPUFO révolutionne la photographie d\'empreintes digitales dans les opérations policières réelles',
            adoption: {
                title: 'Adoption généralisée à Zurich',
                description: 'SPUFO a atteint des étapes significatives dans son introduction dans les forces de l\'ordre zurichoises :',
                points: [
                    'Mise en œuvre par FOR Zurich depuis avril 2024',
                    'Adoption complète par la police cantonale (KAPO) depuis octobre 2024',
                    'Actuellement utilisé quotidiennement par des milliers de policiers'
                ]
            },
            efficiency: {
                title: 'Efficacité des enquêtes améliorée',
                description: 'En optimisant le processus de photographie d\'empreintes digitales, SPUFO a considérablement réduit le temps nécessaire à la collecte des preuves sur les scènes de crime. Cette efficacité permet aux équipes forensiques de traiter plus de cas tout en garantissant la qualité maximale des preuves.'
            },
            standard: {
                title: 'Norme professionnelle',
                description: 'SPUFO continue de servir d\'outil standard pour la photographie d\'empreintes digitales utilisé par la police zurichoise, démontrant son efficacité et sa fiabilité dans des scénarios réels d\'application de la loi.'
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
            },
            games: {
                about: 'Chez Twojo Software GmbH, nous aidons les entreprises à utiliser les jeux comme un outil marketing puissant. Des jeux accrocheurs pour les stands de conventions aux compétitions conçues pour engager et enthousiasmer les audiences, nous donnons vie à des idées créatives. Nos jeux ne se contentent pas de divertir : ils amplifient la visibilité de votre marque et favorisent des liens plus profonds avec votre public cible. Que vous souhaitiez gamifier votre stratégie marketing ou créer une expérience événementielle inoubliable, nous avons la solution.',
                experience: [
                    {
                        title: 'Développement de jeux interactifs',
                        description: 'Nous sommes spécialisés dans la création de jeux engageants conçus pour attirer l\'attention des clients.'
                    },
                    {
                        title: 'Compétitions et événements',
                        description: 'Nos jeux sont parfaits pour stimuler l\'engagement lors d\'événements grâce à des compétitions interactives.'
                    },
                    {
                        title: 'Renforcer l\'interaction avec la marque',
                        description: 'Utilisez la gamification pour établir des liens avec votre public et créer des expériences mémorables autour de votre marque.'
                    }
                ]
            },
            mobile: {
                about: 'Chez Twojo Software GmbH, nous excellons dans la création d\'applications mobiles innovantes pour les plateformes Android et iOS. Notre équipe expérimentée combine expertise technique et attention à l\'expérience utilisateur, garantissant que chaque application que nous développons est intuitive et efficace. Nous sommes particulièrement compétents dans l\'exploitation des fonctionnalités de la caméra et le traitement d\'images pour améliorer les capacités de votre application.',
                experience: [
                    {
                        title: 'Développement multiplateforme',
                        description: 'Compétence dans la création d\'applications de haute qualité pour Android et iOS.'
                    },
                    {
                        title: 'Caméra et traitement d\'images',
                        description: 'Expertise dans la mise en œuvre de fonctionnalités avancées de capture d\'images et de manipulation d\'images en temps réel.'
                    },
                    {
                        title: 'Design centré sur l\'utilisateur',
                        description: 'Engagés à offrir des expériences utilisateur captivantes grâce à un design et une fonctionnalité réfléchis.'
                    }
                ]
            },
            businessApplication: {
                about: 'Applications d\'entreprise sur mesure pour le succès',
                about_description: 'Chez Twojo Software GmbH, nous sommes spécialisés dans la création d\'applications d\'entreprise innovantes adaptées aux entreprises. Nos solutions se concentrent sur la manipulation efficace des données, l\'hébergement cloud transparent des applications Web et l\'automatisation des processus pour améliorer l\'efficacité opérationnelle. En combinant une expertise technique avec une approche axée sur les affaires, nous livrons des applications évolutives, intuitives et robustes.',
                experience: {
                    data_manipulation_expertise: {
                        title: 'Expertise en manipulation de données',
                        description: 'Compétent dans la création de solutions efficaces pour la gestion, le traitement et l\'analyse des données d\'entreprise.'
                    },
                    web_application_hosting: {
                        title: 'Hébergement d\'applications Web',
                        description: 'Compétent dans le déploiement et la gestion d\'applications Web évolutives et sécurisées.'
                    },
                    automation_and_efficiency: {
                        title: 'Automatisation et efficacité',
                        description: 'Nos applications rationalisent les processus métier, aidant les entreprises à devenir plus automatisées et efficaces.'
                    }
                }
            }
        }

    }
};

export default frTranslations;
