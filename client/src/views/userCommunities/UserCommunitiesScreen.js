import React, { useState } from 'react';
import AddCommunity from '../../components/CreateCommunity';

const UserCommunitiesScreen = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="Button-flex">
                <button className="create-com-button">New Incident</button>
                <button className="create-com-button" onClick={handleShow}>
                    Add Community
                </button>
            </div>
            <AddCommunity show={show} setShow={setShow} />
            choose a community! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam deleniti animi repellat eligendi
            praesentium placeat rerum itaque, mollitia quasi quidem obcaecati
            nihil! Aut eaque recusandae ea quae aliquam ipsum corporis. <br />{' '}
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            libero, voluptate eius ipsa vero consequatur consectetur, odit, est
            nemo minima dignissimos sequi illum veritatis nobis molestias. Quas
            sapiente voluptatem quibusdam?
        </div>
    );
};

export default UserCommunitiesScreen;
