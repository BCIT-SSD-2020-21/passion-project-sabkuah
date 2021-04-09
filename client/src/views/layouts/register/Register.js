import React from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Card,
    Typography,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

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
    button: {},
}));

const Register = () => {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <form className={classes.registerForm}>
                    <TextField
                        required
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
                    <TextField
                        required={true}
                        label="password"
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
                    <TextField
                        required={true}
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
                    <TextField
                        required={true}
                        label="First Name"
                        placeholder="First name"
                        type="text"
                        id="firstName"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        required={true}
                        label="Last Name"
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        required={true}
                        label="Location"
                        placeholder="Location"
                        id="location"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant="contained" type="submit" id="Register">
                        Register
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Register;
