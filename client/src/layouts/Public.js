import React from 'react';
import Navigation from '../components/Navigation';

const Public = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Public;
