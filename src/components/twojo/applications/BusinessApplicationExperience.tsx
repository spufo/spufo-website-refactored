import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Smartphone, Camera, User } from 'lucide-react';
import FeatureCard from '../../general/FeatureCard';

const BusinessApplicationExperience: React.FC = () => {
  const { t } = useTranslation();
  
  const experience = [
    {
      icon: Smartphone,
      titleKey: 'Cross-Platform Development',
      descriptionKey: 'Proficient in creating high-quality applications for both Android and iOS.'
    },
    {
      icon: Camera,
      titleKey: 'Camera and Image Processing',
      descriptionKey: 'Expertise in implementing advanced image capture features and real-time image manipulation.'
    },
    {
      icon: User,
      titleKey: 'User-Centric Design',
      descriptionKey: 'Committed to delivering engaging user experiences through thoughtful design and functionality.'
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
            At Twojo Software GmbH, we excel in crafting innovative mobile applications for both Android and iOS platforms. Our experienced team combines technical expertise with a focus on user experience, ensuring that every app we develop is intuitive and efficient. We are particularly skilled in leveraging camera functionalities and image processing to enhance your app's capabilities.
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