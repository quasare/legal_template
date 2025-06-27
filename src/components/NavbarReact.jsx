import React, { useState } from 'react';
import '../styles/global.css';

const NavbarReact = ({ siteName = "Legal Firm" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/" className="brand-link">
              <img src="/Logo.svg" alt="Legal Firm Logo" className="brand-logo" />
            </a>
          </div>
          
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} id="navbar-menu">
            <a href="/services" className="nav-link">Services</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
          
          <div className="navbar-toggle" id="navbar-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background: var(--background-secondary);
          color: var(--text-light);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: var(--box-shadow);
          border-bottom: 1px solid var(--border-color);
        }
        
        .navbar-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .navbar-brand {
          flex-shrink: 0;
        }
        
        .brand-link {
          text-decoration: none;
          color: var(--text-light);
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }
        
        .brand-logo {
          width: 33px;
          height: 24px;
          filter: brightness(0) invert(1);
        }
        
        .brand-text {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--secondary-color);
        }
        
        .navbar-menu {
          display: flex;
          gap: var(--spacing-xl);
          align-items: center;
        }
        
        .nav-link {
          color: var(--text-light);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-base);
          position: relative;
          padding: var(--spacing-sm) 0;
        }
        
        .nav-link:hover {
          color: var(--secondary-color);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--secondary-color);
          transition: width var(--transition-base);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .navbar-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }
        
        .navbar-toggle span {
          width: 25px;
          height: 3px;
          background-color: var(--text-light);
          transition: var(--transition-base);
        }
        
        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--background-secondary);
            flex-direction: column;
            padding: var(--spacing-lg) 0;
            gap: var(--spacing-md);
            border-top: 1px solid var(--border-color);
          }
          
          .navbar-menu.active {
            display: flex;
          }
          
          .navbar-toggle {
            display: flex;
          }
          
          .navbar-container {
            padding: 0 var(--spacing-md);
          }
          
          .brand-text {
            font-size: var(--font-size-xl);
          }
        }
      `}</style>
    </>
  );
};

export default NavbarReact; 