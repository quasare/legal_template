import React from 'react';
import '../styles/next-steps.css';

const NextSteps = () => {
  return (
    <div className="next-steps-section">
      <div className="next-steps-container">
        <div className="next-steps-content">
          <div className="next-steps-title">
            Ready to Take the Next Step? <br/>Let's Discuss
          </div>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1.</div>
              <div className="step-content">
                <div className="step-title">Free consultation</div>
                <div className="step-description">
                  Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.
                </div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2.</div>
              <div className="step-content">
                <div className="step-title">Personalized Case Evaluation</div>
                <div className="step-description">
                  If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.
                </div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3.</div>
              <div className="step-content">
                <div className="step-title">Formal Engagement & Representation</div>
                <div className="step-description">
                  Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-steps-cta">
          <div className="cta-text">Discover how we can help</div>
          <div className="cta-button">
            <div className="button-text">Schedule a Consult</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSteps; 