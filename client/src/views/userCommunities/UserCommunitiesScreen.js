import React from 'react';

const UserCommunitiesScreen = ({ communities }) => {
  return (
    <div>
      This user is a part of: <br /> <br />
      <div>
        {communities && communities.map((c) => <h1 key={c._id}>{c.title}</h1>)}
      </div>
    </div>
  );
};

export default UserCommunitiesScreen;
