import React from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-gray-100 text-[#1E1E2E]">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold text-[--orange-color] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {t('testimonialTitle')}
        </motion.h2>
        <div className="relative">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Quote className="absolute top-0 left-0 w-16 h-16 text-[--orange-color] transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
          
          <motion.blockquote 
            className="text-2xl md:text-4xl font-light italic text-center mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            «Das Beispiel <span className="text-[--orange-color] font-normal">SPUFO</span> zeigt auf, wie bedeutsam neue <span className="text-[--orange-color] font-normal">Technologien</span> auch für die Kriminaltechnik sind.» ...<br/> «Die App sorgt für deutlich mehr <span className="text-[--orange-color] font-normal">Effizienz</span> und vor allem mehr <span className="text-[--orange-color] font-normal">eingelieferte Spuren</span>.»
          </motion.blockquote>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <p className="text-xl font-semibold mb-1">{t('testimonialAuthor')}</p>
            <p className="text-md text-gray-600">{t('testimonialRole')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
