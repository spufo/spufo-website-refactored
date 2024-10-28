import React from 'react';
import { useTranslation } from 'react-i18next';
import heroImage from '/assets/images/HeroMockup.png';
import curved_FinalSpufoLogo from '/assets/images/Curved_FinalSpufoLogo.svg';
import ScrollLink from './ScrollLink';

export default function HighlightedProduct() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-6">
        <h2 className="text-[--orange-color] text-3xl font-bold text-center mb-16">
          {t('twojo.highlightedProduct.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src={curved_FinalSpufoLogo}
                alt="SPUFO Logo" 
                className="w-16 h-16"
              />
              <h3 className="text-white text-5xl font-bold">{t('twojo.highlightedProduct.product.title')}</h3>
            </div>
            
            <p className="text-[--orange-color] text-xl">
              {t('twojo.highlightedProduct.product.subTitle')}
            </p>
            
            <h4 className="text-white text-3xl font-bold">
              {t('twojo.highlightedProduct.product.slogan')}
            </h4>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('twojo.highlightedProduct.product.description')}
            </p>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[--orange-color]">•</span>
                {t('twojo.highlightedProduct.product.bulletPoints.first')}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--orange-color]">•</span>
                {t('twojo.highlightedProduct.product.bulletPoints.second')}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--orange-color]">•</span>
                {t('twojo.highlightedProduct.product.bulletPoints.third')}
              </li>
            </ul>
            <div>
              <ScrollLink to="/spufo" className="bg-[--orange-color] text-white px-8 py-3 mt-8 rounded-md hover:bg-[--orange-selected-color] transition-colors duration-300 font-semibold">
                {t('twojo.highlightedProduct.product.button')}
              </ScrollLink>
            </div>
            
          </div>
          
          {/* Right Column - App Screenshot */}
          <div>
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="SPUFO App Interface"
                className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
