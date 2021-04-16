import React, { useState } from 'react';
import CreatePostModal from '../../components/CreatePostModal';
import PostCard from '../../components/PostCard';
import { useHistory } from 'react-router-dom';

const CommunityPostScreen = ({
  posts,
  handleEdit,
  setRefreshEdit,
  category,
}) => {
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
      <h1 className='my-2 text-center brand-font'>{category}</h1>
      <CreatePostModal
        show={show}
        setShow={setShow}
        setRefreshEdit={setRefreshEdit}
      />

      <div>
        {posts?.length ? (
          posts?.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              handleEdit={handleEdit}
              showEdit={true}
            />
          ))
        ) : (
          <h5 className='text-center p-3'>
            Looks like there are no posts yet...
          </h5>
        )}
      </div>
    </div>
  );
};

export default CommunityPostScreen;
