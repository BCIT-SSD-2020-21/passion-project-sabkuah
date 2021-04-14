import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommunityScreen from './CommunityScreen';
import useLocalStorage from 'react-use-localstorage';
import { getCommunity } from '../../network/community';

const Community = () => {
  const { id } = useParams();
  const [token] = useLocalStorage('token');
  const [community, setCommunity] = useState(null);

  const handleGetCommunity = async () => {
    const response = await getCommunity({ id, token });
    return response.community;
  };

  useEffect(() => {
    (async () => {
      const data = await handleGetCommunity();
      setCommunity(data);
    })();
    // eslint-disable-next-line
  }, []);

  return <CommunityScreen community={community} />;
};

export default Community;
