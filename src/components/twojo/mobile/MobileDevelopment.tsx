import React from 'react';
import Contact from '../../general/Contact';
import MobileDevelopmentExperience from './MobileDevelopmentExperience';
import MobileDevelopmentHero from './MobileDevelopmentHero';

const MobileDevelopment: React.FC = () => {

  return (
    <>
      <MobileDevelopmentHero/>
      <MobileDevelopmentExperience/>
      <Contact twojo={true}></Contact>
    </>
  );
};

export default MobileDevelopment;