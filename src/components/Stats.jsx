import React from 'react';
import '../styles/stats.css';

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">years of experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">success rate in court</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">120+</div>
            <div className="stat-label">attorneys at hand</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats; 