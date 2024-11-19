import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Search, Stamp } from 'lucide-react';

export default function ForensicSuccess() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[--orange-color] mb-6">
            {t('forensicSuccess.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('forensicSuccess.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          <img
            src="/assets/images/police_bluelight.jpg"
            alt="Police Blue Light"
            className=" rounded-lg shadow-lg w-3/4"
          />
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-[--orange-color] mr-4 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {t('forensicSuccess.adoption.title')}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 ml-12">
              {t('forensicSuccess.adoption.description')}
            </p>
            <ul className="list-disc pl-18 text-gray-600 space-y-2 ml-12">
              {(t('forensicSuccess.adoption.points', { returnObjects: true }) as string[]).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-4">
              <Search className="w-8 h-8 text-[--orange-color] mr-4 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {t('forensicSuccess.efficiency.title')}
              </h3>
            </div>
            <p className="text-gray-600 ml-12">
              {t('forensicSuccess.efficiency.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-4">
              <Stamp className="w-8 h-8 text-[--orange-color] mr-4 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {t('forensicSuccess.standard.title')}
              </h3>
            </div>
            <p className="text-gray-600 ml-12">
              {t('forensicSuccess.standard.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
