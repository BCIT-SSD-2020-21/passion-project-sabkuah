import React from 'react';
import { Footer } from '../components/Footer';
import Navigation from '../components/Navigation';

const Public = ({ children, user }) => {
  return (
    <div>
      <Navigation user={user} />
      <div className='min-vh'>{children}</div>
      <Footer />
    </div>
  );
};

export default Public;
