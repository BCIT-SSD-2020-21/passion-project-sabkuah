import { Container } from '@material-ui/core';
import React from 'react';
import SearchInput from '../../components/SearchInput';
import SearchResultCard from '../../components/SearchResultCard';

const SearchScreen = ({ user, communities }) => {
  return (
    <Container>
      <div className='mb-3'>
        {user && <p id='welcome-user'>Hi {user},</p>}
        <h2>Which community are you a part of?</h2>
      </div>
      <div className='my-5'>
        <SearchInput />
      </div>
      <div className='my-3'>
        <div id='search-results'>
          {communities.length ? (
            communities.map((community) => (
              <SearchResultCard community={community} />
            ))
          ) : (
            <p>No Communities found! Please search again</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SearchScreen;
