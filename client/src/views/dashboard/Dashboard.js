import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Messaging from '../../components/Messaging';
import AddCommunity from '../../components/CreateCommunity';

const Dashboard = ({ children }) => {
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <AddCommunity show={show} setShow={setShow} />
            <div className="row">
                <div className="col-xs-12 col-lg-9">
                    <button className="create-com-button" onClick={handleShow}>
                        Add Community
                    </button>
                    {children}
                </div>

                <div
                    className="col-xs-12 col-lg-3"
                    // style={{ backgroundColor: 'lightgrey' }}
                >
                    <Calendar onChange={onChange} value={value} />
                    <Messaging />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
