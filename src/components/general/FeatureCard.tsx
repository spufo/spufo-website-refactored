import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollLink from './ScrollLink';

interface FeatureCardProps {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  linkKey?: string;
  linkTo?: string;
  isTwojo?: boolean;
}

export default function FeatureCard({ 
  icon: Icon, 
  titleKey,
  descriptionKey,
  linkKey,
  linkTo,
  isTwojo = false 
}: FeatureCardProps) {
  const { t } = useTranslation();

  return (
    <div 
      className={`
        rounded-3xl shadow-lg p-8 flex flex-col h-full 
        transform hover:scale-105 transition duration-300
        ${isTwojo ? 'bg-[#111] text-white' : 'bg-white text-black'}
      `}
    >
      <div className={`${isTwojo ? 'bg-[#00B7FF]' : 'bg-[--orange-color]'} rounded-full p-4 mb-6 self-start`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className={`text-2xl font-bold mb-4 ${isTwojo ? 'text-white' : 'text-black'}`}>
        {t(titleKey)}
      </h3>
      
      <p className={`mb-6 flex-grow ${isTwojo ? 'text-gray-400' : 'text-gray-600'}`}>
        {t(descriptionKey)}
      </p>
      
      {linkTo != null && linkKey != null && (<ScrollLink 
        to={linkTo}
        className={`
          ${isTwojo ? 'text-[#00B7FF]' : 'text-[--orange-color]'} font-semibold flex items-center 
          group mt-auto ${isTwojo ? 'hover:text-[#0095d1]' : 'hover:text-[--orange-selected-color]'} transition-colors
        `}
      >
        {t(linkKey)}
        <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">
          →
        </span>
      </ScrollLink>
      )}</div>
  );
}