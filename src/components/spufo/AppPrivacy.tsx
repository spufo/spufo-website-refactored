import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AppPrivacy = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 pt-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[--orange-color] mb-6">
            {t('appPrivacy.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('appPrivacy.subtitle')}
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[--orange-color] mb-6">{t('appPrivacy.permissions.title')}</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold">•</span>
                  <span><strong>{t('appPrivacy.permissions.location.title')}:</strong> {t('appPrivacy.permissions.location.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold">•</span>
                  <span><strong>{t('appPrivacy.permissions.photos.title')}:</strong> {t('appPrivacy.permissions.photos.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold">•</span>
                  <span><strong>{t('appPrivacy.permissions.camera.title')}:</strong> {t('appPrivacy.permissions.camera.description')}</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[--orange-color] mb-6">{t('appPrivacy.processing.title')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('appPrivacy.processing.description')}
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-[--orange-color] mb-6">{t('appPrivacy.localData.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.photos.title')}:</strong> {t('appPrivacy.localData.photos.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.location.title')}:</strong> {t('appPrivacy.localData.location.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.device.title')}:</strong> {t('appPrivacy.localData.device.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.language.title')}:</strong> {t('appPrivacy.localData.language.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.initials.title')}:</strong> {t('appPrivacy.localData.initials.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.caseLifetime.title')}:</strong> {t('appPrivacy.localData.caseLifetime.description')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[--orange-color] font-semibold text-lg">•</span>
                  <span><strong>{t('appPrivacy.localData.caseData.title')}:</strong> {t('appPrivacy.localData.caseData.description')}</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-[--orange-color] mb-6">{t('appPrivacy.externalData.title')}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-[--orange-color]">{t('appPrivacy.externalData.googleMaps.title')}:</strong> {t('appPrivacy.externalData.googleMaps.description')}
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[--orange-color] mb-6">{t('appPrivacy.deletion.title')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('appPrivacy.deletion.description')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppPrivacy;
