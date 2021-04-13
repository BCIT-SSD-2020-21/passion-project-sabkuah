import React, { useState, useEffect } from 'react';
import { getAllCommunities } from '../../network/community';
import SearchScreen from './SearchScreen';

const Search = () => {
  const [communities, setCommunities] = useState(null);

  const user = 'Sabrina';

  useEffect(() => {
    (async () => {
      const response = await getAllCommunities();
      setCommunities(response.communities);
    })();
  }, []);

  return <SearchScreen user={user} communities={communities} />;
};

export default Search;
