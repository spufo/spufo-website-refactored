import React from 'react';
import matterhorn from '/assets/images/matterhorn.jpg';
import { ChevronDown } from 'lucide-react';

export default function Hero() {

    const scrollToAbout = () => {
      const partnersSection = document.getElementById('partners');
      if (partnersSection) {
        partnersSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
      > <img className="absolute inset-0 w-screen h-screen object-cover" src={matterhorn} alt="Background" />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
      </div>
      
      <div className="relative h-full flex pt-[30vh] pl-[20vh]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl ml-auto">
            <h1 className="text-5xl font-bold text-white mb-8">
              Developed in Switzerland.
            </h1>
            <p className="text-3xl text-white leading-relaxed">
              We're a dedicated team crafting 
              <br />
              solutions to help your business thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal line separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div 
          className="relative h-24 overflow-hidden"
          style={{ 
            clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div 
            className="absolute inset-0 bg-black w-[200%] origin-top-left"
            style={{ 
              transform: 'rotate(0deg)',
            }}
          />
        </div>
      </div>
      {/* Scroll down button */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-400 transition-colors duration-300 hidden md:block"
      >
        <ChevronDown className="w-12 h-12 animate-bounce" />
      </button>
    </div>
  );
}