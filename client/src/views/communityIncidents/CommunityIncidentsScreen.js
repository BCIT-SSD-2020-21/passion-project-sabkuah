import React, { useState } from 'react';
import NewIncident from '../../components/CreateIncident';

const CommunityIncidentsScreen = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button className="create-com-button" onClick={handleShow}>
                New Incident
            </button>
            <h1>Incidents</h1>
            <NewIncident show={show} setShow={setShow} />
        </div>
    );
};

export default CommunityIncidentsScreen;
