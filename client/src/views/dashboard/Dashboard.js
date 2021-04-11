import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Dashboard = ({ children }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='row'>
      <div className='col-xs-12 col-lg-9'>{children}</div>
      <div
        className='col-xs-12 col-lg-3'
        style={{ backgroundColor: 'lightgrey' }}
      >
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Dashboard;
