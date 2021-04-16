import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Messaging from '../../components/Messaging';
import Weather from '../../components/Weather';
import { useLocation } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const [value, onChange] = useState(new Date());
  const location = useLocation();
  const USER_COMMUNITY_URL = '/user/communities';

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
          {location.pathname !== USER_COMMUNITY_URL && <Weather />}
          <Calendar onChange={onChange} value={value} />
          {location.pathname !== USER_COMMUNITY_URL && <Messaging />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
