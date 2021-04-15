import React, { useState } from 'react';
import CommunityCard from '../../components/CommunityCard';
import AddCommunity from '../../components/CreateCommunityModal';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from '@material-ui/core';

const UserCommunitiesScreen = ({
    communities,
    refreshPost,
    setRefreshPost,
}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Your Communities</h2>
                <div>
                    <Tooltip title="Add New Community">
                        <button
                            className="create-com-button mx-2"
                            onClick={handleShow}
                        >
                            <AddIcon />
                        </button>
                    </Tooltip>
                    <Tooltip title="Find More">
                        <Link to="/user/communities/search">
                            <button className="create-com-button mx-2">
                                <SearchIcon />
                            </button>
                        </Link>
                    </Tooltip>
                </div>
            </div>

            <div className="card-flex">
                {communities &&
                    communities.map((c) => (
                        <CommunityCard key={c._id} community={c} />
                    ))}
            </div>
            <AddCommunity
                show={show}
                setShow={setShow}
                refreshPost={refreshPost}
                setRefreshPost={setRefreshPost}
            />
        </div>
    );
};

export default UserCommunitiesScreen;
