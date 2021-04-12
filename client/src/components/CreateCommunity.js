import React from 'react';
import { TextField } from '@material-ui/core';
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
        backdrop='static'
        keyboard={false}
      >
        <h2 className='modal-title'>Create a community</h2>

        <div className='modal-body'>
          <form className='modal-form'>
            <TextField
              variant='outlined'
              label='Community name'
              placeholder='Community name'
              id='email'
              className='modal-form-input'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <CreateIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              label='City'
              placeholder='City'
              id='email'
              className='modal-form-input'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LocationCityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              label='Province'
              placeholder='Province'
              id='email'
              className='modal-form-input'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LocationCityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant='outlined'
              label='Description'
              multiline={true}
              id='email'
              className='modal-form-input'
              rows={5}
            />
          </form>
        </div>

        <Modal.Footer>
          <button className='modal-btn' onClick={handleClose}>
            Close
          </button>
          <button className='modal-btn'>Submit</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateCommModal;
