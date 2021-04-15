import React, { useState, useEffect } from 'react';
import CommunityPostScreen from './CommunityPostScreen';
import useLocalStorage from 'react-use-localstorage';
import { useParams } from 'react-router-dom';
import { getPosts, editPost } from '../../network/community';

const CommunityPosts = () => {
    const [posts, setPosts] = useState(null);
    let { id } = useParams();
    const [token] = useLocalStorage('token');
    const [edit, setEdit] = useState('');

    const handleEdit = async (data) => {
        setEdit('');
        const postData = {
            title: data.title,
            description: data.description,
            category: data.category,
        };
        const response = await editPost(token, id, data._id, postData);
        setEdit(response.message);
        alert(edit);
    };

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
        console.log(posts);
    }, [edit]);

    return <CommunityPostScreen posts={posts} handleEdit={handleEdit} />;
};

export default CommunityPosts;
