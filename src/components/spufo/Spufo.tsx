import Hero from './Hero';
import About from './About';
import Features from './Features';
import SmartphoneAdvantages from './SmartphoneAdvantages';
import Testimonial from './Testimonial';
import Contact from '../general/Contact';

const Spufo = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <SmartphoneAdvantages />
      <Testimonial />
      <section className="relative bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] text-white min-h-screen overflow-hidden pt-10">
        <Contact twojo={false} />
      </section>
    </>
  );
};

export default Spufo;
