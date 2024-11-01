import React from 'react';
import Contact from '../../general/Contact';
import GamesExperience from './GamesExperience';
import GamesHero from './GamesHero';

const Games: React.FC = () => {

  return (
    <>
      <GamesHero/>
      <GamesExperience/>
      <Contact twojo={true}></Contact>
    </>
  );
};

export default Games;