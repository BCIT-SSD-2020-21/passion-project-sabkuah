import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import useLocalStorage from 'react-use-localstorage';
import jwtDecode from 'jwt-decode';

const Comment = ({ comment, handleDeleteComment, postId }) => {
  const [token] = useLocalStorage('token');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = jwtDecode(token);
    setCurrentUser(user);
  }, []);

  return (
    <div
      className='w-100 ml-4 my-3 p-1'
      style={{ backgroundColor: 'lightgray', borderRadius: '1rem' }}
    >
      <div className='row justify-content-between'>
        <div className='row'>
          <Avatar src={comment.author.avatar} className='mr-3' />
          <div className='mx-3'>
            <strong className='row'>
              {comment.author.firstName} {comment.author.lastName}
            </strong>
            {comment.body}
          </div>
        </div>
        {currentUser?._id === comment.author._id && (
          <IconButton
            onClick={() => {
              handleDeleteComment(postId, comment._id);
            }}
          >
            <CancelIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Comment;
