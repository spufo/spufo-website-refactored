import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import SmartphoneAdvantages from './components/SmartphoneAdvantages';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1E1E2E]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <SmartphoneAdvantages />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;