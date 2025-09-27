import React from 'react';
import HomeHero from '../components/Home Companents/HomeHero';
import HomeAbout from '../components/Home Companents/HomeAbout';
import HomeServices from '../components/Home Companents/HomeServices';
import HomeNews from '../components/Home Companents/HomeNews';
import HomeCTA from '../components/Home Companents/HomeCTA';

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeNews />
      <HomeCTA />
    </div>
  );
};

export default Home;
