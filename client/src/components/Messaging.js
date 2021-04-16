import { Paper } from '@material-ui/core';
import React from 'react';
import ChatRecipient from './ChatRecipient';

const Messaging = ({ community }) => {
  return (
    <Paper className='px-2 py-4 my-5' style={{ backgroundColor: '#f3f3f3' }}>
      <h5 className='text-center mb-2 brand-font'>Community Members</h5>
      <div>
        {community?.members.map((member) => (
          <ChatRecipient key={member._id} member={member} />
        ))}
      </div>
    </Paper>
  );
};

export default Messaging;
