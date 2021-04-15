import { Avatar } from '@material-ui/core';
import React from 'react';

const Comment = ({ comment }) => {
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
      </div>
    </div>
  );
};

export default Comment;
