import React, { useState, useEffect } from 'react';
import { getUserCommunities } from '../../network/community';
import UserCommunitiesScreen from './UserCommunitiesScreen';
import useLocalStorage from 'react-use-localstorage';

const UserCommunities = ({ user }) => {
  const [communities, setCommunities] = useState(null);
  const [token] = useLocalStorage('token');

  const handleGetCommunities = async () => {
    console.log('token sent to db>>>', token);
    const response = await getUserCommunities(token);
    return response;
  };

  useEffect(() => {
    (async () => {
      await handleGetCommunities();
    })();
  }, []);
  return <UserCommunitiesScreen />;
};

export default UserCommunities;
