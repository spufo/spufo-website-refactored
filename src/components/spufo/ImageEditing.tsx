import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, RotateCcw, Crop, Hash, ImageOff, Sun, Contrast, FlipHorizontal } from 'lucide-react';

export default function ImageEditing() {
    const editingFeatures = [
        {
            icon: ImageOff,
            title: 'Farbinvertierung',
            description:
                'Invertierung der Farben zur verbesserten Sichtbarkeit von Beweismitteln auf dunklem Hintergrund.',
        },
        {
            icon: Sliders,
            title: 'Gamma-Einstellung',
            description:
                'Präzise Anpassung der Gamma-Werte für die Sichtbarmachung feiner Details.',
        },
        {
            icon: Contrast,
            title: 'Kontrastregelung',
            description:
                'Kontrastverstärkung zur deutlicheren Hervorhebung von Fingerabdruckmustern.',
        },
        {
            icon: Sun,
            title: 'Helligkeitsanpassung',
            description:
                'Korrektur von über- oder unterbelichteten Bereichen für optimale Darstellung.',
        },
        {
            icon: RotateCcw,
            title: 'Freie Bildrotation',
            description:
                'Flexible Drehung von Aufnahmen für eine optimale Ausrichtung.',
        },
        {
            icon: Crop,
            title: 'Präziser Bildausschnitt',
            description:
                'Gezieltes Zuschneiden zur Fokussierung auf relevante Bereiche.',
        },
        {
            icon: FlipHorizontal,
            title: 'Bildspiegelung',
            description:
                'Spiegelung von Bildern zur Korrektur der Ausrichtung oder Perspektive.',
        },
        {
            icon: Hash,
            title: 'Beweismittel-Nummerierung',
            description:
                'Fotos können mit Nummern versehen werden, um die Zuordnung zu erleichtern.',
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
                        Professionelle Bildbearbeitung
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nutzen Sie unsere umfangreichen Bildbearbeitungswerkzeuge, um Ihre Spurenaufnahmen optimal für die Analyse vorzubereiten.
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
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
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
                        Alle Bearbeitungsfunktionen sind speziell für die forensische Arbeit optimiert und gewährleisten die Integrität der Beweismittel.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
