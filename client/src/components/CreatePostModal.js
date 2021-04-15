import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';
import { addPost } from '../network/community';
import useLocalStorage from 'react-use-localstorage';
import { useParams } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MenuItem from '@material-ui/core/MenuItem';

const CreatePostModal = ({ show, setShow, setRefreshEdit }) => {
    const classes = useStyles();
    const [token, setToken] = useLocalStorage('token', '');
    const [post, setPost] = useState({
        title: '',
        category: '',
        description: '',
        image: '',
    });
    let { id } = useParams();

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await addPost(post, token, id);

            response && setRefreshEdit(response);
            response && setShow(false);
            setPost({
                title: '',
                category: '',
                description: '',
                image: '',
            });

            if (response.error) {
                console.log(response.error);
                alert(response.error);
                return;
            }
            if (response.token) {
                setToken(response.token);
                console.log('Post successful', response.data);
                alert(response.message);
                setShow(false);
            }
        } catch (e) {
            console.log('Error Posting Incident', e);
        }
    };
    return (
        <div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                style={{ marginTop: '5%' }}
            >
                <h2 className="modal-title">New Post</h2>

                <div className="modal-body">
                    <button
                        className="modal-btn"
                        onClick={() => setShow(false)}
                    >
                        X
                    </button>
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
                            variant="outlined"
                            label="Image URL"
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
                                setPost({
                                    ...post,
                                    image: e.target.value,
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
                                value={post.category}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        category: e.target.value,
                                    })
                                }
                                value={post.category}
                            >
                                <MenuItem value="Incident Reports">
                                    Incident Reports
                                </MenuItem>
                                <MenuItem value="Social Events">
                                    Social Events
                                </MenuItem>
                                <MenuItem value="Discussions">
                                    Discussions
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <Modal.Footer>
                            <button className="modal-btn">Post</button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CreatePostModal;

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: '67%',
    },
}));
