import { Card, CardHeader, Avatar, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, { useState } from 'react';

const SearchResultCard = ({ community, handleJoinCommunity }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className='my-3 search-result-card col-xs-10 col-md-5'>
      <div className='d-flex justify-content-between pt-2'>
        <Avatar
          style={{ backgroundColor: '#192935' }}
          alt={community.title}
          className='mx-3'
        >
          {community.title.slice(0, 1)}
        </Avatar>

        <div>
          <IconButton
            aria-label='settings'
            onClick={() => handleJoinCommunity(community._id)}
          >
            <AddIcon style={{ color: '#0acf83' }} />
          </IconButton>

          <IconButton
            aria-label='add to favorites'
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <FavoriteIcon style={{ color: '#0acf83' }} />
            ) : (
              <FavoriteBorderIcon style={{ color: '#0acf83' }} />
            )}
          </IconButton>
        </div>
      </div>
      <div style={{ fontSize: '1.35rem' }}>{community.title}</div>

      <div className='row mt-2'>
        <div className='mx-2'>
          <RoomIcon style={{ color: '#0acf83' }} /> {community?.location}
        </div>
      </div>

      <p className='comm-card-desc'>{community?.description}</p>
    </Card>
  );
};

export default SearchResultCard;
