import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Timer, ArrowRight, Database, MapPin, Clock, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import camera from '/assets/images/camera.png';
import cameraFlashlight from '/assets/images/camera_flashlight.png';
import tripod from '/assets/images/tripod.png';
import gelatine from '/assets/images/gelatine.png';
import smartphone from '/assets/images/smartphone.png';
import flashlight from '/assets/images/flashlight.png';



const EvidenceCollection = () => {
  const { t } = useTranslation();

  const traditionalEquipment = [
    { 
      name: t('evidence.traditional.dslr.name'),
      image: camera,
      negatives: [t('evidence.traditional.dslr.negative1'), t('evidence.traditional.dslr.negative2')]
    },
    { 
      name: t('evidence.traditional.flash.name'), 
      image: cameraFlashlight,
      negatives: [t('evidence.traditional.flash.negative1'), t('evidence.traditional.flash.negative2')]
    },
    { 
      name: t('evidence.traditional.tripod.name'), 
      image: tripod,
      negatives: [t('evidence.traditional.tripod.negative1'), t('evidence.traditional.tripod.negative2')]
    },
    { 
      name: t('evidence.traditional.gelatin.name'), 
      image: gelatine,
      negatives: [t('evidence.traditional.gelatin.negative1'), t('evidence.traditional.gelatin.negative2')]
    },
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
            {t('evidence.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('evidence.subtitle')}
          </p>
        </motion.div>

        {/* Main Comparison */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-20 relative">
            {/* Arrow between columns - hidden on mobile */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="w-12 h-12 text-[--orange-color] -mx-6" />
            </div>

            {/* Traditional Side */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-full">
              <div className="text-center mb-6">
                <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-medium mb-2">
                  {t('evidence.traditional.label')}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t('evidence.traditional.title')}</h2>
                <p className="text-gray-600 mt-2">{t('evidence.traditional.subtitle')}</p>
              </div>

              <div className="flex-grow space-y-4">
                {traditionalEquipment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-24 h-24 flex-shrink-0 bg-white rounded-lg p-3 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <div className="space-y-1">
                        {item.negatives.map((negative, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span>{negative}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Traditional Summary */}
              <div className="mt-auto p-4 bg-red-50 rounded-xl">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Timer className="w-5 h-5 text-red-500" />
                  <span className="text-red-600 font-medium">{t('evidence.traditional.timeImpact.title')}</span>
                </div>
                <p className="text-gray-600 text-sm text-center">{t('evidence.traditional.timeImpact.description')}</p>
              </div>
            </div>

            {/* SPUFO Side */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-full">
              <div className="text-center mb-6">
                <div className="inline-block bg-orange-100 text-[--orange-color] px-6 py-2 rounded-full text-sm font-medium mb-2">
                  {t('evidence.spufo.label')}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t('evidence.spufo.title')}</h2>
                <p className="text-gray-600 mt-2">{t('evidence.spufo.subtitle')}</p>
              </div>

              <div className="flex-grow flex flex-col space-y-6">
                {/* Phone Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[--orange-color]/5 rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-56 h-56 bg-white rounded-lg p-6 flex items-center justify-center">
                      <img src={smartphone} alt="Smartphone" className="w-48 h-48 object-contain" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[--orange-color] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t('evidence.spufo.advantage1')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[--orange-color] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t('evidence.spufo.advantage2')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[--orange-color] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t('evidence.spufo.advantage3')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[--orange-color] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t('evidence.spufo.advantage4')}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Optional Enhancement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[--orange-color]/5 rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-36 h-36 bg-white rounded-lg p-4 flex items-center justify-center">
                      <img src={flashlight} alt="Flashlight" className="w-28 h-28 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('evidence.spufo.optional.title')}</h3>
                  <p className="text-sm text-gray-600">{t('evidence.spufo.optional.description')}</p>
                </motion.div>

                {/* SPUFO Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-auto bg-gradient-to-r from-[--orange-color] to-orange-500 rounded-xl p-4 text-white"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <Shield className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold mb-1">{t('evidence.spufo.summary.title')}</h3>
                      <p className="text-sm opacity-90">{t('evidence.spufo.summary.description')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Information Storage Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[--orange-color] mb-6">{t('evidence.caseInfo.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('evidence.caseInfo.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Details Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[--orange-color]/5 to-[--orange-color]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[--orange-color]/10 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-[--orange-color]" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('evidence.caseInfo.details.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t('evidence.caseInfo.details.classification.title')}</p>
                      <p className="text-gray-600 text-sm">{t('evidence.caseInfo.details.classification.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t('evidence.caseInfo.details.subject.title')}</p>
                      <p className="text-gray-600 text-sm">{t('evidence.caseInfo.details.subject.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Information Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[--orange-color]/5 to-[--orange-color]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[--orange-color]/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[--orange-color]" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('evidence.caseInfo.location.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t('evidence.caseInfo.location.address.title')}</p>
                      <p className="text-gray-600 text-sm">{t('evidence.caseInfo.location.address.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t('evidence.caseInfo.location.specific.title')}</p>
                      <p className="text-gray-600 text-sm">{t('evidence.caseInfo.location.specific.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Temporal Data Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[--orange-color]/5 to-[--orange-color]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[--orange-color]/10 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-[--orange-color]" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('evidence.caseInfo.time.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t('evidence.caseInfo.time.date.title')}</p>
                      <p className="text-gray-600 text-sm">{t('evidence.caseInfo.time.date.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t('evidence.caseInfo.time.stamps.title')}</p>
                      <p className="text-gray-600 text-sm">{t('evidence.caseInfo.time.stamps.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EvidenceCollection;
