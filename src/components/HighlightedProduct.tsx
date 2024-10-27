import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '/assets/images/AboutImage.png';
import curved_FinalSpufoLogo from '/assets/images/Curved_FinalSpufoLogo.svg';

export default function HighlightedProduct() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-6">
        <h2 className="text-[--orange-color] text-3xl font-bold text-center mb-16">
          Highlighted Product
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src={curved_FinalSpufoLogo}
                alt="SPUFO Logo" 
                className="w-16 h-16"
              />
              <h3 className="text-white text-5xl font-bold">SPUFO</h3>
            </div>
            
            <p className="text-[--orange-color] text-xl">
              The Crime Scene Photography App
            </p>
            
            <h4 className="text-white text-3xl font-bold">
              Digital - Fast - Efficient
            </h4>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              The <span className="text-[--orange-color] font-semibold hover:scale-[1.05] transition-all duration-300 inline-block mx-1">SPUFO</span> app is a forensic iOS solution 
              that simplifies and streamlines the collection 
              of dactyloscopic traces at crime scenes.
            </p>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[--orange-color]">•</span>
                Replaces traditional DSLR cameras and gelatin films with mobile technology.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--orange-color]">•</span>
                Captures traces on-site, scaled 1:1, and saved in 1000 dpi resolution.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[--orange-color]">•</span>
                Allows direct numbering, cropping, and preparation for AFIS searches.
              </li>
            </ul>
            
            <button className="bg-[#FF6B00] text-white px-8 py-3 rounded-md hover:bg-[#e65600] transition-colors font-semibold">
              Learn More
            </button>
          </div>
          
          {/* Right Column - App Screenshot */}
          <div className="relative">
            <div className="relative z-10 transform lg:translate-x-[50%]">
              <img 
                src={aboutImage}
                alt="SPUFO App Interface"
                className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}