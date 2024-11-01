import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollLink from './ScrollLink';
import twojoLogoSpufo from '/assets/images/Final_Twojo_Logo_White_SPUFO.png';
import twojoLogo from '/assets/images/Final_Twojo_Logo_White.png';

interface NavbarProps {
  activePath: string;
  twojo: boolean;
}

const Navbar = ({ activePath, twojo }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'GB', name: 'English', flag: 'gb' },
    { code: 'de', label: 'DE', name: 'Deutsch', flag: 'de' },
    { code: 'it', label: 'IT', name: 'Italiano', flag: 'it' },
    { code: 'fr', label: 'FR', name: 'Français', flag: 'fr' }
  ];

  const getFlagUrl = (code: string) => {
    return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setIsVisible(true);
        return;
      } 

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Handle language menu close
      if (target != null && !target.closest('.lang-menu')) {
        setIsLangMenuOpen(false);
      }
      // Handle mobile menu close when clicking outside
      if (navRef.current && !navRef.current.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Conditional colors based on the 'twojo' prop
  const backgroundColor = twojo ? 'bg-black' : 'bg-[#1E1E2E]';
  const textColor = 'text-white';
  const textColorActive = twojo ? 'text-[--blue-color]' : 'text-[--orange-color]';
  const hoverTextColor = twojo ? 'hover:text-[--blue-selected-color]' : 'hover:text-[--orange-color]';
  const borderColor = twojo ? 'border-[--blue-color]' : 'border-[--orange-color]';
  const buttonBgColor = twojo ? 'bg-[--blue-color]' : 'bg-[--orange-color]';
  const buttonHoverBgColor = twojo ? 'hover:bg-[--blue-selected-color]' : 'hover:bg-[--orange-selected-color]';
  const logoImage = twojo ? twojoLogo : twojoLogoSpufo;

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 ${backgroundColor} py-3 md:py-5 px-2 
        transition-all duration-500 ease-in-out z-40 border-b-4 ${borderColor} 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-between items-center">
        <ScrollLink 
          to="/" 
          className="text-3xl font-bold text-white flex items-center ml-2 md:ml-6"
          onClick={handleMobileMenuClick}
        >
          <img 
            src={logoImage}
            alt="TWOJO Logo" 
            className="h-7 min-w-20 md:h-9 mr-2 md:mr-3 object-contain"
          />
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex px-20 space-x-16 flex-1">
          <div className="flex space-x-16">
            <ScrollLink to="/spufo" className={`${activePath == "spufo" ? textColorActive : textColor} ${hoverTextColor} text-2xl font-medium tracking-wide transition-colors duration-300`}>
              SPUFO
            </ScrollLink>
            <ScrollLink to="/blog" className={`${activePath == "blog" ? textColorActive : textColor} ${hoverTextColor} text-2xl font-medium tracking-wide transition-colors duration-300`}>
              Blog
            </ScrollLink>
            <ScrollLink to="/about" className={`${activePath == "about" ? textColorActive : textColor} ${hoverTextColor} text-2xl font-medium tracking-wide transition-colors duration-300`}>
              {t('about')}
            </ScrollLink>
          </div>
        </div>

        {/* Desktop Language Selector */}
        <div className="hidden md:block relative lang-menu mr-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLangMenuOpen(!isLangMenuOpen);
            }}
            className="flex items-center space-x-2 text-white hover:text-./assets/ transition-colors duration-300"
          >
            <span className="flex items-center">
              <img 
                src={getFlagUrl(languages.find(lang => lang.code === i18n.language)?.flag || 'de')}
                alt=""
                className="w-6 h-4 mr-2"
              />
              {languages.find(lang => lang.code === i18n.language)?.name}
            </span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isLangMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <img 
                    src={getFlagUrl(lang.flag)}
                    alt=""
                    className="w-6 h-4 mr-2"
                  />
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contact Button */}
        <ScrollLink 
          to="/contact" 
          className={`hidden md:block ${buttonBgColor} text-white px-8 py-3 rounded-xl text-xl font-semibold transform-gpu transition-all duration-500 ease-in-out mr-6 hover:scale-105 ${buttonHoverBgColor} hover:shadow-lg active:scale-95`}
        >
          {t('contact')}
        </ScrollLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className={`text-white focus:outline-none p-2 hover:${buttonBgColor} rounded-lg transition-colors duration-300 mr-2`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${
          isOpen && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } md:hidden mt-4 transition-all duration-300 ease-in-out absolute left-0 right-0 ${backgroundColor} border-b-4 ${borderColor} `}
      >
        <div className="flex flex-col py-4">
          <ScrollLink 
            to="/spufo" 
            onClick={handleMobileMenuClick}
            className={`${activePath == "spufo" ? textColorActive : textColor}  ${hoverTextColor} font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-300`}
          >
            SPUFO
          </ScrollLink>
          <ScrollLink 
            to="/blog" 
            onClick={handleMobileMenuClick}
            className={`${activePath == "blog" ? textColorActive : textColor}  ${hoverTextColor} font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-300`}
          >
            Blog
          </ScrollLink>
          <ScrollLink 
            to="/about" 
            onClick={handleMobileMenuClick}
            className={`${activePath == "about" ? textColorActive : textColor} ${hoverTextColor} font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-300`}
          >
            {t('about')}
          </ScrollLink>

          {/* Mobile Language Selector */}
          <div className="px-6 py-3 border-t border-gray-700">
            <div className="text-white mb-2">Language</div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    handleMobileMenuClick();
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center
                    ${i18n.language === lang.code 
                      ? `${buttonBgColor} text-white` 
                      : `bg-gray-700 text-white hover:${buttonBgColor}`}`}
                >
                  <img 
                    src={getFlagUrl(lang.flag)}
                    alt=""
                    className="w-6 h-4 mr-2"
                  />
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 pt-3 border-t border-gray-700">
            <ScrollLink
              to="/contact" 
              onClick={handleMobileMenuClick}
              className={`inline-block ${buttonBgColor} text-white px-3 py-2 rounded-xl font-semibold transform-gpu transition-all duration-500 ease-in-out hover:scale-105 ${buttonHoverBgColor} hover:shadow-lg active:scale-95 mt-0`}
            >
              {t('contact')}
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
