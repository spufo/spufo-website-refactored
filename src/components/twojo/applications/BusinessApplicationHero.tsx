import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WebsiteCRMMockup from './WebsiteCRMMockup';

const BusinessApplicationHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#111] text-white min-h-screen flex items-start md:items-center overflow-hidden mt-0">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-stretch justify-between max-w-[100rem] mx-auto w-full px-6 over mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 py-4 md:py-12 flex flex-col items-center md:items-start justify-center relative w-full"
        >
          <h1 className="text-cyan-400 text-5xl md:text-8xl font-semibold mb-4">
            {t('twojo.solutions.businessApp.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            {t('twojo.solutions.businessApp.description')}
          </p>
        </motion.div>

        {/* Phone Mockup Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 py-0 md:py-12 flex flex-col justify-center items-center"
        >
          <div className="max-w-full h-auto transform scale-65 sm:scale-90 md:scale-150 -mt-8 sm:mt-0">
            <WebsiteCRMMockup></WebsiteCRMMockup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessApplicationHero;