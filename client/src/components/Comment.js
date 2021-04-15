import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

const Comment = ({ comment, handleDeleteComment, postId }) => {
  return (
    <div
      className='w-100 ml-4 my-3 p-1'
      style={{ backgroundColor: 'lightgray', borderRadius: '1rem' }}
    >
      <div className='row'>
        <Avatar src={comment.author.avatar} className='mr-3' />
        <div className='mx-3'>
          <strong className='row'>
            {comment.author.firstName} {comment.author.lastName}
          </strong>
          {comment.body}
        </div>
        <IconButton
          onClick={() => {
            handleDeleteComment(postId, comment._id);
          }}
        >
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Comment;
