import React from 'react';
import {
    makeStyles,
    TextField,
    Button,
    Container,
    Typography,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingLogo from '../../components/LandingLogo';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

const RegisterScreen = ({ handleSubmit, errorMsgs, user, setUser }) => {
    return (
        <Container>
            <div id="register-pg">
                <div className="reg-img">
                    <LandingLogo />

                    <h1 className="reg-title ">blockwatch</h1>
                    <p className="reg-tagline">Building safe communities</p>
                </div>

                <form onSubmit={handleSubmit} className="registerForm">
                    {errorMsgs.map((errorMsg) => (
                        <p className="errorMsg">{errorMsg}</p>
                    ))}

                    <TextField
                        variant="outlined"
                        value={user.email}
                        label="email"
                        placeholder="email"
                        id="email"
                        className="reg-form-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                email: e.target.value,
                            })
                        }
                    />

                    <TextField
                        label="password"
                        value={user.password}
                        variant="outlined"
                        placeholder="password"
                        className="reg-form-input"
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

                    <TextField
                        variant="outlined"
                        value={user.confirmPassword}
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        className="reg-form-input"
                        type="password"
                        id="email"
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
                                confirmPassword: e.target.value,
                            })
                        }
                    />

                    <TextField
                        required
                        variant="outlined"
                        label="First Name"
                        placeholder="First name"
                        className="reg-form-input"
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
                        required
                        variant="outlined"
                        label="Last Name"
                        placeholder="Last Name"
                        className="reg-form-input"
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
                        variant="outlined"
                        value={user.location}
                        label="Location"
                        placeholder="Location"
                        className="reg-form-input"
                        id="location"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                location: e.target.value,
                            })
                        }
                    />
                    <button type="submit" className="reg-button">
                        Register
                    </button>

                    <Link to="/Login">Back to Sign in</Link>
                </form>
            </div>
        </Container>
    );
};

export default RegisterScreen;
