import React from 'react';
import NavbarReactNew from './NavbarReactNew.jsx';
import FooterReact from './FooterReact.jsx';

const HomepageLayout = ({ children }) => {
  return (
    <div className="homepage-layout">
      <NavbarReactNew />
      <main className="main-content">
        {children}
      </main>
      <FooterReact />
    </div>
  );
};

export default HomepageLayout; 