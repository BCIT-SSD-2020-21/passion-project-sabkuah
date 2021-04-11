import React, { Component } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Typography,
    Container,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import LandingLogo from '../../components/LandingLogo';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

const Login = ({ handleLogin }) => {
    return (
        <Container>
            <div id="login-pg">
                <form onSubmit={handleLogin} className="login-form">
                    <LandingLogo />
                    <h1 className="login-title">Blockwatch</h1>
                    <p className="login-tagline">Building safe communities</p>

                    <TextField
                        required
                        variant="outlined"
                        label="Email"
                        placeholder="Email"
                        className="login-form-input"
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
                        className="login-form-input"
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
                    <button
                        type="submit"
                        id="Register"
                        className="login-button"
                    >
                        Login
                    </button>

                    <Link to="/register">Sign Up here</Link>
                </form>
            </div>
        </Container>
    );
};

export default Login;
