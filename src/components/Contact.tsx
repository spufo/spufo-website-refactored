import React, { useState } from 'react';
import { Mail, Send, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ContactProps {
  twojo?: boolean;
}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
  phone: string;
  botcheck: string;
};

const Contact = ({ twojo = false }: ContactProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: '',
    botcheck: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '388fd6bb-0325-469f-a4b3-cccf22e761f3', 
        }),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({ name: '', email: '', subject: '', message: '', company: '', phone: '', botcheck: '' });
        setTimeout(() => setShowSuccessPopup(false), 3000);
      } else {
        console.error('Form submission error');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  // Define color classes based on twojo prop
  const accentColor = twojo ? 'text-[--blue-color]' : 'text-[--orange-color]';
  const hoverAccentColor = twojo ? 'hover:text-[--blue-selected-color]' : 'hover:text-[--orange-color]';
  const bgAccentColor = twojo ? 'bg-[--blue-color]' : 'bg-[--orange-color]';
  const hoverBgAccentColor = twojo ? 'hover:bg-cyan-500' : 'hover:bg-[--orange-selected-color]';
  const focusBorderColor = twojo ? 'focus:border-[--blue-color]' : 'focus:border-[--orange-color]';
  const focusRingColor = twojo ? 'focus:ring-[--blue-color]' : 'focus:ring-[--orange-color]';
  const formBg = twojo ? 'bg-[#18181b]' : 'bg-[#262637]/50';
  const popupBg = twojo ? 'bg-[#18181b]' : 'bg-[#262637]';
  const inputBg = twojo ? 'bg-black/50' : 'bg-[#1E1E2E]/50';

  return (
    <div className="relative">
      {twojo && (
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={`text-4xl md:text-7xl font-semibold mb-4 ${twojo ? 'text-[--blue-color]' : 'text-white'} text-center`}>
            {t('contactTitle')}
          </h2>
          <p className="text-center text-gray-400 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        {showSuccessPopup && (
          <div className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${popupBg} border border-gray-700 p-4 rounded-xl text-center shadow-lg z-50`}>
            <p className={`text-lg font-semibold ${accentColor}`}>{t('formSuccessMessage')}</p>
            <p className="text-gray-400">{t('formSuccessSubtitle')}</p>
          </div>
        )}

        <motion.div 
          className="flex justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
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
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <form className={`${formBg} rounded-3xl shadow-lg p-8`} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  {t('name')} {t('required')}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.company}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                value={formData.subject}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-6 py-4 rounded-xl ${inputBg} text-white border border-gray-700 ${focusBorderColor} ${focusRingColor} focus:ring-1 transition-colors resize-none`} 
                required
              ></textarea>
            </div>

            <input
              type="checkbox"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              style={{ display: 'none' }}
            />

            <div className="h-captcha" data-captcha="true"></div>

            <button 
              type="submit" 
              className={`w-full ${bgAccentColor} text-white px-8 py-3 rounded-xl text-lg font-semibold ${hoverBgAccentColor} transition-colors duration-300`}
            >
              {t('sendMessage')}
              <Send className="w-5 h-5 ml-2 inline-block" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
