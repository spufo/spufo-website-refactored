import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Search,  Stamp} from 'lucide-react';

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
            Operational Success with Zurich Police
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How SPUFO revolutionizes forensic fingerprint photography in real police operations
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
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg p-8 shadow-lg mb-12"
        >
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-[--orange-color] mr-4" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Widespread Adoption in Zurich
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            SPUFO has achieved significant milestones in its deployment across Zurich's law enforcement:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Implemented by FOR Zurich since April 2024</li>
            <li>Full adoption by the Cantonal Police (KAPO) since October 2024</li>
            <li>Currently being utilized by thousands of police officers in their daily operations</li>
          </ul>
        </motion.div>

        <div className="grid gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Search className="w-8 h-8 text-[--orange-color] mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Improved Investigation Efficiency
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              By streamlining the fingerprint photography process, SPUFO has significantly reduced the time required for evidence collection at crime scenes. This efficiency allows forensic teams to process more cases while maintaining the highest standards of evidence quality.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Stamp className="w-8 h-8 text-[--orange-color] mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
              Professional Standard
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
            SPUFO continues to serve as the standard tool for forensic fingerprint photography in Zurich Police operations, demonstrating its effectiveness and reliability in real-world law enforcement scenarios.
          </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
