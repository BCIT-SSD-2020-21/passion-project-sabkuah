import React, { useState } from 'react';
import CreatePostModal from '../../components/CreatePostModal';
import PostCard from '../../components/PostCard';
import { useHistory } from 'react-router-dom';

const CommunityPostScreen = ({ posts }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  return (
    <div>
      <div className='row'>
        <button
          className='create-com-button'
          onClick={() => {
            history.goBack();
          }}
        >
          {'<'}
        </button>

        <button className='create-com-button' onClick={handleShow}>
          New Post
        </button>
      </div>
      <h1>Posts</h1>
      <CreatePostModal show={show} setShow={setShow} />

      <div className='card-flex'>
        {posts?.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default CommunityPostScreen;
