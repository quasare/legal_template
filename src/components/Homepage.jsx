import React from 'react';
import '../styles/homepage.css';
import HomepageHero from './HomepageHero.jsx';
import Welcome from './Welcome.jsx';
import MidPageHero from './MidPageHero.jsx';
import WhatWeOffer from './WhatWeOffer.jsx';
import Testimonial from './Testimonial.jsx';
import BottomHero from './BottomHero.jsx';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <HomepageHero />
      <Welcome />
      <MidPageHero />
      <WhatWeOffer />
      <Testimonial />
      <BottomHero />
    </div>
  );
};

export default Homepage; 