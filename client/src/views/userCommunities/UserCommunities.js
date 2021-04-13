import React, { useState } from 'react';
import UserCommunitiesScreen from './UserCommunitiesScreen';

const UserCommunities = () => {
    const [createCommunity, setCreateCommunity] = useState({
        title: '',
        location: '',
        description: '',
    });

    return <UserCommunitiesScreen />;
};

export default UserCommunities;
