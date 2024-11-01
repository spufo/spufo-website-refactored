import React from 'react';
import Contact from '../../general/Contact';
import BusinessApplicationHero from './BusinessApplicationHero';
import BusinessApplicationExperience from './BusinessApplicationExperience';

const BusinessApplication: React.FC = () => {

  return (
    <>
      <BusinessApplicationHero/>
      <BusinessApplicationExperience/>
      <Contact twojo={true}></Contact>
    </>
  );
};

export default BusinessApplication;