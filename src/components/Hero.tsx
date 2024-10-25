import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollLink from './ScrollLink';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex items-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch justify-between max-w-7xl mx-auto w-full px-6 over">
          {/* Fingerprint background */}
          <div 
            className="absolute invert sm:-translate-y-40 -translate-x-80 sm:-translate-x-0 rotate-[46deg] sm:rotate-[34deg] scale-[1.5] sm:scale-[0.9] inset-0 bg-contain bg-no-repeat bg-center opacity-100 z-0 pointer-events-none"
          >
          <img src="/src/assets/images/Background.png"/></div>
        <div className="md:w-1/2 py-12 flex flex-col items-start justify-center relative">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <img src="/src/assets/images/Curved_FinalSpufoLogo.svg" alt="SPUFO Logo" className="w-20 mr-4" />
              <h1 className="text-8xl font-bold text-[#1E1E2E]">SPUFO</h1>
            </div>
            <h2 className="text-[#FF6600] text-3xl mb-5">The Crime Scene Photography App</h2>
            <p className="text-5xl font-semibold mb-8 text-[#1E1E2E]">
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">Digital</span>
               - 
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">Fast</span>
                - 
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">Efficient</span>
            </p>
                
            <div className="flex space-x-6">
              <ScrollLink to="/try-now" className="bg-[#FF6600] border-2 border-[#FF6600] text-white px-8 py-3 rounded-xl text-xl font-semibold hover:border-[#FF8533] hover:bg-[#FF8533] transition duration-300 transform hover:scale-105">
                Try Now
              </ScrollLink>
              <ScrollLink to="/brochure" className="bg-transparent border-2 border-[#FF6600] text-[#FF6600] px-8 py-3 rounded-xl text-xl font-semibold hover:bg-[#FF6600] hover:text-white transition duration-300 transform hover:scale-105">
                PDF Brochure
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white py-12 flex flex-col justify-center items-center">
          <img
            src="/src/assets/images/HeroMockup.png"
            alt="SPUFO App"
            className="max-w-full h-auto transform scale-150"
          />
        </div>
      </div>
      {/* Collaboration text and logo */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-lg font-bold mb-2">Developed in collaboration with</p>
        <img 
          src="/src/assets/images/Logo_FOR_RGB.svg"
          alt="FOR Zürich" 
          className="h-16"
        />
      </div>
      {/* Scroll down button */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FF6600] hover:text-[#FF8533] transition-colors duration-300"
      >
        <ChevronDown className="w-12 h-12 animate-bounce hidden sm:block" />
      </button>
    </div>
  );
};

export default Hero;