import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import rulerRecognitionImage from '/assets/images/ruler_recognition.jpg';

const RulerRecognition = () => {
  const { t } = useTranslation();

  const extraFeatureKeys = [
    'rulerRecognition.extra_features.ultra_high_resolution',
    'rulerRecognition.extra_features.embedded_gps_metadata',
    'rulerRecognition.extra_features.supports_raw_tiff',
    'rulerRecognition.extra_features.true_to_scale_output',
    'rulerRecognition.extra_features.automatic_ruler_detection',
    'rulerRecognition.extra_features.greyscale_enhancement',
    'rulerRecognition.extra_features.original_image_preservation',
    'rulerRecognition.extra_features.advanced_processing_algorithms'
  ];


  const features = [
    {
      title: t('rulerRecognition.features.accurate_measurements.title'),
      description: t('rulerRecognition.features.accurate_measurements.description'),
    },
    {
      title: t('rulerRecognition.features.high_quality_images.title'),
      description: t('rulerRecognition.features.high_quality_images.description'),
    },
    {
      title: t('rulerRecognition.features.detailed_documentation.title'),
      description: t('rulerRecognition.features.detailed_documentation.description'),
    }
  ];

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
            {t('rulerRecognition.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('rulerRecognition.description')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-20 relative">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={rulerRecognitionImage}
                alt={t('rulerRecognition.title')}
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              />
              <p className="text-sm text-gray-500 italic text-center mt-4">20min.ch</p>
            </motion.div>

            {/* Features Side */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[--orange-color] mb-6">
              {t('rulerRecognition.advanced_capabilities')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('rulerRecognition.comprehensive_suite')}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {extraFeatureKeys.map((key, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{t(key)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RulerRecognition;
