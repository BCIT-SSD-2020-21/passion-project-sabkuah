import React from 'react';
import SearchBar from '../components/SearchInput';

const Landing = () => {
  return (
    <div>
      Hello! Welcome to BlockWatch! This is the landing page <SearchBar />
      <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='#D0E2FF'
          d='M27.7,-46.2C32.6,-34.5,31.1,-22.1,38,-10.2C44.8,1.7,59.9,13,64.1,27.1C68.2,41.2,61.3,58.1,48.8,68.6C36.3,79.1,18.1,83.3,0.6,82.4C-16.9,81.6,-33.8,75.7,-47.8,65.7C-61.8,55.7,-72.8,41.5,-76.3,25.9C-79.8,10.4,-75.7,-6.4,-66.5,-17.6C-57.4,-28.8,-43.2,-34.4,-31.3,-43.7C-19.3,-53.1,-9.7,-66.3,0.9,-67.5C11.4,-68.7,22.7,-57.8,27.7,-46.2Z'
          transform='translate(100 100)'
        />
      </svg>
    </div>
  );
};

export default Landing;
