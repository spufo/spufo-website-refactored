import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import SmartphoneAdvantages from './components/SmartphoneAdvantages';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-[#1E1E2E]">
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Features />
              <SmartphoneAdvantages />
              <Testimonial />
              <Contact />
            </>
          } />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/datenschutz/" element={<Privacy />} />
          <Route path="/contact/" element={
            <div className="pt-12">
              <Contact />
            </div>} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
