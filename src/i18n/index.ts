import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslations from './en/translations';
import deTranslations from './de/translations';
import frTranslations from './fr/translations';
import itTranslations from './it/translations';

const resources = {
  en: enTranslations,
  de: deTranslations,
  it: itTranslations,
  fr: frTranslations,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // Set German as default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
