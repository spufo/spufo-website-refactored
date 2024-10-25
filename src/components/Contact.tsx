import React from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-7xl font-bold text-center text-white mb-4">Get in Touch</h2>
        <p className="text-center text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Have a question or want to learn more? We'd love to hear from you.
        </p>

        <div className="flex justify-center gap-8 mb-16">
          <div className="flex items-center text-gray-400">
            <Mail className="w-5 h-5 mr-2 text-[#FF6600]" />
            <a 
              href="mailto:contact@spufo.ch" 
              className="text-lg hover:text-[#FF6600] transition-colors duration-300"
            >
              contact@spufo.ch
            </a>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-5 h-5 mr-2 text-[#FF6600]" />
            <span className="text-lg">Zurich, Switzerland</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form className="bg-[#2A2A3C]/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">Company/Organisation *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors" 
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-4 py-3 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors" 
                required 
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                className="w-full px-6 py-4 rounded-xl bg-[#1E1E2E]/50 text-white border border-gray-700 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors resize-none" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#FF6600] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#FF8533] transition-colors duration-300"
            >
              Send Message
              <Send className="w-5 h-5 ml-2 inline-block" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
