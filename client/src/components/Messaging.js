import { Paper } from '@material-ui/core';
import React from 'react';
import ChatRecipient from './ChatRecipient';

const Messaging = () => {
  return (
    <Paper className='px-2 py-4 my-5'>
      <h4>Messages</h4>
      <div>
        <ChatRecipient name='Mary Gibson' community='Vancouver West' />
        <ChatRecipient name='Russ Telen' community='Vancouver West' />
        <ChatRecipient name='Kalvin Tang' community='Kerrisdale-Arbutus' />
      </div>
    </Paper>
  );
};

export default Messaging;
