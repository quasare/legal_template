import React from 'react';
import '../styles/welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-title">Welcome to Jones & Brown Legal</div>
        <div className="welcome-content">
          <div className="welcome-text-container">
            <div className="welcome-text">
              Jones & Brown Legal has been a pillar of the Los Angeles legal community, providing expert legal counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted advisors, dedicated advocates, and strategic partners committed to achieving the best possible outcomes for our clients.
            </div>
            <div className="welcome-text">
              We combine decades of experience with a deep understanding of the complexities of California law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout Los Angeles and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.
            </div>
          </div>
          <div className="welcome-button">
            <div className="button-text">Schedule a Consult</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 