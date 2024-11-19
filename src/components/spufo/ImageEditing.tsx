import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, RotateCcw, Crop, Hash, ImageOff, Sun, Contrast, FlipHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ImageEditing() {
    const { t } = useTranslation();

    const editingFeatures = [
        {
            icon: ImageOff,
            translationKey: 'colorInversion'
        },
        {
            icon: Sliders,
            translationKey: 'gamma'
        },
        {
            icon: Contrast,
            translationKey: 'contrast'
        },
        {
            icon: Sun,
            translationKey: 'brightness'
        },
        {
            icon: RotateCcw,
            translationKey: 'rotation'
        },
        {
            icon: Crop,
            translationKey: 'crop'
        },
        {
            icon: FlipHorizontal,
            translationKey: 'mirror'
        },
        {
            icon: Hash,
            translationKey: 'numbering'
        },
    ]

    return (
        <div className="min-h-screen bg-gray-100 pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[--orange-color] mb-6">
                        {t('imageEditing.title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('imageEditing.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {editingFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <feature.icon className="w-8 h-8 text-[--orange-color] mr-3" />
                                <h3 className="text-xl font-semibold">
                                    {t(`imageEditing.features.${feature.translationKey}.title`)}
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                {t(`imageEditing.features.${feature.translationKey}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        {t('imageEditing.bottomText')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
