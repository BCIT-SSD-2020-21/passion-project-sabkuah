import React, { useState } from 'react';
import { TextField, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LandingLogo from '../../components/LandingLogo';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

const RegisterScreen = ({ handleRegister }) => {
    const [errorMsgs, setErrorMsgs] = useState([]);
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
    });

    const handleErrors = () => {
        let errArray = [];

        //Email Validation
        let email = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!email.test(user.email)) {
            errArray.push('Please enter a valid email address');
        }

        //Password length validation;
        if (user.password.length < 8) {
            errArray.push('Password needs to be a minimum of 8 characters');
        }

        // Password Uppercase validation
        let upperCase = new RegExp(/^(?=.*[A-Z])/);
        if (!upperCase.test(user.password)) {
            errArray.push('Password needs an UPPERCASE letter');
        }

        // Password Lowercase validation
        let lowerCase = new RegExp(/^(?=.*[a-z])/);
        if (!lowerCase.test(user.password)) {
            errArray.push('Password needs an lowercase letter');
        }
        //Password Number validation
        let digits = new RegExp(/^(?=.*[0-9])/);
        if (!digits.test(user.password)) {
            errArray.push('Password needs to include a number');
        }
        //Password Special character validaton
        let special = new RegExp(/^(?=.*?[#?!@$%^&*-])/);
        if (!special.test(user.password)) {
            errArray.push('Password needs to include a special character');
        }

        //Password match validation
        if (user.password !== user.confirmPassword) {
            errArray.push('Password & Confirm Password does not match');
        }

        // Location Validation
        if (user.location.length === 0) {
            errArray.push('Location is required');
        }

        return errArray;
    };

    const submitForm = (e) => {
        e.preventDefault();
        const errors = handleErrors();
        if (errors.length > 0) {
            setErrorMsgs(errors);

            // Auto Scrolls to top if there are error(s)
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            return;
        } else {
            setErrorMsgs([]);
        }

        handleRegister(user);
        setUser({
            email: '',
            password: '',
            confirmPassword: '',
            location: '',
        });
    };

    return (
        <Container>
            <div className="flex-container">
                <div id="register-pg">
                    <div className="reg-img">
                        <LandingLogo />

                        <h1 className="reg-title ">blockwatch</h1>
                        <p className="reg-tagline">Building safe communities</p>
                    </div>

                    <form onSubmit={submitForm} className="registerForm">
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
                            id="confirmPassword"
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
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    firstName: e.target.value,
                                })
                            }
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
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    lastName: e.target.value,
                                })
                            }
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
            </div>
        </Container>
    );
};

export default RegisterScreen;
