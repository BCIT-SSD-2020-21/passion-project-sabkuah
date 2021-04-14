import React, { useState, useEffect } from 'react';
import CommunityPostScreen from './CommunityPostScreen';
import useLocalStorage from 'react-use-localstorage';
import { useParams } from 'react-router-dom';
import { getPosts } from '../../network/community';

const CommunityPosts = () => {
    const [posts, setPosts] = useState(null);
    let { id } = useParams();
    const [token] = useLocalStorage('token');

    const handleGetPosts = async () => {
        console.log('token sent to db>>', token);
        const response = await getPosts(token, id);
        return response;
    };

    useEffect(() => {
        (async () => {
            const data = await handleGetPosts();
            console.log(data);
            setPosts(data);
        })();
    }, []);

    return <CommunityPostScreen posts={posts} />;
};

export default CommunityPosts;
