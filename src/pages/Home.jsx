import React from 'react';
import HomeHero from '../components/Home Companents/HomeHero';
import HomeAbout from '../components/Home Companents/HomeAbout';
import HomeServices from '../components/Home Companents/HomeServices';
import HomeNews from '../components/Home Companents/HomeNews';

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeNews />
    </div>
  );
};

export default Home;
