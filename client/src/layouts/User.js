import React from 'react';
import DrawerNav from '../components/DrawerNav';

const User = ({ children, user }) => {
  return (
    <div>
      <DrawerNav user={user}>{children}</DrawerNav>
    </div>
  );
};

export default User;
