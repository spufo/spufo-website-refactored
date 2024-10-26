import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollLink from './ScrollLink';
import { useTranslation } from 'react-i18next';
import twojoLogo from '/assets/images/Final_Twojo_Logo_White_SPUFO.png';


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] text-white pt-10 pb-6">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Logo and Company Name */}
        <div className="flex flex-col">
          <ScrollLink to="/" className="flex mb-4">
            <img 
              src={twojoLogo}
              alt="TWOJO Logo" 
              className="h-10"
            />
          </ScrollLink>
          <span className="text-lg font-semibold">Twojo Software GmbH</span>
          <span className=" text-gray-400">CHE-461.740.370</span>
        </div>

        {/* Column 2: Address and Email */}
        <div className="flex flex-col">
        <span className="text-lg font-semibold mb-2">{t('footerAdress')}</span>
        <address className=" text-gray-400">
                Twojo Software GmbH<br />
                Suurstoffi 1<br />
                6343 Rotkreuz<br />
        </address>
        </div>

        {/* Column 2: Address and Email */}
        <div className="flex flex-col">
          <span className="text-lg font-semibold mb-2">{t('footerContact')}</span>
          <address className=" text-gray-400">
            <a href="mailto:contact@spufo.ch" className="text-gray-400 hover:text-[--orange-color] transition-all duration-300">
              contact@spufo.ch
            </a>
          </address>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col">
          <span className="text-lg font-semibold mb-2">{t('footerSocials')}</span>
          <a 
            href="https://www.linkedin.com/company/twojo/" 
            className="flex text-gray-400 hover:text-[--orange-color] transition-all duration-300"
          >
            <FaLinkedin className="mr-2" /> {/* LinkedIn icon */}
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright Notice and Links */}
      <div className="text-center text-gray-400 text-sm mt-16">
        &copy; {new Date().getFullYear()} {t('footerAllRightsReserved')}
        </div>
        <div className="flex justify-start text-gray-400 text-xs mt-2 bottom-0 left-0 ml-4">
            <ScrollLink to="/datenschutz" className="hover:text-[--orange-color] mx-2 transition-all duration-300">{t('footerPrivacyStatement')}</ScrollLink>
            <span className="mx-2">|</span>
            <ScrollLink to="/impressum" className="hover:text-[--orange-color] mx-2 transition-all duration-300">{t('footerPublisher')}</ScrollLink>
        </div>
    </footer>
  );
};

export default Footer;
