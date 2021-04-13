import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';

const ChatRecipient = ({ name, community }) => {
  return (
    <Card className='my-2'>
      <CardHeader
        avatar={<Avatar aria-label={name}>{name.slice(0, 1)}</Avatar>}
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={name}
        subheader={community}
      />
    </Card>
  );
};

export default ChatRecipient;
