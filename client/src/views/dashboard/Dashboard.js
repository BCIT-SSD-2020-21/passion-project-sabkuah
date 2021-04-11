import React from 'react';

const Dashboard = ({ children }) => {
  return (
    <div className='row'>
      <div className='col-xs-12 col-md-9'>{children}</div>
      <div className='col-xs-12 col-md-3' style={{ backgroundColor: 'red' }}>
        sidebar
      </div>
    </div>
  );
};

export default Dashboard;
