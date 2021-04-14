import React from 'react';
import Map from '../../components/Map';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ReportIcon from '@material-ui/icons/Report';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Badge } from '@material-ui/core';

const CommunityDetailScreen = ({ community }) => {
  return (
    <div>
      <div className='quick-controls row'>
        <Badge badgeContent={4} overlap='circle' color='primary'>
          <div className='qc-highlight'>
            <EmojiPeopleIcon className='qc-icons' />
          </div>
        </Badge>
        <Badge badgeContent={4} overlap='circle' color='primary'>
          <div className='qc-highlight'>
            <ReportIcon className='qc-icons' />
          </div>
        </Badge>
        <Badge badgeContent={4} overlap='circle' color='primary'>
          <div className='qc-highlight'>
            <QuestionAnswerIcon className='qc-icons' />
          </div>
        </Badge>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h1 className='community-title'>{community?.title}</h1>
          <p>
            <span className='community-heading mr-2'>Description:</span>
            {community?.description}
          </p>
          <p>
            <span className='community-heading mr-2'>Location:</span>
            {community?.location}
          </p>
        </div>
      </div>
      {/* <div>{community && <Map community={community} styling='map' />}</div> */}
    </div>
  );
};

export default CommunityDetailScreen;
