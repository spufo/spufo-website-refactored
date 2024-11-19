import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Users } from 'lucide-react';
import FeatureCard from '../../general/FeatureCard';

const GamesExperience: React.FC = () => {
  const { t } = useTranslation();

  const experience = [
    {
      icon: Gamepad2,
      titleKey: 'Interactive Game Development',
      descriptionKey: 'We specialize in creating engaging games designed to attract customer attention.'
    },
    {
      icon: Trophy,
      titleKey: 'Competitions and Events',
      descriptionKey: 'Our games are perfect for driving engagement at events through interactive competitions.'
    },
    {
      icon: Users,
      titleKey: 'Boost Brand Interaction',
      descriptionKey: 'Use gamification to connect with your audience and create memorable brand experiences.'
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
            At Twojo Software GmbH, we help businesses leverage games as a powerful marketing tool. From eye-catching games for convention stands to competitions designed to engage and excite audiences, we bring creative ideas to life. Our games don’t just entertain—they amplify your brand's visibility and foster deeper connections with your target audience. Whether you're looking to gamify your marketing strategy or create an unforgettable event experience, we’ve got you covered.
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

export default GamesExperience;
