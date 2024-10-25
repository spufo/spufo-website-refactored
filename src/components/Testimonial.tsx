import React from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-gray-100 text-[#1E1E2E]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-[--orange-color] mb-12 text-center">
          {t('testimonialTitle')}
        </h2>
        <div className="relative">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-[--orange-color] opacity-25 transform -translate-x-1/2 -translate-y-1/2" />
          <blockquote className="text-2xl md:text-4xl font-light italic text-center mb-8 relative z-10">
            «Das Beispiel <span className="text-[--orange-color] font-normal">SPUFO</span> zeigt auf, wie bedeutsam neue <span className="text-[--orange-color] font-normal">Technologien</span> auch für die Kriminaltechnik sind.» ...<br/> «Die App sorgt für deutlich mehr <span className="text-[--orange-color] font-normal">Effizienz</span> und vor allem mehr <span className="text-[--orange-color] font-normal">eingelieferte Spuren</span>.»

          </blockquote>
          <div className="text-center">
            <p className="text-xl font-semibold mb-1">{t('testimonialAuthor')}</p>
            <p className="text-md text-gray-600">{t('testimonialRole')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
