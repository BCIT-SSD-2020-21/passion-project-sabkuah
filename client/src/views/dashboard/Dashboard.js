import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Messaging from '../../components/Messaging';

const Dashboard = ({ children }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='row'>
        <div className='col-xs-12 col-lg-9'>{children}</div>

        <div
          className='col-xs-12 col-lg-3'
          // style={{ backgroundColor: 'lightgrey' }}
        >
          <Calendar onChange={onChange} value={value} />
          <Messaging />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
