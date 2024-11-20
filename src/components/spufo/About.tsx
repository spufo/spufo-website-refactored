import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutImage from '/assets/images/About_Image.jpg';
import background from '/assets/images/Background.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 px-6 bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] overflow-hidden" >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Fingerprint background */}
        <div
          className="absolute invert translate-x-80 rotate-[-134deg] sm:rotate-[-134deg] scale-[2] sm:scale-[0.8] bg-contain bg-no-repeat bg-center opacity-100 z-0 pointer-events-none"
        >
          <img src={background} alt="Background Pattern" />
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center">
          <motion.img
            src={aboutImage}
            alt="SPUFO in action"
            className="rounded-3xl shadow-2xl w-2/3 h-auto transform hover:scale-105 transition duration-300 z-0"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          />
          <span className="text-sm text-gray-400 mt-2 italic">20min.ch</span>
        </div>

        <div className="md:w-1/2 md:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
              {t('aboutTitle')}
            </h2>

            <p className="text-white text-lg mb-6">
              {t('aboutDescription').split('SPUFO').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-[--orange-color] hover:scale-[1.05] transition-all duration-300 inline-block mx-1">
                      SPUFO
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>

            <ul className="text-white text-lg space-y-4">
              <li className="flex items-start">
                <span className="text-[--orange-color] mr-2">•</span>
                {t('aboutPoint1')}
              </li>
              <li className="flex items-start">
                <span className="text-[--orange-color] mr-2">•</span>
                {t('aboutPoint2')}
              </li>
              <li className="flex items-start">
                <span className="text-[--orange-color] mr-2">•</span>
                {t('aboutPoint3')}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
