import React, { useState } from 'react';
import { DollarSign, Zap, Smartphone, Compass, Camera, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Advantage {
  icon: React.ReactNode;
  key: string;
}

interface AdvantageItemProps {
  icon: React.ReactNode;
  advantageKey: string;
  isActive: boolean;
  onClick: () => void;
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

const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon, advantageKey, isActive, onClick }) => {
  const { t } = useTranslation();
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 relative min-h-[100px] ${isActive ? 'text-[--orange-color]' : ''}`}
      onClick={onClick}
    >
      <div className="p-8">
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
        <h2 className="text-4xl md:text-7xl font-bold text-[--orange-color] mb-20 text-center">
          {t('smartphoneTitle')}
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col space-y-6">
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={index}
                icon={advantage.icon}
                advantageKey={advantage.key}
                isActive={activeIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="md:w-1/2 md:pl-12 flex justify-center">
            <img 
              src="/assets/images/MoreMockup.png"  
              alt="Smartphone Mockup" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartphoneAdvantages;
