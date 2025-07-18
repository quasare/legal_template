import React from 'react';
import '../styles/what-we-offer.css';

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer-section">
      <div className="offer-container">
        <div className="offer-header">
          <div className="header-content">
            <div className="header-title">What We Offer</div>
          </div>
        </div>
        <div className="offer-content">
          <div className="services-list">
            <div className="service-item">Business formation</div>
            <div className="service-item">Contract drafting</div>
            <div className="service-item">Mergers and Acquisitions</div>
            <div className="service-item">Property Protection</div>
            <div className="service-item">Employment Law</div>
            <div className="service-item">Corporate Governance</div>
            <div className="service-item">Shareholder Disputes</div>
            <div className="service-item more-services">+More</div>
          </div>
          <div className="services-button">
            <div className="button-text">Services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer; 