import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const SearchResultCard = ({ community }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className='my-3 search-result-card col-xs-10 col-md-5'>
      <CardHeader
        avatar={
          <Avatar
            style={{ backgroundColor: '#192935' }}
            alt={community.title}
            className='mx-3'
          >
            {community.title.slice(0, 1)}
          </Avatar>
        }
        action={
          <>
            <Link to='/user/communities'>
              <IconButton aria-label='settings'>
                <AddIcon style={{ color: '#0acf83' }} />
              </IconButton>
            </Link>
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
          </>
        }
        title={<div style={{ fontSize: '1.35rem' }}>{community.title}</div>}
        subheader={
          <div className='row mt-2'>
            <div className='mx-2'>
              <RoomIcon style={{ color: '#0acf83' }} /> {community.location}
            </div>
            {/* <div className='mx-2'>
              <PeopleIcon style={{ color: '#0acf83' }} />{' '}
              {community.members.length}
            </div> */}
          </div>
        }
      />
      <CardContent>{community.description}</CardContent>
    </Card>
  );
};

export default SearchResultCard;
