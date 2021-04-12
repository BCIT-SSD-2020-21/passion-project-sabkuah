import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Container,
    Typography,
} from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';

const CreateCommModal = ({ show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a community</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <TextField
                            variant="outlined"
                            value=""
                            label=""
                            placeholder="email"
                            id="email"
                            className="reg-form-input"
                            // InputProps={{
                            //     startAdornment: (
                            //         <InputAdornment position="start">
                            //             <EmailIcon />
                            //         </InputAdornment>
                            //     ),
                            // }}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button variant="primary">Understood</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateCommModal;
