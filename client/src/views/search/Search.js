import React, { useState, useEffect } from 'react';
import { getAllCommunities, joinCommunity } from '../../network/community';
import SearchScreen from './SearchScreen';
import useLocalStorage from 'react-use-localstorage';

const Search = ({ user }) => {
  const [communities, setCommunities] = useState(null);
  const [token] = useLocalStorage('token');

  useEffect(() => {
    (async () => {
      const response = await getAllCommunities();
      setCommunities(response.communities);
    })();
  }, []);

  const handleJoinCommunity = async (id) => {
    if (!user) {
      alert('You must sign in before joining a community');
      return;
    }
    console.log('com id', id);
    const response = await joinCommunity({ id, token });
    alert(response.message || response.error);
    //give user the option to redirect to dashboard
  };

  return (
    <SearchScreen
      user={user}
      communities={communities}
      handleJoinCommunity={handleJoinCommunity}
    />
  );
};

export default Search;
