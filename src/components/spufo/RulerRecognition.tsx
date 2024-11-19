import React from 'react';
import { motion } from 'framer-motion';

export default function RulerRecognition() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[--orange-color] mb-8">
            Ruler Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced image processing technology for precise measurements and documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/assets/images/camera.png"
              alt="Ruler Recognition Example"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Precise Measurement Technology
              </h3>
              <p className="text-gray-600">
                Our advanced ruler recognition system ensures accurate measurements in every image. 
                The technology automatically detects and calibrates with measurement tools in the frame, 
                providing reliable dimensional data for your documentation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1:1 Scale Image Output
              </h3>
              <p className="text-gray-600">
                All images are processed and exported at true 1:1 scale, ensuring that measurements 
                remain accurate across all platforms and viewing devices. This makes our solution 
                ideal for professional documentation and analysis.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Image Formats
              </h3>
              <p className="text-gray-600">
                Images are saved in high-quality RAW or TIFF formats, preserving all essential details. 
                The greyscale output ensures optimal contrast and clarity, making measurements and 
                details easily distinguishable.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-100 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Automatic ruler detection and calibration</li>
            <li>True 1:1 scale image output</li>
            <li>High-quality RAW and TIFF format support</li>
            <li>Professional greyscale processing</li>
            <li>Automatic measurement markers</li>
            <li>Integrated calibration verification</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
