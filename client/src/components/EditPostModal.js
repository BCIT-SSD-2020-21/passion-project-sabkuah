import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MenuItem from '@material-ui/core/MenuItem';

const EditPostModal = ({
    showEditModal,
    setShowEditModal,
    post,
    handleEdit,
}) => {
    const [editedPost, setEditedPost] = useState(post);
    const classes = useStyles();

    const handleUpdatePost = async (e) => {
        e.preventDefault();
        await handleEdit(editedPost);
        setShowEditModal(false);
    };

    return (
        <Modal
            show={showEditModal}
            backdrop="static"
            keyboard={false}
            style={{ marginTop: '5%' }}
        >
            <h2 className="modal-title">Update Post</h2>
            <div className="modal-body">
                <button
                    className="modal-btn"
                    onClick={() => setShowEditModal(false)}
                >
                    X
                </button>
                <form className="modal-form" onSubmit={handleUpdatePost}>
                    <TextField
                        required
                        value={editedPost.title}
                        variant="outlined"
                        label="Title"
                        placeholder="Title"
                        id="Title"
                        className="modal-form-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
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
                        variant="outlined"
                        label="Image URL"
                        value={editedPost.image}
                        placeholder="Image URL"
                        id="Image URL"
                        className="modal-form-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhotoCameraIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) =>
                            setEditedPost({
                                ...editedPost,
                                image: e.target.value,
                            })
                        }
                    />

                    <TextField
                        required
                        value={editedPost.description}
                        variant="outlined"
                        label="Description"
                        multiline={true}
                        id="email"
                        className="modal-form-input"
                        rows={5}
                        onChange={(e) =>
                            setEditedPost({
                                ...editedPost,
                                description: e.target.value,
                            })
                        }
                    />
                    <FormControl
                        className={classes.formControl}
                        variant="standard"
                    >
                        <InputLabel
                            htmlFor="grouped-native-select"
                            autoWidth={true}
                        >
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={editedPost.category}
                            onChange={(e) =>
                                setEditedPost({
                                    ...editedPost,
                                    category: e.target.value,
                                })
                            }
                            value={editedPost.category}
                            required
                        >
                            <MenuItem value="Incident Reports">
                                Incident Reports
                            </MenuItem>
                            <MenuItem value="Social Events">
                                Social Events
                            </MenuItem>
                            <MenuItem value="Discussions">Discussions</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <FormControl
                        className={classes.formControl}
                        variant="standard"
                    >
                        <InputLabel
                            htmlFor="grouped-native-select"
                            autoWidth={true}
                        >
                            Category
                        </InputLabel>
                        <Select
                            native
                            id="grouped-native-select"
                            onChange={(e) =>
                                setEditedPost({
                                    ...editedPost,
                                    category: e.target.value,
                                })
                            }
                            value={editedPost.category}
                            required
                        >
                            <MenuItem value="Incident Reports">
                                Incident Reports
                            </MenuItem>
                            <MenuItem value="Social Events">
                                Social Events
                            </MenuItem>
                            <MenuItem value="Discussions">Discussions</MenuItem>
                        </Select>
                    </FormControl> */}
                    <Modal.Footer>
                        <button type="submit" className="modal-btn">
                            Update
                        </button>
                    </Modal.Footer>
                </form>
            </div>
        </Modal>
    );
};

export default EditPostModal;

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: '67%',
    },
}));
