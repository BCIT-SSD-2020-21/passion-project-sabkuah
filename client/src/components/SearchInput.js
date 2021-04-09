import { useState } from 'react';
import { Container, Paper, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <div className='search'>
        <Paper component='form' className='search-bar'>
          <IconButton className='iconButton' aria-label='search'>
            <SearchIcon />
          </IconButton>
          <InputBase
            className='input'
            placeholder='Search'
            autoFocus={true}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Paper>
      </div>
    </Container>
  );
};

export default SearchBar;
