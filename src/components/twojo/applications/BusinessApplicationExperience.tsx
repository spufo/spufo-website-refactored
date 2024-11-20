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
      titleKey: 'twojo.businessApplication.experience.data_manipulation_expertise.title',
      descriptionKey: 'twojo.businessApplication.experience.data_manipulation_expertise.description'
    },
    {
      icon: Cloud,
      titleKey: 'twojo.businessApplication.experience.web_application_hosting.title',
      descriptionKey: 'twojo.businessApplication.experience.web_application_hosting.description'
    },
    {
      icon: Settings,
      titleKey: 'twojo.businessApplication.experience.automation_and_efficiency.title',
      descriptionKey: 'twojo.businessApplication.experience.automation_and_efficiency.description'
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
            {t('twojo.businessApplication.about')}
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('twojo.businessApplication.about_description')}
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
