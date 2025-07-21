import React from 'react';
import '../styles/schedule-consult.css';
import ScheduleConsultHero from './ScheduleConsultHero.jsx';
import NextSteps from './NextSteps.jsx';

const ScheduleConsult = () => {
  return (
    <div className="schedule-consult-page">
      <ScheduleConsultHero />
      <NextSteps />
    </div>
  );
};

export default ScheduleConsult; 