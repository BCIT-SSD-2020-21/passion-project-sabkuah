import React, { useState, useEffect } from 'react';
import CommunityPostScreen from './CommunityPostScreen';
import useLocalStorage from 'react-use-localstorage';
import { useParams } from 'react-router-dom';
import { getPosts, editPost } from '../../network/community';
import toastr from 'toastr';

const CommunityPosts = () => {
  const [posts, setPosts] = useState(null);
  let { id, category } = useParams();
  const [token] = useLocalStorage('token');
  const [refreshEdit, setRefreshEdit] = useState('');

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
    toastr['success'](response.message);
  };

  const handleGetPosts = async () => {
    const response = await getPosts(token, id);
    return response;
  };

  let filterBy;
  switch (category) {
    case 'social':
      filterBy = 'Social Events';
      break;
    case 'incidents':
      filterBy = 'Incident Reports';
      break;
    case 'discussions':
      filterBy = 'Discussions';
      break;
    default:
      filterBy = '';
  }

  useEffect(() => {
    (async () => {
      const data = await handleGetPosts();
      const filteredPosts = data.filter((post) => post.category === filterBy);
      console.log(filteredPosts);
      setPosts(filteredPosts);
    })();
    console.log(posts);
    //eslint-disable-next-line
  }, [refreshEdit]);

  return (
    <CommunityPostScreen
      posts={posts}
      handleEdit={handleEdit}
      setRefreshEdit={setRefreshEdit}
      category={filterBy}
    />
  );
};

export default CommunityPosts;
