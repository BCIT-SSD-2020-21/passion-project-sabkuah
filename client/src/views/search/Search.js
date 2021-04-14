import React, { useState, useEffect } from 'react';
import { getAllCommunities, joinCommunity } from '../../network/community';
import SearchScreen from './SearchScreen';
import useLocalStorage from 'react-use-localstorage';

const Search = ({ user }) => {
  const [communities, setCommunities] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [joinResponse, setJoinResponse] = useState('');
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
    const response = await joinCommunity({ id, token });
    setJoinResponse(response);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <SearchScreen
      user={user}
      communities={communities}
      handleJoinCommunity={handleJoinCommunity}
      openDialog={openDialog}
      handleCloseDialog={handleCloseDialog}
      dialogText={joinResponse}
    />
  );
};

export default Search;
