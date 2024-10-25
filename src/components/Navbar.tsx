import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollLink from './ScrollLink';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.lang-menu')) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-[#1E1E2E] py-3 md:py-5 px-2 
        transition-transform duration-300 z-40 border-b-4 border-[--orange-color] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-between items-center">
        <ScrollLink to="/" className="text-3xl font-bold text-white flex items-center ml-2 md:ml-6">
          <img 
            src="/src/assets/images/Final_Twojo_Logo_White_SPUFO.png"
            alt="TWOJO Logo" 
            className="h-7 md:h-9 mr-2 md:mr-3"
          />
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex px-20 space-x-16 flex-1">
          <div className="flex space-x-16">
            <ScrollLink to="/spufo" className="text-[--orange-color] hover:text-[--orange-selected-color] text-2xl font-medium tracking-wide transition-colors duration-200">
              SPUFO
            </ScrollLink>
            <ScrollLink to="/blog" className="text-white hover:text-[--orange-color] text-2xl font-medium tracking-wide transition-colors duration-200">
              Blog
            </ScrollLink>
            <ScrollLink to="/about" className="text-white hover:text-[--orange-color] text-2xl font-medium tracking-wide transition-colors duration-200">
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
            className="flex items-center space-x-2 text-white hover:text-[--orange-color] transition-colors duration-200"
          >
            <span>{languages.find(lang => lang.code === i18n.language)?.name || 'Language'}</span>
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
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[--orange-color] transition-colors duration-200"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contact Button */}
        <a 
          href="/contact" 
          className="hidden md:block bg-[--orange-color] text-white px-8 py-3 rounded-xl text-xl font-semibold hover:bg-[--orange-selected-color] transition-all duration-300 mr-6 hover:shadow-lg"
        >
          {t('contact')}
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 hover:bg-[--orange-color] rounded-lg transition-colors duration-200 mr-2"
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
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } md:hidden mt-4 transition-all duration-300 ease-in-out absolute left-0 right-0 bg-[#1E1E2E] border-b-4 border-[--orange-color]`}
      >
        <div className="flex flex-col py-4">
          <ScrollLink to="/spufo" className="text-[--orange-color] hover:text-[--orange-selected-color] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            SPUFO
          </ScrollLink>
          <ScrollLink to="/blog" className="text-white hover:text-[--orange-color] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            Blog
          </ScrollLink>
          <ScrollLink to="/about" className="text-white hover:text-[--orange-color] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            {t('about')}
          </ScrollLink>

          {/* Mobile Language Selector */}
          <div className="px-6 py-3 border-t border-gray-700">
            <div className="text-white mb-2">Language</div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${i18n.language === lang.code 
                      ? 'bg-[--orange-color] text-white' 
                      : 'bg-gray-700 text-white hover:bg-[--orange-color]'}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 pt-3 border-t border-gray-700">
            <ScrollLink
              to="/contact" 
              className="inline-block bg-[--orange-color] text-white px-3 py-2 rounded-xl font-semibold hover:bg-[--orange-selected-color] transition-all duration-300 hover:shadow-lg mt-0"
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
