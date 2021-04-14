import React from 'react';
import { Footer } from '../components/Footer';
import Navigation from '../components/Navigation';

const Public = ({ children, user }) => {
  return (
    <div>
      <Navigation user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default Public;
