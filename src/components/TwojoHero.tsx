import React from 'react';
import { useTranslation } from 'react-i18next';
import matterhorn from '/assets/images/matterhorn-cropped.jpg';
import matterhornMobile from '/assets/images/matterhorn-mobile.jpg';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const { t } = useTranslation();

    const scrollToAbout = () => {
      const partnersSection = document.getElementById('partners');
      if (partnersSection) {
        partnersSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  return (
    <div className="relative h-[65vh] md:min-h-screen overflow-hidden mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
      > <img className="absolute inset-0 w-screen h-screen object-cover invisible md:visible" src={matterhorn} alt="Background" />
       <img className="absolute inset-0 w-screen h-screen object-cover visible md:invisible" src={matterhornMobile} alt="Background" />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 md:from-black/10 md:via-black/30 md:to-black/80"></div>:
      </div>
      
      <div className="relative h-full flex pt-[20vh] md:pt-[30vh] md:pl-[20vh]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl ml-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('twojo.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-white leading-relaxed">
              {t('twojo.hero.subTitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal line separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div 
          className="relative h-12 md:h-24 overflow-hidden"
          style={{ 
            clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div 
            className="absolute inset-0 bg-black w-[200%] origin-top-left"
            style={{ 
              transform: 'rotate(0deg)',
            }}
          />
        </div>
      </div>
      {/* Scroll down button */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 text-[--blue-color] hover:text-[--blue-selected-color] transition-colors duration-300 hidden md:block"
      >
        <ChevronDown className="w-12 h-12 animate-bounce" />
      </button>
    </div>
  );
}
