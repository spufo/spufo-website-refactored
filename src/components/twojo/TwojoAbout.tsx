// Updated `TwojoAbout` component with multilingual support
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import team from '/assets/images/team.jpg';

const TwojoAbout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#111] text-white min-h-screen overflow-hidden pt-20">
      <div className="relative">
        {/* Dot pattern background */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-cyan-400 text-4xl md:text-7xl font-semibold mb-4">
              {t('twojo.about.teamTitle')}
            </h2>
            <h3 className="text-white text-2xl font-bold mb-8">
              {t('twojo.about.teamSubtitle')}
            </h3>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('twojo.about.description')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 group"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="w-full shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                src={team}
                alt={t('twojo.about.teamImageAlt')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {['festim', 'josip', 'jordan'].map((memberKey, index) => (
              <motion.div
                key={memberKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="group"
              >
                <div className="rounded-3xl shadow-lg p-8 h-full bg-[#18181b] 
                  transform hover:scale-105 transition duration-300">

                  <h3 className="text-2xl font-bold text-white mb-2">{t(`twojo.about.${memberKey}.name`)}</h3>
                  
                  <div className="text-cyan-400 font-medium mb-1">{t(`twojo.about.${memberKey}.role`)}</div>
                  <div className="text-gray-400 mb-4">{t(`twojo.about.${memberKey}.education`)}</div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t(`twojo.about.${memberKey}.description`)}
                  </p>

                  <div className="flex justify-between text-gray-400">
                    <a href={t(`twojo.about.${memberKey}.linkedin`)} 
                      className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={t(`twojo.about.${memberKey}.email`)}
                      className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('twojo.about.closingStatement')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwojoAbout;