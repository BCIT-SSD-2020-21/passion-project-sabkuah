import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

const EditPostModal = ({ showEditModal, setShowEditModal, post }) => {
    // const [updatePost, setUpdatePost] = useState();

    const handleUpdatePost = async (e) => {
        e.preventDefault();
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
                <form className="modal-form" onSubmit={handleUpdatePost}>
                    <TextField
                        required
                        // value={post.title}
                        variant="outlined"
                        label="Title"
                        placeholder="Title"
                        id="Title"
                        className="modal-form-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/* <LocationCityIcon /> */}
                                </InputAdornment>
                            ),
                        }}
                        // onChange={(e) =>
                        //     setCommunity({
                        //         ...community,
                        //         title: e.target.value,
                        //     })
                        // }
                    />
                    <TextField
                        required
                        // value={post.location}
                        variant="outlined"
                        label="location"
                        placeholder="location"
                        id="location"
                        className="modal-form-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/* <LocationCityIcon /> */}
                                </InputAdornment>
                            ),
                        }}
                        // onChange={(e) =>
                        //     setCommunity({
                        //         ...community,
                        //         location: e.target.value,
                        //     })
                        // }
                    />
                    <TextField
                        required
                        // value={post.description}
                        variant="outlined"
                        label="Description"
                        multiline={true}
                        id="email"
                        className="modal-form-input"
                        rows={5}
                        // onChange={(e) =>
                        //     setCommunity({
                        //         ...community,
                        //         description: e.target.value,
                        //     })
                        // }
                    />
                    <Modal.Footer>
                        <button
                            className="modal-btn"
                            onClick={() => setShowEditModal(false)}
                        >
                            Close
                        </button>
                        <button className="modal-btn">Update</button>
                    </Modal.Footer>
                </form>
            </div>
        </Modal>
    );
};

export default EditPostModal;
