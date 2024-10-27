import React from 'react';
import { Fingerprint, GitBranch, Maximize, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Fingerprint,
      featureKey: 'feature1',
      linkTo: '#security'
    },
    {
      icon: GitBranch,
      featureKey: 'feature2',
      linkTo: '#version-control'
    },
    {
      icon: Maximize,
      featureKey: 'feature3',
      linkTo: '#scalability'
    },
    {
      icon: Award,
      featureKey: 'feature4',
      linkTo: '#quality'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-100" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-[--orange-color] mb-20">
          {t('featuresTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              titleKey={`${feature.featureKey}.title`}
              descriptionKey={`${feature.featureKey}.description`}
              linkKey={`${feature.featureKey}.link`}
              linkTo={feature.linkTo}
              isTwojo={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}