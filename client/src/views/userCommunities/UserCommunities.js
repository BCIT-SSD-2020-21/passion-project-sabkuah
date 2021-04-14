import React, { useState, useEffect } from 'react';
import { getUserCommunities } from '../../network/community';
import UserCommunitiesScreen from './UserCommunitiesScreen';
import useLocalStorage from 'react-use-localstorage';

const UserCommunities = ({ user }) => {
  const [communities, setCommunities] = useState(null);
  const [token] = useLocalStorage('token');

  const handleGetCommunities = async () => {
    const response = await getUserCommunities(token);
    return response;
  };

  useEffect(() => {
    (async () => {
      const data = await handleGetCommunities();
      setCommunities(data);
    })();
    // eslint-disable-next-line
  }, []);

  return <UserCommunitiesScreen communities={communities} />;
};

export default UserCommunities;
