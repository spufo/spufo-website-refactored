import React from 'react';
import { Smartphone, LayoutGrid, Gamepad2 } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Solutions() {
  const solutions = [
    {
      icon: Smartphone,
      titleKey: 'solutions.mobile.title',
      descriptionKey: 'solutions.mobile.description',
      linkKey: 'common.learnMore',
      linkTo: '#mobile'
    },
    {
      icon: LayoutGrid,
      titleKey: 'solutions.business.title',
      descriptionKey: 'solutions.business.description',
      linkKey: 'common.learnMore',
      linkTo: '#business'
    },
    {
      icon: Gamepad2,
      titleKey: 'solutions.interactive.title',
      descriptionKey: 'solutions.interactive.description',
      linkKey: 'common.learnMore',
      linkTo: '#interactive'
    }
  ];

  return (
    <div className="bg-[#18181b] py-24" id="solutions">
      <div className="container mx-auto px-6">
        <h2 className="text-[#00B7FF] text-3xl font-semibold text-center">
          Our Solutions
        </h2>
        
        <h3 className="text-white text-2xl font-bold text-center mt-4 mb-16">
          We offer flexible solutions for your business
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              titleKey={solution.titleKey}
              descriptionKey={solution.descriptionKey}
              linkKey={solution.linkKey}
              linkTo={solution.linkTo}
              isTwojo={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}