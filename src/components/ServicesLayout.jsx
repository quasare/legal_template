import React from 'react';
import NavbarReactNew from './NavbarReactNew.jsx';
import FooterReact from './FooterReact.jsx';

const ServicesLayout = ({ children }) => {
  return (
    <div className="services-layout">
      <NavbarReactNew />
      <main className="services-content">
        {children}
      </main>
      <FooterReact />
    </div>
  );
};

export default ServicesLayout; 