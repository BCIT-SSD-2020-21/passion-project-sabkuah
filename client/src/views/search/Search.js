import React, { useState, useEffect } from 'react';
import { getAllCommunities } from '../../network/community';
import SearchScreen from './SearchScreen';

const Search = ({ user }) => {
  const [communities, setCommunities] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getAllCommunities();
      setCommunities(response.communities);
    })();
  }, []);

  return <SearchScreen user={user} communities={communities} />;
};

export default Search;
