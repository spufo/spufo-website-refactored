import React, { useState } from 'react';
import { DollarSign, Zap, Smartphone, Compass, Camera, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import moreMockup from '/assets/images/MoreMockup.png';

interface Advantage {
  icon: React.ReactNode;
  key: string;
}

interface AdvantageItemProps {
  icon: React.ReactNode;
  advantageKey: string;
  isActive: boolean;
  onClick: () => void;
  delay: number;
}

const advantages: Advantage[] = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    key: "costEffective"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    key: "efficient"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    key: "easeOfUse"
  },
  {
    icon: <Compass className="w-6 h-6" />,
    key: "mobile"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    key: "camera"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    key: "processing"
  }
];

const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon, advantageKey, isActive, onClick, delay }) => {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <div 
        className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 relative min-h-[100px] ${isActive ? 'text-[--orange-color]' : ''}`} 
        onClick={onClick}
      >
        <div className="p-8" >
          <div className="flex items-center space-x-4">
            <div className="group-hover:text-[--orange-color] transition-all duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-semibold group-hover:text-[--orange-color] transition-all duration-300">
              {t(`advantages.${advantageKey}.title`)}
            </h3>
          </div>
          <div className={`transition-all duration-300 ${isActive ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'} overflow-hidden`}>
            <p className="mt-4 text-sm text-gray-600">
              {t(`advantages.${advantageKey}.description`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SmartphoneAdvantages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const handleClick = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative pt-12 pb-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold text-[--orange-color] mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {t('smartphoneTitle')}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col space-y-6">
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={index}
                icon={advantage.icon}
                advantageKey={advantage.key}
                isActive={activeIndex === index}
                onClick={() => handleClick(index)}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
          <motion.div 
            className="md:w-1/2 md:pl-12 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <img 
              src={moreMockup}
              alt="Smartphone Mockup" 
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartphoneAdvantages;
