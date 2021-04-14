import React from 'react';
import DrawerNav from '../components/DrawerNav';

const User = ({ children, user }) => {
  return (
    <div>
      <DrawerNav user={user}>
        <div className='min-vh'>{children}</div>
      </DrawerNav>
    </div>
  );
};

export default User;
