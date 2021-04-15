import React, { useState } from 'react';
import CreatePostModal from '../../components/CreatePostModal';
import PostCard from '../../components/PostCard';
import { useHistory } from 'react-router-dom';

const CommunityPostScreen = ({ posts, handleEdit }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  return (
    <div>
      <div className='row d-flex justify-content-between'>
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
      <h1 className='my-2 text-center'>Posts</h1>
      <CreatePostModal show={show} setShow={setShow} />

      <div className='card-flex'>
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} handleEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default CommunityPostScreen;
