import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';

const ChatRecipient = ({ member }) => {
  return (
    <Card className='my-2'>
      <CardHeader
        avatar={<Avatar aria-label={member?.firstName} src={member?.avatar} />}
        title={`${member.firstName} ${member.lastName}`}
        subheader={member.location}
      />
    </Card>
  );
};

export default ChatRecipient;
