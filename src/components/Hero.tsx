import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollLink from './ScrollLink';
import curved_FinalSpufoLogo from '/assets/images/Curved_FinalSpufoLogo.svg';
import heroMockup from '/assets/images/HeroMockup.png';
import logo_FOR_RGB from '/assets/images/Logo_FOR_RGB.svg';
import background from '/assets/images/Background.png';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex items-start md:items-center overflow-hidden mt-0">
      <div className="flex flex-col md:flex-row items-stretch justify-between max-w-[100rem] mx-auto w-full px-6 over mt-16 md:mt-0">
          {/* Fingerprint background */}
          <div 
            className="absolute invert sm:-translate-y-40 -translate-x-80 sm:-translate-x-0 rotate-[46deg] sm:rotate-[34deg] scale-[1.5] sm:scale-[0.9] inset-0 bg-contain bg-no-repeat bg-center opacity-100 z-0 pointer-events-none"
          >
          <img src={background} alt="Background" /></div>
        <div className="md:w-1/2 py-4 md:py-12 flex flex-col items-center md:items-start justify-center relative w-full">
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center md:items-start w-full">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <img src={curved_FinalSpufoLogo} alt="SPUFO Logo" className="w-20 mr-4" />
              <h1 className="text-4xl md:text-8xl font-bold text-[#1E1E2E]">SPUFO</h1>
            </div>
            <h2 className="text-xl md:text-3xl text-[--orange-color] mb-5 text-center md:text-left">
              {t('heroTitle')}
            </h2>
            <p className="text-xl md:text-5xl font-bold mb-8 text-[#1E1E2E] text-center md:text-left">
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mr-2">
                {t('heroDigital')}
              </span>
               - 
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">
                {t('heroFast')}
              </span>
                - 
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">
                {t('heroEfficient')}
              </span>
            </p>
                
            <div className="flex flex-row space-x-4 w-full md:w-auto">
              <ScrollLink to="/contact" className="bg-[--orange-color] border-2 border-[--orange-color] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-xl font-semibold hover:border-[--orange-selected-color] hover:bg-[--orange-selected-color] transition duration-300 transform hover:scale-105 flex-1 md:flex-initial text-center">
                {t('tryNow')}
              </ScrollLink>
              <ScrollLink to="/brochure" className="bg-transparent border-2 border-[--orange-color] text-[--orange-color] px-4 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-xl font-semibold hover:bg-[--orange-color] hover:text-white transition duration-300 transform hover:scale-105 flex-1 md:flex-initial text-center">
                {t('pdfBrochure')}
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white py-0 md:py-12 flex flex-col justify-center items-center">
          <img
            src={heroMockup}
            alt="SPUFO App"
            className="max-w-full h-auto transform scale-75 sm:scale-90 md:scale-150 -mt-8 sm:mt-0"
          />
        </div>
      </div>
      {/* Collaboration text and logo */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
        <p className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">
          {t('developedWith')}
        </p>
        <img 
          src={logo_FOR_RGB}
          alt="FOR Zürich" 
          className="h-14 mb-12 sm:mb-0 sm:h-16"
        />
      </div>
      {/* Scroll down button */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 text-[--orange-color] hover:text-[--orange-selected-color] transition-colors duration-300 hidden md:block"
      >
        <ChevronDown className="w-12 h-12 animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;
