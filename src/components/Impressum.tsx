// src/components/Impressum.js
import React from 'react';

const Impressum = () => {
  return (
    <section className="relative text-[#1E1E2E] overflow-hidden flex flex-col h-screen">
      {/* Fingerprint background */}
      <div 
        className="absolute invert sm:-translate-y-40 -translate-x-80 sm:-translate-x-0 rotate-[46deg] sm:rotate-[34deg] scale-[1] sm:scale-[0.9] inset-0 bg-no-repeat bg-center opacity-100 z-0 pointer-events-none"
      >
        <img src="/assets/images/Background.png" alt="Background" />
      </div>

      <div className="flex-grow flex flex-col max-w-5xl mx-auto py-24 px-6 mt-24 z-10">
        <h1 className="text-7xl font-bold text-[--orange-color] mb-12 text-center">Publisher</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg md:text-xl mb-4 text-center">This website is operated by:</p>
          <h2 className="text-2xl font-semibold mb-2 text-center">Twojo Software GmbH</h2>
          <p className="text-lg mb-2 text-center">c/o Hochschule Luzern - Informatik<br />
            Smart-up Campus Zug-Rotkreuz
          </p>
          <p className="text-lg mb-2 text-center">Suurstoffi 1<br />
            6343 Rotkreuz
          </p>
          <p className="text-lg mb-2 text-center">E-Mail: 
            <a href="mailto:contact@spufo.ch" className="text-[--orange-color] hover:underline"> contact@spufo.ch</a>
          </p>
          <p className="text-lg text-center">Commercial Register: CHE-461.740.370</p>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
