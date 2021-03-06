import { Container, Paper, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const SearchBar = ({ setQuery }) => {
  return (
    <Container>
      <div className='search'>
        <Paper
          component='form'
          className='search-bar'
          style={{ backgroundColor: '#f3f3f3' }}
        >
          <IconButton className='iconButton' aria-label='search'>
            <SearchIcon />
          </IconButton>
          <InputBase
            className='input'
            placeholder='Begin your search'
            autoFocus={true}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Paper>
      </div>
    </Container>
  );
};

export default SearchBar;
