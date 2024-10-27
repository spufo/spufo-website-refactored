import React from 'react';
import { Mail, Send, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] text-white py-24" >
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-4">
          {t('contactTitle')}
        </h2>
        <p className="text-center text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          {t('contactSubtitle')}
        </p>

        <div className="flex justify-center gap-8 mb-16">
          <div className="flex items-center text-white">
            <Mail className="w-5 h-5 mr-2 text-[--orange-color]" />
            <a 
              href="mailto:contact@spufo.ch" 
              className="text-lg hover:text-[--orange-color] hover:scale-[1.05] transition-all duration-300"
            >
              contact@spufo.ch
            </a>
          </div>
          <div className="flex items-center text-white">
            <MapPin className="w-5 h-5 mr-2 text-[--orange-color]" />
            <span className="text-lg">{t('location')}</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form className="bg-[#2A2A3C]/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  {t('name')} {t('required')}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[--orange-color] focus:ring-1 focus:ring-[--orange-color] transition-colors" 
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
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[--orange-color] focus:ring-1 focus:ring-[--orange-color] transition-colors" 
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
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[--orange-color] focus:ring-1 focus:ring-[--orange-color] transition-colors" 
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
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[--orange-color] focus:ring-1 focus:ring-[--orange-color] transition-colors" 
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
                className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[--orange-color] focus:ring-1 focus:ring-[--orange-color] transition-colors" 
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
                className="w-full px-6 py-4 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[--orange-color] focus:ring-1 focus:ring-[--orange-color] transition-colors resize-none" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[--orange-color] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[--orange-selected-color] transition-colors duration-300"
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
