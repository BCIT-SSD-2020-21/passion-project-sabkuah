import React from 'react';

const CommunityScreen = ({ community }) => {
  return (
    <div>
      <h1>{community?.title}</h1>
      <p>Description: {community?.description}</p>
    </div>
  );
};

export default CommunityScreen;
