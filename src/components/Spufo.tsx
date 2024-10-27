import Hero from './Hero';
import About from './About';
import Features from './Features';
import SmartphoneAdvantages from './SmartphoneAdvantages';
import Testimonial from './Testimonial';
import Contact from './Contact';

const Spufo = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <SmartphoneAdvantages />
      <Testimonial />
      <Contact twojo={false} />
    </>
  );
};

export default Spufo;
