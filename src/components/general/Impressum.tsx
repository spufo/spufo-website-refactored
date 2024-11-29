import { useTranslation } from 'react-i18next';

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#111] text-white overflow-hidden flex flex-col min-h-screen">
      {/* Dots Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="flex-grow flex flex-col max-w-5xl mx-auto py-24 px-6 mt-24 z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-[#00B7FF] mb-12 text-center">{t('impressum.publisher')}</h1>
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
            <a href="mailto:contact@spufo.ch" className="text-[#00B7FF] hover:underline"> contact@spufo.ch</a>
          </p>
          <p className="text-lg text-center">{t('impressum.commercialRegister')}: CHE-461.740.370</p>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
