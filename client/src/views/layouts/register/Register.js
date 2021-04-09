import React, { Component } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Card,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BlockwatchLogo from '../../../components/BlockWatchLogo';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    registerForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '90',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        width: '90%',
        marginBottom: 20,
    },
    title: {
        color: '#1cc47d',
        marginBottom: '2%',
    },
    button: {
        marginTop: '2%',
        backgroundColor: '#192935',
        color: '#fff',
        padding: 10,
        width: '50%',
    },
}));

const Register = () => {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <form className={classes.registerForm}>
                    <BlockwatchLogo />
                    <Typography className={classes.title} variant="h3">
                        Blockwatch
                    </Typography>
                    <text style={{ marginBottom: '3%' }}>
                        Building safe communities
                    </text>

                    <TextField
                        required
                        variant="outlined"
                        label="Email"
                        placeholder="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />

                    <TextField
                        required={true}
                        label="password"
                        variant="outlined"
                        placeholder="password"
                        type="password"
                        id="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <TextField
                        required={true}
                        variant="outlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        id="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <TextField
                        required={true}
                        variant="outlined"
                        label="First Name"
                        placeholder="First name"
                        type="text"
                        id="firstName"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <TextField
                        required={true}
                        variant="outlined"
                        label="Last Name"
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <TextField
                        required={true}
                        variant="outlined"
                        label="Location"
                        placeholder="Location"
                        id="location"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        id="Register"
                        className={classes.button}
                    >
                        Register
                    </Button>

                    <h4>Back to Sign in</h4>
                </form>
            </Card>
        </div>
    );
};

export default Register;
