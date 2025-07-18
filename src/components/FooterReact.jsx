import React from 'react';
import '../styles/footer.css';

const FooterReact = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-placeholder"></div>
        </div>
        
        <div className="footer-tagline">
          <div className="tagline-text">Deep expertise, decisive courtroom presence</div>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <div className="contact-item">hello@figma.com</div>
            <div className="contact-item">(555) 123-4567</div>
          </div>
          
          <div className="footer-section">
            <div className="address-item">
              123 Candyland Lane<br/>
              Suite 123<br/>
              Los Angeles, CA 94117
            </div>
          </div>
          
          <div className="footer-section">
            <div className="social-item">Instagram</div>
            <div className="social-item">Facebook</div>
            <div className="social-item">LinkedIn</div>
            <div className="social-item">Bluesky</div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <div className="copyright-text">
            Jones & Brown Legal<br/>
            © 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterReact; 