import React from 'react';
import '../styles/our-services.css';

const OurServices = () => {
  return (
    <div className="our-services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Navigating Complex Legal Landscapes? We Can Help.</h2>
        </div>
        <div className="services-list">
          <div className="service-item">
            <div className="service-name">Business and Corporate Law</div>
            <div className="service-description">
              Business formation (LLCs, corporations, partnerships)<br/>
              Contract drafting and review<br/>
              Mergers and acquisitions<br/>
              Intellectual property protection<br/>
              Employment law and workplace policies<br/>
              Corporate governance<br/>
              Shareholder and partnership disputes
            </div>
          </div>
          <div className="service-item">
            <div className="service-name">Litigation and Dispute Resolution</div>
            <div className="service-description">
              Civil litigation<br/>
              Commercial litigation<br/>
              Arbitration and mediation<br/>
              Class action lawsuits<br/>
              Personal injury claims<br/>
              Product liability cases
            </div>
          </div>
          <div className="service-item">
            <div className="service-name">Family Law</div>
            <div className="service-description">
              Divorce and separation<br/>
              Child custody and support<br/>
              Prenuptial and postnuptial agreements<br/>
              Adoption and surrogacy<br/>
              Domestic violence protection
            </div>
          </div>
          <div className="service-item">
            <div className="service-name">Criminal Defense</div>
            <div className="service-description">
              DUI and traffic offenses<br/>
              White-collar crime defense<br/>
              Drug charges<br/>
              Assault and battery cases<br/>
              Expungements and record sealing
            </div>
          </div>
          <div className="service-item">
            <div className="service-name">Real Estate Law</div>
            <div className="service-description">
              Property transactions (buying, selling, leasing)<br/>
              Landlord-tenant disputes<br/>
              Zoning and land use<br/>
              Construction law<br/>
              Real estate development
            </div>
          </div>
          <div className="service-item">
            <div className="service-name">Immigration Law</div>
            <div className="service-description">
              Visa applications<br/>
              Green cards and citizenship<br/>
              Deportation defense<br/>
              Employment-based immigration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices; 