import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white min-h-screen flex items-start md:items-center overflow-hidden mt-0">
      <div className="flex flex-col md:flex-row items-stretch justify-between max-w-[100rem] mx-auto w-full px-6 over mt-16 md:mt-0">
          {/* Fingerprint background */}
          <div 
            className="absolute invert sm:-translate-y-40 -translate-x-80 sm:-translate-x-0 rotate-[46deg] sm:rotate-[34deg] scale-[1.5] sm:scale-[0.8] inset-0 bg-contain bg-no-repeat bg-center opacity-100"
          >
          <img src="/src/assets/images/Background.png"/></div>
        <div className="md:w-1/2 py-4 md:py-12 flex flex-col items-center md:items-start justify-center relative w-full">
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center md:items-start w-full">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <img src="/src/assets/images/Curved_FinalSpufoLogo.svg" alt="SPUFO Logo" className="w-20 mr-4" />
              <h1 className="text-6xl md:text-8xl font-bold text-[#1E1E2E]">SPUFO</h1>
            </div>
            <h2 className="text-3xl md:text-3xl text-[#FF6600] mb-5 text-center md:text-left">The Crime Scene Photography App</h2>
            <p className="text-2xl md:text-5xl font-bold mb-8 text-[#1E1E2E] text-center md:text-left">
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">Digital</span>
               - 
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">Fast</span>
                - 
              <span className="hover:scale-[1.1] transition-all duration-300 inline-block mx-2">Efficient</span>
            </p>
                
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              <a href="/try-now" className="bg-[#FF6600] text-white px-8 py-3 rounded-xl text-xl font-semibold hover:bg-[#FF8533] transition duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
                Try Now
              </a>
              <a href="/brochure" className="bg-transparent border-2 border-[#FF6600] text-[#FF6600] px-8 py-3 rounded-xl text-xl font-semibold hover:bg-[#FF6600] hover:text-white transition duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
                PDF Brochure
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white py-0 md:py-12 flex flex-col justify-center items-center">
          <img
            src="/src/assets/images/HeroMockup.png"
            alt="SPUFO App"
            className="max-w-full h-auto transform scale-90 sm:scale-100 md:scale-150 -mt-8 sm:mt-0"
          />
        </div>
      </div>
      {/* Collaboration text and logo */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
        <p className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Developed in collaboration with</p>
        <img 
          src="/src/assets/images/Logo_FOR_RGB.svg"
          alt="FOR Zürich" 
          className="h-12 sm:h-16"
        />
      </div>
      {/* Scroll down button */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 text-[#FF6600] hover:text-[#FF8533] transition-colors duration-300"
      >
        <ChevronDown className="w-12 h-12 animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;
