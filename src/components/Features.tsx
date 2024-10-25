import React from 'react';
import { Fingerprint, GitBranch, Maximize, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollLink from './ScrollLink';

const FeatureCard = ({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) => (
  <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col h-full transform hover:scale-105 transition duration-300">
    <div className="bg-[--orange-color] rounded-full p-4 mb-6 self-start">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <ScrollLink to="#" className="text-[--orange-color] font-semibold flex items-center hover:underline mt-auto group">
      {link} <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">→</span>
    </ScrollLink>
  </div>
);

const Features = () => {
  return (
    <section className="py-32 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-[--orange-color] mb-20">Key Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard
            icon={<Fingerprint className="w-8 h-8 text-white" />}
            title="Mobile Fingerprint Capture"
            description="Effortlessly collect high-quality fingerprints at crime scenes using the Spufo App on your iOS device. Designed for both forensic technicians and front-line officers."
            link="Learn how it works"
          />
          <FeatureCard
            icon={<GitBranch className="w-8 h-8 text-white" />}
            title="Streamlined Evidence Collection"
            description="Replace bulky DSLR cameras and gelatine foils with our efficient mobile solution. Spufo App accelerates your evidence gathering process, saving time and effort."
            link="Discover the benefits"
          />
          <FeatureCard
            icon={<Maximize className="w-8 h-8 text-white" />}
            title="Optimal Resolution Imaging"
            description="Automatically capture 1:1 scaled photographs at 1000 dpi resolution. Ensure every fingerprint is recorded with the highest quality for accurate analysis."
            link="See the technical details"
          />
          <FeatureCard
            icon={<Award className="w-8 h-8 text-white" />}
            title="Proven in the Field"
            description="Developed in collaboration with Forensic Science Zurich, SPUFO is actively used in real-world scenarios. Our app has significantly increased the number of fingerprints captured, demonstrating its effectiveness and reliability in forensic investigations."
            link="Read success stories"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
