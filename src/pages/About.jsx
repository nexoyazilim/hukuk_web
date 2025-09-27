import React from 'react';
import AboutHero from '../components/About Companets/AboutHero';
import AboutStats from '../components/About Companets/AboutStats';
import AboutCards from '../components/About Companets/AboutCards';
import AboutValues from '../components/About Companets/AboutValues';
import AboutTeam from '../components/About Companets/AboutTeam';
import AboutHistory from '../components/About Companets/AboutHistory';
import AboutProcess from '../components/About Companets/AboutProcess';

const About = () => {
  return (
    <div className="about">
      <AboutHero />
      <AboutStats />
      <AboutCards />
      <AboutValues />
      <AboutTeam />
      <AboutHistory />
      <AboutProcess />
    </div>
  );
};

export default About;
