import React, { useState } from 'react';
import '../styles/navbar-new.css';

const NavbarReactNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-new">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="logo-link">
            <img src="/Logo.svg" alt="Jones & Brown Legal" className="logo-image" />
          </a>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-item">Home</a>
          <a href="/services" className="nav-item">Services</a>
          <a href="/schedule-consult" className="nav-item">Schedule a Consult</a>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarReactNew; 