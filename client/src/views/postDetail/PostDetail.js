import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCommentsByPostId, getPostById } from '../../network/community';
import useLocalStorage from 'react-use-localstorage';
import PostDetailScreen from './PostDetailScreen';

const PostDetail = () => {
  const { postId } = useParams();
  const [token] = useLocalStorage('token');
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getCommentsByPostId({ postId, token });
      setPost(response);
    })();
  }, []);

  return <PostDetailScreen post={post} />;
};

export default PostDetail;
