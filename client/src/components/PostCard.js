import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import CommentIcon from '@material-ui/icons/Comment';
import EditPostModal from './EditPostModal';

const PostCard = ({ post }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className='my-3 shadow mx-1 w-100'>
      <Card className='post-card'>
        <div className='row ml-1 mt-3 pl-3'>
          <div className='avatar-container'>
            <Avatar src={post?.author.avatar} />
          </div>
          <div>
            <h5 className='mb-0'>{post?.title}</h5>
            <p className='text-muted mt-0'>
              {post?.author.firstName} {post?.author.lastName}{' '}
            </p>
          </div>
        </div>

        <div className='comm-card pl-4 pt-2'>
          <Typography variant='body2' component='p'>
            {post?.description}
          </Typography>
          <CardMedia image={post?.image} />
          <div className='row justify-content-end pr-3'>
            <IconButton onClick={() => setShowEditModal(true)}>
              <CreateIcon />
            </IconButton>
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
