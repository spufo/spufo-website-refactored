import React from 'react';
import { Phone, Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#FF6600] mb-16">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-[#2A2A3C] p-8 rounded-lg shadow-xl">
              <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-[#FF6600]" />
                  <span className="text-lg">+41 77 777 77 77</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-[#FF6600]" />
                  <span className="text-lg">contact@spufo.ch</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-[#FF6600]" />
                  <span className="text-lg">Zurich, Switzerland</span>
                </div>
              </div>
            </div>
            <div className="bg-[#2A2A3C] p-8 rounded-lg shadow-xl">
              <h3 className="text-3xl font-semibold mb-6">Office Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <form className="space-y-6 bg-[#2A2A3C] p-8 rounded-lg shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-3xl font-semibold mb-6">Send Us a Message</h3>
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded bg-[#1E1E2E] text-white focus:ring-2 focus:ring-[#FF6600] transition duration-300" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-[#1E1E2E] text-white focus:ring-2 focus:ring-[#FF6600] transition duration-300" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 rounded bg-[#1E1E2E] text-white focus:ring-2 focus:ring-[#FF6600] transition duration-300" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded bg-[#1E1E2E] text-white focus:ring-2 focus:ring-[#FF6600] transition duration-300" required></textarea>
            </div>
            <button type="submit" className="bg-[#FF6600] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FF8533] transition duration-300 flex items-center justify-center w-full">
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;