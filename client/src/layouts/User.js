import React from 'react';
import DrawerNav from '../components/DrawerNav';

const User = ({ children }) => {
  const user = {
    email: 'sab@gmail.com',
    username: 'sab@gmail.com',
    firstName: 'Sabrina',
    lastName: 'Kuah',
    location: 'Vancouver',
  };

  return (
    <div>
      <DrawerNav user={user}>{children}</DrawerNav>
    </div>
  );
};

export default User;
