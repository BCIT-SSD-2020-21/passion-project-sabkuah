import React from 'react';
import { Card, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { MoreVertIcon } from '@material-ui/icons/MoreVert';

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
