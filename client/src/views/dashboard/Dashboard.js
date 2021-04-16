import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Messaging from '../../components/Messaging';
import Weather from '../../components/Weather';

const Dashboard = ({ children }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12 col-lg-9 animate__animated animate__fadeInLeft'>
          {children}
        </div>

        <div
          className='col-xs-12 col-lg-3 col-xs-12 col-lg-3 animate__animated animate__fadeInRight'
          // style={{ backgroundColor: 'lightgrey' }}
        >
          {/* <Weather /> */}
          <Calendar onChange={onChange} value={value} />
          <Messaging />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
