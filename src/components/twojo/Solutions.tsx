import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Smartphone, LayoutGrid, Gamepad2 } from 'lucide-react';
import FeatureCard from '../general/FeatureCard';

export default function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Smartphone,
      titleKey: 'twojo.solutions.mobileDev.title',
      descriptionKey: 'twojo.solutions.mobileDev.description',
      linkKey: 'twojo.solutions.mobileDev.link',
      linkTo: '#mobile'
    },
    {
      icon: LayoutGrid,
      titleKey: 'twojo.solutions.businessApp.title',
      descriptionKey: 'twojo.solutions.businessApp.description',
      linkKey: 'twojo.solutions.businessApp.link',
      linkTo: '#business'
    },
    {
      icon: Gamepad2,
      titleKey: 'twojo.solutions.interactiveExp.title',
      descriptionKey: 'twojo.solutions.interactiveExp.description',
      linkKey: 'twojo.solutions.interactiveExp.link',
      linkTo: '#interactive'
    }
  ];

  return (
    <div className="bg-[#18181b] py-24" id="solutions">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#00B7FF] text-3xl font-semibold text-center"
        >
          {t('twojo.solutions.title')}
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl font-bold text-center mt-4 mb-16"
        >
          {t('twojo.solutions.subTitle')}
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
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
                linkKey={solution.linkKey}
                linkTo={solution.linkTo}
                isTwojo={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
