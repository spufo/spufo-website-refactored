import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 text-[#1E1E2E]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-[#FF6600] mb-12 text-center">Testimonial</h2>
        <div className="relative">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-[#FF6600] opacity-25 transform -translate-x-1/2 -translate-y-1/2" />
          <blockquote className="text-2xl md:text-4xl font-light italic text-center mb-8 relative z-10">
            «Das Beispiel 
            <span className="text-[#FF6600] font-normal hover:scale-[1.05] transition-all duration-300 inline-block mx-2">SPUFO</span>
             zeigt auf, wie bedeutsam neue Technologien
             auch für die Kriminaltechnik sind.» ...<br/> 
             «Die App sorgt für deutlich  
             <span className="text-[#FF6600] font-normal hover:scale-[1.05] transition-all duration-300 inline-block mx-2">mehr Effizienz</span> 
             und vor allem  
             <span className="text-[#FF6600] font-normal hover:scale-[1.05] transition-all duration-300 inline-block mx-2">mehr eingelieferte Spuren</span>.»
          </blockquote>
          <div className="text-center">
            <p className="text-xl font-semibold mb-1">Dominik Hänni</p>
            <p className="text-md text-gray-600">Leiter Informatik beim Forensischen Institut Zürich</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;