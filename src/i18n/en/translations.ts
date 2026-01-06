const enTranslations = {
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
    aboutDescription: 'The SPUFO app is a forensic iOS solution that simplifies the collection of dactyloscopic traces at crime scenes.',
    aboutPoint1: 'Replaces traditional DSLR cameras and gelatin films with mobile technology.',
    aboutPoint2: 'Captures traces on-site, scaled 1:1, and saved in 1000 dpi resolution.',
    aboutPoint3: 'Allows direct numbering, cropping, and preparation for AFIS searches.',

    // Image Editing Section
    imageEditing: {
      title: 'Professional Image Editing',
      subtitle: 'Utilize our comprehensive image editing tools to prepare your latent fingerprints for analysis.',
      features: {
        colorInversion: {
          title: 'Color Inversion',
          description: 'Inversion of colors to enhance the visibility of evidence on dark backgrounds.'
        },
        gamma: {
          title: 'Gamma Adjustment',
          description: 'Precise adjustment of gamma values to reveal fine details.'
        },
        contrast: {
          title: 'Contrast Control',
          description: 'Contrast enhancement to clearly highlight fingerprint patterns.'
        },
        brightness: {
          title: 'Brightness Adjustment',
          description: 'Correction of overexposed or underexposed areas for optimal display.'
        },
        rotation: {
          title: 'Free Image Rotation',
          description: 'Flexible rotation of images for manual alignment.'
        },
        crop: {
          title: 'Precise Cropping',
          description: 'Targeted cropping to focus on relevant areas.'
        },
        mirror: {
          title: 'Image Mirroring',
          description: 'Mirroring of images to correct orientation or perspective.'
        },
        numbering: {
          title: 'Evidence Numbering',
          description: 'Photos can be numbered to identify assignments.'
        }
      },
      bottomText: 'All editing functions are optimized for forensic work, ensuring the integrity of the evidence.'
    },

    rulerRecognition: {
      title: 'Ruler Recognition',
      description: 'Advanced measurement and documentation capabilities for precise evidence recording',
      features: {
        accurate_measurements: {
          title: 'Accurate Measurements',
          description: 'Automatically detects rulers and calculates precise dimensions. Specialized rulers with ArUco markers are recommended for best results.'
        },
        high_quality_images: {
          title: 'High-Quality Images',
          description: 'Produces images at 1000 DPI resolution, preserving detail for reliable analysis. Original images are always preserved for traceability.'
        },
        detailed_documentation: {
          title: 'Detailed Documentation',
          description: 'Export images with metadata like GPS coordinates and timestamps. Supports RAW and TIFF formats for flexibility.'
        }
      },
      advanced_capabilities: 'Advanced Capabilities',
      comprehensive_suite: 'Comprehensive suite of features for professional evidence documentation',
      extra_features: {
        ultra_high_resolution: 'Ultra-high resolution at 1000 DPI',
        embedded_gps_metadata: 'Embedded GPS and metadata',
        supports_raw_tiff: 'Supports RAW and TIFF formats',
        true_to_scale_output: 'True-to-scale output',
        automatic_ruler_detection: 'Automatic ruler detection',
        greyscale_enhancement: 'Greyscale enhancement',
        original_image_preservation: 'Original image preservation',
        advanced_processing_algorithms: 'Advanced processing algorithms'
      }
    },


    // Advantages Section
    advantagesTitle: 'Smartphone Advantages',
    advantage1: 'Improved Efficiency',
    advantage2: 'Enhanced Security',
    advantage3: 'Better Performance',

    // Features Section
    featuresTitle: 'Key Advantages',
    feature1: {
      title: 'Mobile Fingerprint Capture',
      description: 'Effortlessly collect high-quality fingerprints at crime scenes using the SPUFO App on your iOS device. Designed for both forensic technicians and front-line officers.',
      link: 'Learn how it works'
    },
    feature2: {
      title: 'Image Editing Directly in the App',
      description: 'Images can be edited directly within the app, eliminating the need for additional software.',
      link: 'Discover the benefits'
    },
    feature3: {
      title: 'Optimal Resolution Imaging',
      description: 'Automatic capture of 1:1 scaled photographs at 1000 dpi resolution. Every fingerprint is captured in the highest quality for precise analysis.',
      link: 'See the technical details'
    },
    feature4: {
      title: 'Proven in the Field',
      description: 'Developed in collaboration with Zurich Forensic Science Institute, SPUFO is actively used in real-world scenarios. Our app has significantly increased the number of fingerprints being captured, demonstrating its effectiveness and reliability in forensic investigations.',
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
        description: "Applications tailored to your business."
      },
      interactive: {
        title: "Interactive Experiences",
        description: "Gamify your advertising."
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
    testimonialRole: 'Head of IT at the Zurich Forensic Science Institute',

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
        description: "Users can add and securely store case information from every investigation within the SPUFO app",
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

    // Forensic Success Section
    forensicSuccess: {
      title: 'Operational Success with the Zurich Cantonal Police',
      subtitle: 'How SPUFO is revolutionizing forensic fingerprint photography in real police operations',
      adoption: {
        title: 'Widespread Adoption in Zurich',
        description: 'SPUFO has achieved significant milestones in its introduction to Zurich\'s law enforcement:',
        points: [
          'Implemented by FOR Zurich since April 2024',
          'Fully adopted by the Cantonal Police (KAPO) since October 2024',
          'Currently in daily use by thousands of police officers'
        ]
      },
      efficiency: {
        title: 'Enhanced Investigation Efficiency',
        description: 'By optimizing the fingerprint photography process, SPUFO has significantly reduced the time required for evidence collection at crime scenes. This efficiency enables forensic teams to handle more cases while maintaining the highest evidence quality.'
      },
      standard: {
        title: 'Professional Standard',
        description: 'SPUFO continues to serve as the standard tool for forensic fingerprint photography in use by Zurich police, demonstrating its effectiveness and reliability in real-world law enforcement scenarios.'
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
        subTitle: 'Flexible solutions for your business',
        mobileDev: {
          title: 'Mobile Development',
          description: 'Apps that work on both iOS and Android.',
          link: 'Learn more'
        },
        businessApp: {
          title: 'Business Application',
          description: 'Applications tailored to your business.',
          link: 'Learn more',
        },
        interactiveExp: {
          title: 'Interactive Experiences',
          description: 'Gamify your advertising.',
          link: 'Learn more',
        }
      },
      highlightedProduct: {
        title: 'Highlighted Product',
        product: {
          title: 'SPUFO',
          subTitle: 'The Crime Scene Photography App',
          slogan: 'Digital - Fast - Efficient',
          description: 'The SPUFO app is a forensic iOS solution that simplifies the collection of dactyloscopic traces at crime scenes.',
          bulletPoints: {
            first: 'Replaces traditional DSLR cameras and gelatin sheets with mobile technology.',
            second: 'Captures traces on-site, accurately scaled 1:1 and in 1000 DPI resolution.',
            third: 'Allows direct numbering, cropping, and preparation for AFIS searches.'
          },
          button: 'Learn more'
        }
      },
      about: {
        teamTitle: 'Meet Our Team',
        teamSubtitle: 'Passionate Developers Creating Innovative Solutions',
        description: 'We are a team of software engineers who met during our apprenticeship at BBBaden School. While pursuing our individual careers in technology, we\'ve joined forces to create innovative solutions through Twojo Software.',
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
        description: 'Stay up to date with the latest news, updates, and insights from Twojo Software GmbH. Discover our innovative solutions and technological advancements.',
        featuredArticle: {
          tag: 'News | February 14, 2025',
          title: '«The Idea»: Digital Crime Scene Investigation',
          content: 'Three Swiss computer science students have developed an innovative crime scene app: the SPUFO forensic photography app. Thanks to this app, the police can capture fingerprints more easily. The Zurich Cantonal Police are already using this app and are also equipping the uniformed police with it.',
          link: 'Learn more',
          url: 'https://www.srf.ch/play/tv/10-vor-10/video/die-idee-digitale-spurensicherung?urn=urn%3Asrf%3Avideo%3Ac1ddc7ab-205d-40b5-931c-b6d1425b371d',
          credit: 'SRF Schweizer Radio und Fernsehen'
        },
        olderArticles: {
          article081024: {
            tag: 'News | November 20, 2024',
            title: 'SPUFO App: Swiss Innovation in Forensics',
            content: 'Three Swiss students are revolutionizing forensic science with their SPUFO app. The innovative solution makes securing, photographing, and archiving fingerprints much easier.',
            link: 'Learn more',
            url: 'https://www.20min.ch/story/spufo-app-swiss-innovation-in-forensics-103223322',
            credit: '20min.ch'
          },
          article1: {
            tag: 'News | October 8, 2024',
            title: 'New Crime Scene App Secures Fingerprints for Police',
            content: 'The Zurich Forensic Institute is fully committed to SPUFO. The innovative app is revolutionizing forensic science and making it more efficient than ever.',
            link: 'Learn more'
          },
          article2: {
            tag: 'Update | August 22, 2024',
            title: 'Enhanced Logging and User Experience',
            content: 'The latest SPUFO update introduces powerful logging features and UI enhancements. Users can now track app activities with local logs and send error reports via email if needed.',
            link: 'Learn more'
          },
          article3: {
            tag: 'Update | February 15, 2024',
            title: 'Advanced Image Processing and Export Features',
            content: 'SPUFO now offers advanced image processing capabilities with adjustable contrast, brightness, and free rotation. Exported images include important metadata like GPS coordinates and timestamps.',
            link: 'Learn more'
          },
          article4: {
            tag: 'Update | November 19, 2023',
            title: 'Camera Improvements and Multilingual Support',
            content: 'A new macro mode simplifies camera operation. The app now supports German, English, and French and offers improved data management with automatic case cleanup.',
            link: 'Learn More'
          }
        }
      },
      games: {
        about: 'At Twojo Software GmbH, we help businesses utilize games as a powerful marketing tool. From eye-catching games for convention stands to competitions designed to engage and excite audiences, we bring creative ideas to life. Our games don’t just entertain — they amplify your brand\'s visibility and foster deeper connections with your target audience. Whether you\'re looking to gamify your marketing strategy or create an unforgettable event experience, we’ve got you covered.',
        experience: [
          {
            title: 'Interactive Game Development',
            description: 'We create engaging games designed to attract customer attention.'
          },
          {
            title: 'Competitions and Events',
            description: 'Our games are perfect for driving engagement at events through interactive competitions.'
          },
          {
            title: 'Boost Brand Interaction',
            description: 'Use gamification to connect with your audience and create memorable brand experiences.'
          }
        ]
      },
      mobile: {
        about: 'At Twojo Software GmbH, we create innovative mobile applications for both Android and iOS platforms. Our experienced team combines technical expertise with a focus on user experience, ensuring that every app we develop is intuitive and efficient. We are particularly focused on leveraging camera functionalities and image processing to enhance your app\'s capabilities.',
        experience: [
          {
            title: 'Cross-Platform Development',
            description: 'Creating high-quality applications for both Android and iOS.'
          },
          {
            title: 'Camera and Image Processing',
            description: 'Implementing advanced image capture features and real-time image manipulation.'
          },
          {
            title: 'User-Centric Design',
            description: 'Delivering engaging user experiences through thoughtful design and functionality.'
          }
        ]
      },
      businessApplication: {
        about: 'Business Applications Designed for Success',
        about_description: 'At Twojo Software GmbH, we specialize in creating innovative business applications tailored to companies. Our solutions focus on efficient data manipulation, seamless cloud hosting of web applications, and automating processes to enhance operational efficiency. Combining technical expertise with a business-oriented approach, we deliver scalable, intuitive, and robust applications.',
        experience: {
          data_manipulation_expertise: {
            title: 'Data Manipulation Expertise',
            description: 'Creating efficient solutions for managing, processing, and analyzing business data.'
          },
          web_application_hosting: {
            title: 'Web Application Hosting',
            description: 'Deploying and maintaining scalable and secure web applications.'
          },
          automation_and_efficiency: {
            title: 'Automation and Efficiency',
            description: 'Our applications streamline business processes, enabling companies to become more automated and efficient.'
          }
        }
      }
    },

    // App Privacy Section
    appPrivacy: {
      title: 'Privacy Policy for the SPUFO App',
      subtitle: 'We place great value on the protection of your data and would like to be transparent with you about how we handle your information.',
      permissions: {
        title: 'App Permissions',
        location: {
          title: 'Location',
          description: 'The app determines the location for cases and images.'
        },
        photos: {
          title: 'Photos',
          description: 'The app can add images to the gallery.'
        },
        camera: {
          title: 'Camera',
          description: 'The app accesses the camera when taking photos.'
        }
      },
      processing: {
        title: 'Data Processing and Storage',
        description: 'The SPUFO app stores all data locally on your device. There is no backup and no backend where your data is stored centrally. The only exception is crash logs (Crash Logs), which are automatically collected by Apple to ensure app stability and troubleshooting.'
      },
      localData: {
        title: 'What data is collected and stored locally on your device?',
        photos: {
          title: 'Photos',
          description: 'A core function of the app is capturing and editing camera shots.'
        },
        location: {
          title: 'Location',
          description: 'The location is stored as coordinate pairs in the metadata of trace images.'
        },
        device: {
          title: 'Smartphone Model',
          description: 'The model name is stored in the metadata of trace images.'
        },
        language: {
          title: 'Language',
          description: 'The app automatically adapts to the device language. The language can be adjusted in the settings.'
        },
        initials: {
          title: 'Initials',
          description: 'Initials of the person using the app.'
        },
        caseLifetime: {
          title: 'Case Lifetime',
          description: 'After this time expires, the case is deleted at the next app start (standard 30 days).'
        },
        caseData: {
          title: 'Case Data',
          description: 'The following case data can be captured: ESW designation, location, street, damaged (person), date/time, processing (initials), note, overviews, overview photos, trace photos.'
        }
      },
      externalData: {
        title: 'What data is transmitted to external parties?',
        googleMaps: {
          title: 'Google Maps API',
          description: 'To help you capture addresses, we use the Google Maps API. Your location is transmitted to Google for this purpose. Please note that this is only used for address autocomplete and no further data is sent to Google.'
        }
      },
      deletion: {
        title: 'Deletion of Data',
        description: 'All app data on your device can be deleted at any time via the settings.'
      }
    }
  }
};

export default enTranslations;
