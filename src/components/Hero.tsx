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
    <div className="relative bg-white min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-stretch justify-between max-w-7xl mx-auto w-full px-6">
        <div className="md:w-1/2 py-12 flex flex-col items-start justify-center relative overflow-hidden">
          {/* Fingerprint background */}
          <div 
            className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10"
            style={{
              backgroundImage: `url('https://media.discordapp.net/attachments/1236052301064700043/1295863329939525652/LOGO_PNG.png?ex=67103245&is=670ee0c5&hm=adb6d82a6056396a9a4bdb5d59366d570416a476650daed477f00a76f56072d0&=&format=webp&quality=lossless&width=908&height=1300')`,
              transform: 'scale(0.6)',
            }}
          ></div>
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <img src="https://media.discordapp.net/attachments/1236052301064700043/1294983428776788009/Curved_FinalSpufoLogo.png?ex=670fa1cd&is=670e504d&hm=7a706648556b30a9c36ca6b9e8e446906ec5e0e7297ced0876ed89d10d3db1c2&=&format=webp&quality=lossless&width=868&height=868" alt="SPUFO Logo" className="w-20 mr-4" />
              <h1 className="text-6xl font-bold text-[#1E1E2E]">SPUFO</h1>
            </div>
            <h2 className="text-[#FF6600] text-2xl mb-5">The Crime Scene Photography App</h2>
            <p className="text-3xl font-semibold mb-8 text-[#1E1E2E]">Digital - Fast - Efficient</p>
            <div className="flex space-x-6">
              <a href="/try-now" className="bg-[#FF6600] text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-[#FF8533] transition duration-300 transform hover:scale-105">
                Try Now
              </a>
              <a href="/brochure" className="bg-transparent border-2 border-[#FF6600] text-[#FF6600] px-8 py-3 rounded-full text-xl font-semibold hover:bg-[#FF6600] hover:text-white transition duration-300 transform hover:scale-105">
                PDF Brochure
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white py-12 flex flex-col justify-center items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1236052301064700043/1294984950587588730/image.png?ex=670fa337&is=670e51b7&hm=eabe8cbd75a18c6e4c6d30a23ebf582cdf5c669b035d37b4b5871fe265c6e326&"
            alt="SPUFO App"
            className="max-w-full h-auto transform scale-150"
          />
        </div>
      </div>
      {/* Collaboration text and logo */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-lg font-bold mb-2">Developed in collaboration with</p>
        <img 
          src="https://www.for-zh.ch/wp-content/uploads/Logo_FOR_RGB.svg" 
          alt="FOR Zürich" 
          className="h-16"
        />
      </div>
      {/* Scroll down button */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#FF6600] hover:text-[#FF8533] transition-colors duration-300"
      >
        <ChevronDown className="w-12 h-12 animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;