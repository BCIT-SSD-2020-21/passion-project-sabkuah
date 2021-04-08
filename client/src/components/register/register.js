import React from 'react';
import { makeStyles, TextField, Button, Card } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    registerForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
    },
    input: {
        width: '80%',
    },
    button: {},
}));
const Register = () => {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <div className={classes.registerForm}>
                    <TextField
                        required={true}
                        type="text"
                        label="Email"
                        variant="outlined"
                        placeholder="email"
                        type="email"
                        id="email"
                        className=""
                        value=""
                        autoComplete="on"
                    />
                    <TextField
                        required={true}
                        label="Password"
                        placeholder="Password"
                        variant="outlined"
                        type="password"
                        id="password"
                        className=""
                        value=""
                        autoComplete="on"
                    />
                    <TextField
                        required={true}
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        variant="outlined"
                        type="password"
                        id="email"
                        className=""
                        value=""
                        autoComplete="on"
                    />
                    <TextField
                        required={true}
                        label="First Name"
                        placeholder="First name"
                        variant="outlined"
                        type="text"
                        id="firstName"
                        className=""
                        value=""
                        autoComplete="on"
                    />
                    <TextField
                        required={true}
                        label="Last Name"
                        placeholder="Last Name"
                        variant="outlined"
                        type="text"
                        id="lastName"
                        className=""
                        value=""
                        autoComplete="on"
                    />
                    <TextField
                        required={true}
                        label="Location"
                        placeholder="Location"
                        variant="outlined"
                        id="location"
                        className=""
                        value=""
                        autoComplete="on"
                    />
                </div>

                <Button variant="contained" type="submit" id="Register">
                    Register
                </Button>
            </Card>
        </div>
    );
};

export default Register;
