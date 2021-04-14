import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommunityDetailScreen from './CommunityDetailScreen';
import useLocalStorage from 'react-use-localstorage';
import { getCommunity } from '../../network/community';

const CommunityDetail = () => {
  const { id } = useParams();
  const [token] = useLocalStorage('token');
  const [community, setCommunity] = useState(null);

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
    // eslint-disable-next-line
  }, []);

  return <CommunityDetailScreen community={community} />;
};

export default CommunityDetail;
