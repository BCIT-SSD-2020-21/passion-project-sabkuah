import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import { addPost } from '../network/community';
import useLocalStorage from 'react-use-localstorage';
import { useParams } from 'react-router-dom';

const CreatePostModal = ({ show, setShow }) => {
    const [token, setToken] = useLocalStorage('token', '');
    const [post, setPost] = useState({
        title: '',
        category: '',
        description: '',
    });
    let { id } = useParams();

    const handleClose = () => {
        setShow(false);
    };

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await addPost(post, token, id);
            response && handleClose();

            if (response.error) {
                console.log(response.error);
                alert(response.error);
                return;
            }
            if (response.token) {
                setToken(response.token);
                console.log('Post successful', response.data);
                alert(response.message);
                handleClose();
            }
        } catch (e) {
            console.log('Error Posting Incident', e);
        }
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
                <h2 className="modal-title">New Post</h2>

                <div className="modal-body">
                    <form className="modal-form" onSubmit={handlePost}>
                        <TextField
                            required
                            variant="outlined"
                            value={post.title}
                            label="Title"
                            placeholder="Title"
                            id="Title"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreateIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    title: e.target.value,
                                })
                            }
                        />
                        <TextField
                            required
                            value={post.category}
                            variant="outlined"
                            label="Category"
                            placeholder="Category"
                            id="Category"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreateIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    category: e.target.value,
                                })
                            }
                        />
                        <TextField
                            required
                            value={post.description}
                            variant="outlined"
                            label="Description"
                            placeholder="Description"
                            id="Description"
                            multiline={true}
                            id="email"
                            className="modal-form-input"
                            rows={5}
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    description: e.target.value,
                                })
                            }
                        />

                        <Modal.Footer>
                            <button className="modal-btn" onClick={handleClose}>
                                Close
                            </button>
                            <button className="modal-btn">Post</button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CreatePostModal;
