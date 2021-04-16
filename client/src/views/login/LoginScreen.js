import React, { useState } from 'react';
import { TextField, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import LandingLogo from '../../components/LandingLogo';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

const Login = ({ handleLogin }) => {
    const [user, setUser] = useState({ email: '', password: '' });

    const submitForm = (e) => {
        e.preventDefault();
        handleLogin(user);
    };

    return (
        <Container>
            <div className="flex-container">
                <div id="login-pg">
                    <form onSubmit={submitForm} className="login-form">
                        <LandingLogo />
                        <h1 className="login-title">blockwatch</h1>
                        <p className="login-tagline">
                            Building safe communities
                        </p>

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
                            onChange={(e) => {
                                setUser({ ...user, email: e.target.value });
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
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    password: e.target.value,
                                })
                            }
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
            </div>
        </Container>
    );
};

export default Login;
