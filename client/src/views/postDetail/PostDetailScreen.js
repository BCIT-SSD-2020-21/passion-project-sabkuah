import { Card } from '@material-ui/core';
import React from 'react';

const PostDetailScreen = ({ post }) => {
  return (
    <div>
      <h2>These are the comments for this post:</h2>
      {post?.comments.map((comment) => (
        <Card
          key={comment._id}
          className='m-3 p-4'
          style={{ backgroundColor: 'grey' }}
        >
          {comment.body}
        </Card>
      ))}
    </div>
  );
};

export default PostDetailScreen;
