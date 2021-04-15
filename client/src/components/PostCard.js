import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import EditPostModal from './EditPostModal';
import { Badge } from '@material-ui/core';

const PostCard = ({ post }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className='my-3 shadow mx-1 w-100'>
      <Card className='post-card'>
        <div className='row ml-1 my-3 pl-3'>
          <div>
            <h5 className='mb-2'>{post?.title}</h5>
            <Typography variant='body2' component='p'>
              {post?.description}
            </Typography>
            <CardMedia image={post?.image} />
          </div>
        </div>

        <div className='comm-card pl-4 pt-2'>
          <div className='row justify-content-between pr-3'>
            <div className='row w-25 d-flex align-content-center ml-3 my-1'>
              <div className='avatar-container'>
                <Avatar src={post?.author.avatar} />
              </div>
              <p className='text-muted mt-0'>
                {post?.author.firstName} {post?.author.lastName} <br />{' '}
                {post?.date}
              </p>
            </div>
            <div>
              <Badge badgeContent={4} overlap='circle' color='primary'>
                <IconButton>
                  <CommentIcon />
                </IconButton>
              </Badge>
              <IconButton onClick={() => setShowEditModal(true)}>
                <CreateIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Card>
      <EditPostModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        post={post}
      />
    </div>
  );
};

export default PostCard;
