import React, { useState } from 'react';
import { DollarSign, Zap, Smartphone, Compass, Camera, Cpu } from 'lucide-react';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const advantages: Advantage[] = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Cost-effective",
    description: "Leverage existing smartphone technology to reduce equipment costs significantly."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Efficient",
    description: "Streamline the evidence collection process, saving valuable time at crime scenes."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Ease of use",
    description: "Intuitive interface familiar to smartphone users, minimizing training requirements."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Mobile & Accessible",
    description: "Compact and portable, allowing investigators to reach any spot on a crime scene with ease."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Reliable camera quality",
    description: "High-resolution smartphone cameras capture detailed evidence with precision."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "On-device processing",
    description: "Powerful smartphone processors enable real-time analysis and evidence preparation."
  }
];

const AdvantageItem: React.FC<AdvantageItemProps> = ({ icon, title, description, isActive, onClick }) => (
  <div 
    className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 relative min-h-[100px] ${isActive ? 'text-[#FF6600]' : ''}`}
    onClick={onClick}
  >
    <div className="p-8">
      <div className="flex items-center space-x-4">
        <div className="group-hover:text-[#FF6600] transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-[#FF6600] transition-all duration-300">{title}</h3>
      </div>
      <div className={`transition-all duration-300 ${isActive ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'} overflow-hidden`}>
        <p className="mt-4 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const SmartphoneAdvantages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold text-[#FF6600] mb-12 text-center">Revolutionizing Forensic Evidence Capture</h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col space-y-6">
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={index}
                {...advantage}
                isActive={activeIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="md:w-1/2 md:pl-12 flex justify-center">
            <img 
              src="/src/assets/images/MoreMockup.png"  
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
