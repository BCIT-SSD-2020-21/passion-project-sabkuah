import { Container } from '@material-ui/core';
import React from 'react';
import SearchInput from '../../components/SearchInput';
import SearchResultCard from '../../components/SearchResultCard';

const SearchScreen = ({ user, communities }) => {
  return (
    <Container>
      <div>
        Hi {user}!<h3>Which community are you a part of?</h3>
      </div>
      <SearchInput />
      <div>
        <p>Communities Found:</p>
        <div id='search-results'>
          {communities.map((community) => (
            <SearchResultCard community={community} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SearchScreen;
