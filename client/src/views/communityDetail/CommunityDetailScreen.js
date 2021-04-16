import React, { useState } from 'react';
import Map from '../../components/Map';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ReportIcon from '@material-ui/icons/Report';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Badge, Tooltip, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import EditCommunityModal from '../../components/EditCommunityModal';

const CommunityDetailScreen = ({
  user,
  id,
  community,
  posts,
  setDidRefresh,
  didRefresh,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <div className='row'>
        {/* ===== COMMUNITY INFO ===== */}
        <div className='col-xs-12 col-lg-6 d-flex justify-content-between flex-column'>
          <div>
            <div className='row'>
              <h1 className='community-title mr-2'>{community?.title}</h1>
              {user?._id === community?.creator._id && (
                <IconButton onClick={handleShow}>
                  <EditIcon />
                </IconButton>
              )}
            </div>
            <p>
              <span className='community-heading mr-2'>Description:</span>
              {community?.description}
            </p>
            <p>
              <span className='community-heading mr-2'>Location:</span>
              {community?.location}
            </p>
            <p>
              <span className='community-heading mr-2'>Creator:</span>
              {community?.creator.firstName} {community?.creator.lastName}
            </p>
            <AvatarGroup>
              {community?.members.map((member) => (
                <Avatar
                  key={member._id}
                  src={member.avatar}
                  alt={member.firstName}
                />
              ))}
            </AvatarGroup>
          </div>

          {/* ===== TOOLBAR ===== */}
          <div className='d-flex justify-content-center'>
            <div className='quick-controls row'>
              <Link to={`/user/communities/${community?._id}/posts/social`}>
                <Tooltip title='Social Posts'>
                  <Badge
                    badgeContent={
                      posts?.filter((p) => p.category === 'Social Events')
                        .length
                    }
                    overlap='circle'
                    color='primary'
                  >
                    <div className='qc-highlight'>
                      <EmojiPeopleIcon className='qc-icons' />
                    </div>
                  </Badge>
                </Tooltip>
              </Link>
              <Link to={`/user/communities/${community?._id}/posts/incidents`}>
                <Tooltip title='Incident Reports'>
                  <Badge
                    badgeContent={
                      posts?.filter((p) => p.category === 'Incident Reports')
                        .length
                    }
                    overlap='circle'
                    color='primary'
                  >
                    <div className='qc-highlight'>
                      <ReportIcon className='qc-icons' />
                    </div>
                  </Badge>
                </Tooltip>
              </Link>
              <Link
                to={`/user/communities/${community?._id}/posts/discussions`}
              >
                <Tooltip title='Discussions'>
                  <Badge
                    badgeContent={
                      posts?.filter((p) => p.category === 'Discussions').length
                    }
                    overlap='circle'
                    color='primary'
                  >
                    <div className='qc-highlight'>
                      <QuestionAnswerIcon className='qc-icons' />
                    </div>
                  </Badge>
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>

        {/* ===== COMMUNITY MAP ===== */}
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center'>
          {community && (
            <Map
              id={id}
              didRefresh={didRefresh}
              community={community}
              styling='map'
            />
          )}
        </div>
      </div>
      {/* ===== RECENT POSTS ===== */}
      <div className='recent-posts mt-3'>
        <h3 className='text-center brand-font pt-4 pb-1'>Recent Posts</h3>
        {posts?.length ? (
          posts
            ?.slice(0, 3)
            .map((post) => (
              <PostCard key={post._id} post={post} showEdit={false} />
            ))
        ) : (
          <p>No posts in this community. Go add one now!</p>
        )}
      </div>
      <EditCommunityModal
        id={id}
        show={show}
        setShow={setShow}
        community={community}
        setDidRefresh={setDidRefresh}
        // refreshPost={refreshPost}
        // setRefreshPost={setRefreshPost}
      />
    </div>
  );
};

export default CommunityDetailScreen;
