import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommunityDetailScreen from './CommunityDetailScreen';
import useLocalStorage from 'react-use-localstorage';
import { getCommunity, getPosts } from '../../network/community';

const CommunityDetail = ({ user }) => {
  const { id } = useParams();
  const [token] = useLocalStorage('token');
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState(null);
  const [didRefresh, setDidRefresh] = useState(false);

  const handleGetCommunity = async () => {
    const response = await getCommunity({ id, token });
    console.log('community', response.community);
    return response.community;
  };

  useEffect(() => {
    (async () => {
      const data = await handleGetCommunity();
      setCommunity(data);
    })();
    console.log(didRefresh);
    // eslint-disable-next-line
  }, [didRefresh]);

  useEffect(() => {
    (async () => {
      const data = await getPosts(token, id);
      console.log('GET POSTS >>>', data);
      setPosts(data);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <CommunityDetailScreen
      user={user}
      id={id}
      community={community}
      posts={posts}
      setDidRefresh={setDidRefresh}
      didRefresh={didRefresh}
    />
  );
};

export default CommunityDetail;
