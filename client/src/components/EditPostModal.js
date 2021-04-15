import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';

const EditPostModal = ({
  showEditModal,
  setShowEditModal,
  post,
  handleEdit,
}) => {
  const [editedPost, setEditedPost] = useState(post);

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    await handleEdit(editedPost);
    setShowEditModal(false);
  };

  return (
    <Modal
      show={showEditModal}
      backdrop='static'
      keyboard={false}
      style={{ marginTop: '5%' }}
    >
      <h2 className='modal-title'>Update Post</h2>
      <div className='modal-body'>
        <form className='modal-form' onSubmit={handleUpdatePost}>
          <TextField
            required
            value={editedPost.title}
            variant='outlined'
            label='Title'
            placeholder='Title'
            id='Title'
            className='modal-form-input'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LocationCityIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) =>
              setEditedPost({
                ...editedPost,
                title: e.target.value,
              })
            }
          />
          <TextField
            required
            value={editedPost.category}
            variant='outlined'
            label='category'
            placeholder='category'
            id='category'
            className='modal-form-input'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LocationCityIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) =>
              setEditedPost({
                ...editedPost,
                category: e.target.value,
              })
            }
          />
          {/* <FormControl>
                        <InputLabel htmlFor="grouped-native-select">
                            Category
                        </InputLabel>
                        <Select
                            native
                            defaultValue=""
                            id="grouped-native-select"
                        >
                            <option aria-label="None" value="" />

                            <option value={editedPost.category}>
                                Report Incidents
                            </option>
                            <option value={2}>Social Events</option>

                            <option value={3}>Option 3</option>
                        </Select>
                    </FormControl> */}

          <TextField
            required
            value={editedPost.description}
            variant='outlined'
            label='Description'
            multiline={true}
            id='email'
            className='modal-form-input'
            rows={5}
            onChange={(e) =>
              setEditedPost({
                ...editedPost,
                description: e.target.value,
              })
            }
          />
          <Modal.Footer>
            <button
              className='modal-btn'
              onClick={() => setShowEditModal(false)}
            >
              Close
            </button>
            <button type='submit' className='modal-btn'>
              Update
            </button>
          </Modal.Footer>
        </form>
      </div>
    </Modal>
  );
};

export default EditPostModal;
