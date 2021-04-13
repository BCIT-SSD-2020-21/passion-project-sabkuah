import React from 'react';
import { TextField } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CreateIcon from '@material-ui/icons/Create';

const CreateIncident = ({ show, setShow }) => {
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
                style={{ marginTop: '5%' }}
            >
                <h2 className="modal-title">New Incident</h2>

                <div className="modal-body">
                    <form className="modal-form">
                        <TextField
                            variant="outlined"
                            label="Incident Title"
                            placeholder="Incident Title"
                            id="Incident Title"
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
                            label="Date"
                            placeholder="Date"
                            id="Date"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <DateRangeIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            label="Description"
                            multiline={true}
                            id="email"
                            className="modal-form-input"
                            rows={5}
                        />
                    </form>
                </div>

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

export default CreateIncident;
