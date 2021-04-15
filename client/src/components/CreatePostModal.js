import React, { useState, useEffect } from 'react';
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

const CreatePostModal = ({ show, setShow }) => {
    const classes = useStyles();
    const [token, setToken] = useLocalStorage('token', '');
    const [displayPost, setDisplayPost] = useState('');
    const [post, setPost] = useState({
        title: '',
        category: '',
        description: '',
    });
    let { id } = useParams();

    const handlePost = async (data) => {
        setDisplayPost('');
        const postData = {
            title: data.title,
            description: data.description,
            category: data.category,
        };
        try {
            const response = await addPost(post, token, data._id, postData);
            setDisplayPost(response.message);
            setShow(false);
            alert(response.message);

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
    useEffect(() => {
        (async () => {
            const data = await handlePost();
            console.log(data);
            setPost(data);
        })();
        console.log(post);
        //eslint-disable-next-line
        console.log(displayPost);
    }, []);
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
                        <FormControl
                            className={classes.formControl}
                            variant="filled"
                        >
                            <InputLabel
                                htmlFor="grouped-native-select"
                                autoWidth={true}
                            >
                                Category
                            </InputLabel>
                            <Select
                                native
                                defaultValue=""
                                id="grouped-native-select"
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        category: e.target.value,
                                    })
                                }
                                value={post.category}
                            >
                                <option value="Report Incidents">
                                    Report Incidents
                                </option>
                                <option value="Social Events">
                                    Social Events
                                </option>

                                <option value="Discussions">Discussions</option>
                            </Select>
                        </FormControl>
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
                            <button
                                className="modal-btn"
                                onClick={() => setShow(false)}
                            >
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

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: '67%',
    },
}));
