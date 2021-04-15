import React from 'react';
import Map from '../../components/Map';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ReportIcon from '@material-ui/icons/Report';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Badge, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';

const CommunityDetailScreen = ({ community, posts }) => {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='d-flex flex-column justify-content-between w-100'>
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
          <div className='d-flex justify-content-center'>
            <div className='quick-controls row'>
              <Link to={`/user/communities/${community?._id}/posts`}>
                <Tooltip title='Social Posts'>
                  <Badge badgeContent={4} overlap='circle' color='primary'>
                    <div className='qc-highlight'>
                      <EmojiPeopleIcon className='qc-icons' />
                    </div>
                  </Badge>
                </Tooltip>
              </Link>
              <Tooltip title='Incident Reports'>
                <Badge badgeContent={4} overlap='circle' color='primary'>
                  <div className='qc-highlight'>
                    <ReportIcon className='qc-icons' />
                  </div>
                </Badge>
              </Tooltip>
              <Tooltip title='Discussions'>
                <Badge badgeContent={4} overlap='circle' color='primary'>
                  <div className='qc-highlight'>
                    <QuestionAnswerIcon className='qc-icons' />
                  </div>
                </Badge>
              </Tooltip>
            </div>
          </div>
        </div>
        <div>{community && <Map community={community} styling='map' />}</div>
      </div>
      <div className='recent-posts mt-3'>
        <h4>Recent Posts</h4>
        {posts?.length ? (
          posts?.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p>No posts in this community. Go add one now!</p>
        )}
      </div>
    </div>
  );
};

export default CommunityDetailScreen;
