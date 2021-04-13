import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/SearchInput';
import SearchResultCard from '../../components/SearchResultCard';
import CreateCommunity from '../../components/CreateCommunity';

const SearchScreen = ({ user, communities }) => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(communities);

  const handleShow = () => setShow(true);

  useEffect(() => {
    if (query.length) {
      const filtered = communities.filter((c) => {
        return c.title.toLowerCase().includes(query.toLowerCase());
      });
      setResults(filtered);
    } else setResults(communities);
  }, [query, communities]);

  return (
    <Container>
      <div className='mb-3'>
        {user && <p id='welcome-user'>Hi {user},</p>}
        <h2>Which community are you a part of?</h2>
      </div>

      <div className='my-5'>
        <SearchInput query={query} setQuery={setQuery} />
      </div>
      {/*  Modal Pop up onClick */}
      <button className='create-com-button' onClick={handleShow}>
        Create
      </button>
      <CreateCommunity show={show} setShow={setShow} />

      <div className='my-3'>
        <div id='search-results'>
          {results?.length ? (
            results.map((community) => (
              <SearchResultCard key={community._id} community={community} />
            ))
          ) : (
            <p>
              No Communities found! Please search again or create a new
              community!
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SearchScreen;
