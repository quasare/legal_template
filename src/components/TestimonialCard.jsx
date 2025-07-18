import React from 'react';
import '../styles/testimonial-card.css';

const TestimonialCard = ({ text, author, position, company }) => {
  return (
    <div className="testimonial-card">
      <div className="card-content">
        <div className="text-container">
          <div className="testimonial-text">
            "{text}"
          </div>
          <div className="testimonial-author">
            — {author}, {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 