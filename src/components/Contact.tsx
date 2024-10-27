import React from 'react';
import { Mail, Send, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import background from '/assets/images/Background.png';

interface ContactProps {
  twojo?: boolean;
}

const Contact = ({ twojo = false }: ContactProps) => {
  const { t } = useTranslation();

  // Define color classes based on twojo prop
  const accentColor = twojo ? 'text-cyan-400' : 'text-[--orange-color]';
  const hoverAccentColor = twojo ? 'hover:text-cyan-400' : 'hover:text-[--orange-color]';
  const bgAccentColor = twojo ? 'bg-cyan-400' : 'bg-[--orange-color]';
  const hoverBgAccentColor = twojo ? 'hover:bg-cyan-500' : 'hover:bg-[--orange-selected-color]';
  const focusBorderColor = twojo ? 'focus:border-cyan-400' : 'focus:border-[--orange-color]';
  const focusRingColor = twojo ? 'focus:ring-cyan-400' : 'focus:ring-[--orange-color]';
  const sectionBg = twojo ? 'bg-black' : 'bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A]';
  const formBg = twojo ? 'bg-[#1E1E2E]/50' : 'bg-[#2A2A3C]/50';
  const inputBg = twojo ? 'bg-black/50' : 'bg-[#1E1E2E]/50';

  return (
    <section className={`relative ${sectionBg} text-white py-24 overflow-hidden`}>
      {twojo && (
        <>
          {/* Dots Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10 z-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Fingerprint background */}
          <div 
            className="absolute sm:-translate-y-40 -translate-x-80 sm:-translate-x-0 rotate-[46deg] sm:rotate-[34deg] scale-[1] sm:scale-[0.9] inset-0 bg-no-repeat bg-center opacity-10 z-0 pointer-events-none"
          >
            <img src={background} alt="Background" />
          </div>
        </>
      )}

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-4">
          {t('contactTitle')}
        </h2>
        <p className="text-center text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          {t('contactSubtitle')}
        </p>

        <div className="flex justify-center gap-8 mb-16">
          <div className="flex items-center text-white">
            <Mail className={`w-5 h-5 mr-2 ${accentColor}`} />
            <a 
              href="mailto:contact@spufo.ch" 
              className={`text-lg ${hoverAccentColor} hover:scale-[1.05] transition-all duration-300`}
            >
              contact@spufo.ch
            </a>
          </div>
          <div className="flex items-center text-white">
            <MapPin className={`w-5 h-5 mr-2 ${accentColor}`} />
            <span className="text-lg">{t('location')}</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form className={`${formBg} backdrop-blur-lg p-8 rounded-xl shadow-2xl`} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  {t('name')} {t('required')}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={`w-full px-4 py-3 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors`} 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  {t('emailAddress')} {t('required')}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`w-full px-4 py-3 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors`} 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">
                  {t('company')} {t('required')}
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className={`w-full px-4 py-3 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors`} 
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                  {t('phone')}
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className={`w-full px-4 py-3 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors`} 
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                {t('subject')} {t('required')}
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className={`w-full px-4 py-3 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors`} 
                required 
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                {t('message')} {t('required')}
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                className={`w-full px-6 py-4 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors resize-none`} 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`w-full ${bgAccentColor} text-white px-8 py-3 rounded-xl text-lg font-semibold ${hoverBgAccentColor} transition-colors duration-300`}
            >
              {t('sendMessage')}
              <Send className="w-5 h-5 ml-2 inline-block" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
