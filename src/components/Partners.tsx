import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logo_FOR from '/assets/images/Logo_FOR_RGB-White.svg';

export default function Partners() {
  const { t } = useTranslation();

  return (
    <div id="partners" className="bg-black pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#00B7FF] text-3xl font-semibold text-center mb-16"
        >
          {t('twojo.partner.title')}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-24"
        >
          <div className="w-64 h-32 flex items-center justify-center p-4 backdrop-blur-sm">
            <img className="h-24 my-12 brightness-50 hover:brightness-100 hover:scale-[1.1] transition-all duration-300" src={logo_FOR} alt="Forensisches Institut Zürich" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
