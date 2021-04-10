import React from 'react';
import { Footer } from '../components/Footer';
import Navigation from '../components/Navigation';

const Public = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Public;
