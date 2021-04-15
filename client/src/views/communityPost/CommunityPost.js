import React, { useState, useEffect } from 'react';
import CommunityPostScreen from './CommunityPostScreen';
import useLocalStorage from 'react-use-localstorage';
import { useParams } from 'react-router-dom';
import { getPosts, editPost } from '../../network/community';

const CommunityPosts = () => {
    const [posts, setPosts] = useState(null);
    let { id } = useParams();
    const [token] = useLocalStorage('token');
    const [refreshEdit, setRefreshEdit] = useState('');
    // const [refreshPost, setRefreshPost] = useState('')

    const handleEdit = async (data) => {
        setRefreshEdit('');
        const postData = {
            title: data.title,
            description: data.description,
            category: data.category,
            image: data.image,
        };
        const response = await editPost(token, id, data._id, postData);
        setRefreshEdit(response.message);
        alert(response.message);
    };

    const handleGetPosts = async () => {
        const response = await getPosts(token, id);
        return response;
    };

    useEffect(() => {
        (async () => {
            const data = await handleGetPosts();
            console.log(data);
            setPosts(data);
        })();
        console.log(posts);
        //eslint-disable-next-line
    }, [refreshEdit]);

    return (
        <CommunityPostScreen
            posts={posts}
            handleEdit={handleEdit}
            setRefreshEdit={setRefreshEdit}
        />
    );
};

export default CommunityPosts;
