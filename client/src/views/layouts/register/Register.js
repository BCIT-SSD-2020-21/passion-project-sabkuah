import React, { useState } from 'react';
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
        width: '80%',
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
    const [errorMsgs, setErrorMsgs] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
    });

    //========================
    // Handle errors function=
    //========================
    const handleErrors = () => {
        let tempArr = [];

        //Password length validation;
        if (user.password.length < 8) {
            tempArr.push('Password needs to be a minimum of 8 characters');
        }

        // Uppercase validation
        let upperCase = new RegExp(/^(?=.*[A-Z])/);
        if (!upperCase.test(user.password)) {
            tempArr.push('Password needs an UPPERCASE letter');
        }

        //Lowercase validation
        let lowerCase = new RegExp(/^(?=.*[a-z])/);
        if (!lowerCase.test(user.password)) {
            tempArr.push('Password needs an lowercase letter');
        }
        //Number validation
        let digits = new RegExp(/^(?=.*[0-9])/);
        if (!digits.test(user.password)) {
            tempArr.push('Password needs to include a number');
        }
        //Special character validaton
        let special = new RegExp(/^(?=.*?[#?!@$%^&*-])/);
        if (!special.test(user.password)) {
            tempArr.push('Password needs to include a special character');
        }

        //Password match validation
        if (user.password !== user.confirmPassword) {
            tempArr.push('Password & Confirm Password does not match');
        }

        // Location Validation
        if (user.location.length === '' || user.location.length === null) {
            tempArr.push('Location is required');
        }

        return tempArr;
    };

    //Register form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check user input errors before database
        const errors = handleErrors();
    };

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
                        className={classes.input}
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
                        variant="outlined"
                        placeholder="password"
                        className={classes.input}
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
                        variant="outlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        className={classes.input}
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
                        variant="outlined"
                        label="First Name"
                        placeholder="First name"
                        className={classes.input}
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

                    <TextField
                        required={true}
                        variant="outlined"
                        label="Last Name"
                        placeholder="Last Name"
                        className={classes.input}
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

                    <TextField
                        required={true}
                        variant="outlined"
                        label="Location"
                        placeholder="Location"
                        className={classes.input}
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
