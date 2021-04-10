import React from 'react';
import SearchScreen from './SearchScreen';

const Search = () => {
  const user = 'Sabrina';
  const communities = [
    {
      title: 'Lansdowne',
      description: 'Awesome community near the mall and skytrain',
      location: 'Richmond',
      contents: [],
      members: [],
      creator: 'Bob',
    },
    {
      title: 'Kitsilano',
      description: 'Safe community by the beach',
      location: 'Vancouver',
      contents: [],
      members: [],
      creator: 'Lindsay',
    },
  ];
  return <SearchScreen user={user} communities={communities} />;
};

export default Search;
