import React from 'react';
import Map from '../../components/Map';

const CommunityScreen = ({ community }) => {
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <h1>{community?.title}</h1>
        <p>Description: {community?.description}</p>
        <p>Location: {community?.location}</p>
      </div>
      <div>{community && <Map community={community} />}</div>
    </div>
  );
};

export default CommunityScreen;
