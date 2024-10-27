import React from 'react';
import logo_FOR from '/assets/images/Logo_FOR_RGB-White.svg';

export default function Partners() {
  return (
    <div id="partners" className="bg-black pt-32 pb-24"> {/* Increased top padding to account for diagonal overlap */}
      <div className="container mx-auto px-6">
        <h2 className="text-[#00B7FF] text-3xl font-semibold text-center mb-16">
          Partnered With
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-24"> {/* Increased gap */}
          <div className="w-64 h-32 flex items-center justify-center p-4 backdrop-blur-sm">
            <img className="h-24 my-12 brightness-50 hover:brightness-100 hover:scale-[1.1] transition-all duration-300" src={logo_FOR} alt="Forensisches Institut Zürich"></img>
          </div>
        </div>
      </div>
    </div>
  );
}