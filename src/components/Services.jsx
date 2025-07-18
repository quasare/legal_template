import React from 'react';
import '../styles/services.css';
import ServicePageHero from './ServicePageHero.jsx';
import Stats from './Stats.jsx';
import OurServices from './OurServices.jsx';
import Testimonial from './Testimonial.jsx';
import ServiceHeroBottom from './ServiceHeroBottom.jsx';

const Services = () => {
  return (
    <div className="services-page">
      <ServicePageHero />
      <Stats />
      <OurServices />
      <Testimonial />
      <ServiceHeroBottom />
    </div>
  );
};

export default Services; 