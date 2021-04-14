import React, { useState } from 'react';
import NewPost from '../../components/CreatePost';
import NewPostCard from '../../components/PostCard';

const CommunityPostScreen = ({ posts }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="create-com-button" onClick={handleShow}>
                New Post
            </button>
            <h1>Incidents</h1>
            <NewPostCard show={show} setShow={setShow} />

            <div className="card-flex">
                {posts?.map((post) => (
                    <NewPost post={post} />
                ))}
            </div>
        </div>
    );
};

export default CommunityPostScreen;
