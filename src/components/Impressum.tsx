import React from 'react';
import { useTranslation } from 'react-i18next';
import background from '/assets/images/Background.png';

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <section className="relative text-white bg-black overflow-hidden flex flex-col min-h-screen">
      {/* Dots Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Fingerprint background */}
      <div 
        className="absolute sm:-translate-y-40 -translate-x-80 sm:-translate-x-0 rotate-[46deg] sm:rotate-[34deg] scale-[1] sm:scale-[0.9] inset-0 bg-no-repeat bg-center opacity-10 z-0 pointer-events-none"
      >
        <img src={background} alt="Background" />
      </div>

      <div className="flex-grow flex flex-col max-w-5xl mx-auto py-24 px-6 mt-24 z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-cyan-400 mb-12 text-center">{t('impressum.publisher')}</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg md:text-xl mb-4 text-center">{t('impressum.operatedBy')}</p>
          <h2 className="text-2xl font-semibold mb-2 text-center">{t('impressum.companyName')}</h2>
          <p className="text-lg mb-2 text-center">
            {t('impressum.addressLine1')}<br />
            {t('impressum.addressLine2')}
          </p>
          <p className="text-lg mb-2 text-center">
            {t('impressum.street')}<br />
            {t('impressum.cityCode')}
          </p>
          <p className="text-lg mb-2 text-center">
            {t('impressum.email')}: 
            <a href="mailto:contact@spufo.ch" className="text-cyan-400 hover:underline"> contact@spufo.ch</a>
          </p>
          <p className="text-lg text-center">{t('impressum.commercialRegister')}: CHE-461.740.370</p>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
