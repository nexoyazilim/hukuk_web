import React from 'react';
import ServicesHero from '../components/Services Companents/ServicesHero';
import ServicesMain from '../components/Services Companents/ServicesMain';
import ServicesSpecialized from '../components/Services Companents/ServicesSpecialized';
import ServicesProcess from '../components/Services Companents/ServicesProcess';
import ServicesCTA from '../components/Services Companents/ServicesCTA';

const Services = () => {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesMain />
      <ServicesSpecialized />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  );
};

export default Services;
