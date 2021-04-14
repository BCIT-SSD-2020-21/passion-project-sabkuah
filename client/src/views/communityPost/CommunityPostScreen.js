import React, { useState } from 'react';
import CreatePostModal from '../../components/CreatePostModal';
import PostCard from '../../components/PostCard';

const CommunityPostScreen = ({ posts }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="create-com-button" onClick={handleShow}>
                New Post
            </button>
            <h1>Incidents</h1>
            <CreatePostModal show={show} setShow={setShow} />

            <div className="card-flex">
                {posts?.map((post) => (
                    <PostCard post={post} />
                ))}
            </div>
        </div>
    );
};

export default CommunityPostScreen;
