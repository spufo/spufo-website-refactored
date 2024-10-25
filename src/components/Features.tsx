import React from 'react';
import { Fingerprint, GitBranch, Maximize, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollLink from './ScrollLink';

const FeatureCard = ({ icon, featureKey }: { icon: React.ReactNode; featureKey: string }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col h-full transform hover:scale-105 transition duration-300">
      <div className="bg-[--orange-color] rounded-full p-4 mb-6 self-start">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{t(`${featureKey}.title`)}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{t(`${featureKey}.description`)}</p>
      <ScrollLink to="#" className="text-[--orange-color] font-semibold flex items-center hover:underline mt-auto group">
        {t(`${featureKey}.link`)} <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">→</span>
      </ScrollLink>
    </div>
  );
};

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-[--orange-color] mb-20">
          {t('featuresTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard
            icon={<Fingerprint className="w-8 h-8 text-white" />}
            featureKey="feature1"
          />
          <FeatureCard
            icon={<GitBranch className="w-8 h-8 text-white" />}
            featureKey="feature2"
          />
          <FeatureCard
            icon={<Maximize className="w-8 h-8 text-white" />}
            featureKey="feature3"
          />
          <FeatureCard
            icon={<Award className="w-8 h-8 text-white" />}
            featureKey="feature4"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
