import React, { useState } from 'react';
import NewIncident from '../../components/CreateIncident';
import IncidentCard from '../../components/IncidentCard';

const CommunityIncidentsScreen = ({ incidents, community }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button className="create-com-button" onClick={handleShow}>
                New Post
            </button>
            <h1>Incidents</h1>
            <NewIncident show={show} setShow={setShow} />

            <div className="card-flex">
                {incidents?.map((incident) => (
                    <IncidentCard incident={incident} />
                ))}
            </div>
        </div>
    );
};

export default CommunityIncidentsScreen;
