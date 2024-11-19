import React from 'react';
import { motion } from 'framer-motion';
import { Check, FileText } from 'lucide-react';
import rulerRecognitionImage from '/assets/images/ruler_recognition.jpg';

const RulerRecognition = () => {
  const features = [
    {
      title: 'Accurate Measurements',
      description: 'Automatically detects rulers and calculates precise dimensions. Specialized rulers with ArUco markers are recommended for best results.',
    },
    {
      title: 'High-Quality Images',
      description: 'Produces images at 1000 DPI resolution, preserving detail for reliable analysis. Original images are always preserved for traceability.',
    },
    {
      title: 'Detailed Documentation',
      description: 'Export images with metadata like GPS coordinates and timestamps. Supports RAW and TIFF formats for flexibility.',
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
            Ruler Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced measurement and documentation capabilities for precise evidence recording
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
                alt="Ruler Recognition Example"
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <p className="text-sm text-gray-500 italic text-center mt-4">Image credit: 20min.ch</p>
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
            <h2 className="text-3xl font-bold text-[--orange-color] mb-6">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive suite of features for professional evidence documentation
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {[
                'Ultra-high resolution at 1000 DPI',
                'Embedded GPS and metadata',
                'Supports RAW and TIFF formats',
                'True-to-scale output',
                'Automatic ruler detection',
                'Greyscale enhancement',
                'Original image preservation',
                'Advanced processing algorithms'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <Check className="w-5 h-5 text-[--orange-color] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
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
