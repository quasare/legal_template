import React from 'react';
import NavbarReactNew from './NavbarReactNew.jsx';
import FooterReact from './FooterReact.jsx';

const ScheduleConsultLayout = ({ children }) => {
  return (
    <div className="schedule-consult-layout">
      <NavbarReactNew />
      <main className="main-content">
        {children}
      </main>
      <FooterReact />
    </div>
  );
};

export default ScheduleConsultLayout; 