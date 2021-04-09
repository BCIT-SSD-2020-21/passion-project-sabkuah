import React from 'react';
import DrawerNav from '../components/DrawerNav';

const User = ({ children }) => {
  return (
    <div>
      <DrawerNav />
      {children}
    </div>
  );
};

export default User;
