import React, { Component } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Card,
    Typography,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import LandingLogo from '../../components/LandingLogo';
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
const Login = () => {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <form className={classes.registerForm}>
                    <LandingLogo />
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
                    <Button
                        variant="contained"
                        type="submit"
                        id="Register"
                        className={classes.button}
                    >
                        Login
                    </Button>

                    <Link to="/register">Sign Up here</Link>
                </form>
            </Card>
        </div>
    );
};

export default Login;
