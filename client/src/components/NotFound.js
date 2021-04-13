import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h2>Oops! We couldn't find the page you were looking for.</h2>
      <h4>
        <Link to='/'>Back to Homepage</Link>
      </h4>
    </div>
  );
};

export default NotFound;
