import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Messaging from '../../components/Messaging';
import Weather from '../../components/Weather';
import { useLocation } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { getCommunity } from '../../network/community';

const Dashboard = ({ children }) => {
  const [value, onChange] = useState(new Date());
  const location = useLocation();
  const USER_COMMUNITY_URL = '/user/communities';
  const [token] = useLocalStorage('token');
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    console.log('useLocation>>', location);
    const communityId = location.pathname.substr(18, 35);
    console.log('SUBSTRING>>>>>>>', communityId);
    communityId &&
      (async () => {
        const response = await getCommunity({ id: communityId, token });
        console.log('community response', response.community);
        setCommunity(response.community);
      })();
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-xs-12 col-lg-9 animate__animated animate__fadeInLeft'>
          {children}
        </div>

        <div className='col-xs-12 col-lg-3 col-xs-12 col-lg-3 animate__animated animate__fadeInRight '>
          <div className='d-flex justify-content-center flex-column'>
            {location.pathname !== USER_COMMUNITY_URL && (
              <Weather community={community} />
            )}
            <Calendar onChange={onChange} value={value} />
            {location.pathname !== USER_COMMUNITY_URL && (
              <Messaging community={community} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
