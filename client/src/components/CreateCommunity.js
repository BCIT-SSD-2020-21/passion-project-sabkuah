import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Container,
    Typography,
} from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import CreateIcon from '@material-ui/icons/Create';

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
                    <Modal.Title className="modal-title">
                        Create a community
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form">
                        <TextField
                            variant="outlined"
                            value=""
                            label="Community name"
                            placeholder="Community name"
                            id="email"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreateIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            value=""
                            label="City"
                            placeholder="City"
                            id="email"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationCityIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            value=""
                            label="Province"
                            placeholder="Province"
                            id="email"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationCityIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            value=""
                            label="Description"
                            multiline={true}
                            id="email"
                            className="modal-form-input"
                            rows={5}
                        />
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <button className="modal-btn" onClick={handleClose}>
                        Close
                    </button>
                    <button className="modal-btn">Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateCommModal;
