import React, { useState, useEffect } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import EditPostModal from './EditPostModal';
import { Badge } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import jwtDecode from 'jwt-decode';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getCommentsByPostId } from '../network/community';
import { Card } from '@material-ui/core';

const PostCard = ({ post, handleEdit, showEdit }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token] = useLocalStorage('token');
  const [comments, setComments] = useState([]);
  const [refresh, newRefresh] = useState(false);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const user = jwtDecode(token);
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getCommentsByPostId({ postId, token });
      console.log('comments updated', response.comments);
      setComments(response.comments);
    })();
  }, [refresh]);

  const getCommentsForPostClicked = async (id) => {
    newRefresh(false);
    setPostId(id);
    newRefresh(true);
  };

  return (
    <Accordion
      className='my-3 shadow mx-1 w-100'
      onClick={() => getCommentsForPostClicked(post?._id)}
    >
      <AccordionSummary aria-controls='panel2a-content' id='panel2a-header'>
        <div className='w-100'>
          <div className='ml-1 my-3 pl-3'>
            <div className='d-flex row justify-content-between w-100 pl-3'>
              <h5 className='mb-2'>{post?.title}</h5>
              <p>{post?.category}</p>
            </div>
            <Typography variant='body2' component='p'>
              {post?.description}
            </Typography>
            <CardMedia image={post?.image ? post.image : ''} />
          </div>

          <div className='comm-card pl-4 pt-2'>
            <div className='row justify-content-between pr-3'>
              <div className='row w-50 d-flex align-content-center ml-3 my-1'>
                <div className='avatar-container'>
                  <Avatar src={post?.author.avatar} />
                </div>
                <p className='text-muted mt-0'>
                  {post?.author.firstName} {post?.author.lastName} <br />{' '}
                  {post?.date}
                </p>
              </div>
              <div className='mr-3'>
                {showEdit && currentUser?._id === post.author?._id && (
                  <IconButton onClick={() => setShowEditModal(true)}>
                    <CreateIcon />
                  </IconButton>
                )}
                <Badge
                  badgeContent={post?.comments ? post.comments.length : '?'}
                  overlap='circle'
                  color='primary'
                >
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                </Badge>
              </div>
            </div>
          </div>
          {/* </Card> */}
          <EditPostModal
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            post={post}
            handleEdit={handleEdit}
          />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {/* ===== COMMENTS ===== */}
        <div>
          {comments?.length &&
            comments?.map((comment) => (
              <Card key={comment._id}>{comment.body}</Card>
            ))}
          <div className='row px-2'>
            <TextField
              id='outlined-multiline-static'
              label='Add Comment'
              multiline
              variant='outlined'
              className='w-100'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton>
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default PostCard;
