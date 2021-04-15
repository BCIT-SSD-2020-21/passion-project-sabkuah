import React, { useState } from 'react';
import CreatePostModal from '../../components/CreatePostModal';
import PostCard from '../../components/PostCard';
import { useHistory, useParams, Link } from 'react-router-dom';

const CommunityPostScreen = ({ posts, handleEdit }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const { id } = useParams();

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

      <div>
        {posts?.map((post) => (
          <Link
            to={`/user/communities/${id}/posts/${post?._id}`}
            className='link'
            key={post._id}
          >
            <PostCard post={post} handleEdit={handleEdit} showEdit={true} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommunityPostScreen;
