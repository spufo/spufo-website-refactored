import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, Cloud, Settings } from 'lucide-react';
import FeatureCard from '../../general/FeatureCard';

const BusinessApplicationExperience: React.FC = () => {
  const { t } = useTranslation();

  const experience = [
    {
      icon: Database,
      titleKey: 'Data Manipulation Expertise',
      descriptionKey: 'Skilled in creating efficient solutions for managing, processing, and analyzing business data.'
    },
    {
      icon: Cloud,
      titleKey: 'Web Application Hosting',
      descriptionKey: 'Proficient in deploying and maintaining scalable and secure web applications.'
    },
    {
      icon: Settings,
      titleKey: 'Automation and Efficiency',
      descriptionKey: 'Our applications streamline business processes, helping companies become more automated and efficient.'
    }
  ];

  return (
    <section className="relative bg-[#18181b] text-white overflow-hidden pt-20">
      {/* About Section */}
      <div className="pt-24 pb-16 relative bg-[#18181b]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-cyan-400 text-4xl md:text-6xl font-semibold mb-4">
            {t('twojo.solutions.about')}
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Twojo Software GmbH, we specialize in creating innovative business applications tailored for companies. Our solutions focus on efficient data manipulation, seamless cloud hosting of web applications, and automating processes to enhance operational efficiency. Combining technical expertise with a business-oriented approach, we deliver scalable, intuitive, and robust applications.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#18181b] py-24" id="solutions">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experience.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={solution.icon}
                  titleKey={solution.titleKey}
                  descriptionKey={solution.descriptionKey}
                  isTwojo={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationExperience;
