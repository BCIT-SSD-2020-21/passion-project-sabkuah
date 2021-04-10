import React from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Card,
  Typography,
} from '@material-ui/core';
import LandingLogo from '../../components/LandingLogo';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

const RegisterScreen = ({ handleSubmit, errorMsgs, user, setUser }) => {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit} className={classes.registerForm}>
          <LandingLogo />
          <Typography className={classes.title} variant='h3'>
            Blockwatch
          </Typography>
          <text style={{ marginBottom: '3%' }}>Building safe communities</text>
          {errorMsgs.map((errorMsg) => (
            <p className={classes.errorMsg}>{errorMsg}</p>
          ))}

          <TextField
            variant='outlined'
            value={user.email}
            label='email'
            placeholder='email'
            id='email'
            className={classes.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
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
            label='password'
            value={user.password}
            variant='outlined'
            placeholder='password'
            className={classes.input}
            type='password'
            id='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
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
            variant='outlined'
            value={user.confirmPassword}
            label='Confirm Password'
            placeholder='Confirm Password'
            className={classes.input}
            type='password'
            id='email'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
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
            variant='outlined'
            label='First Name'
            placeholder='First name'
            className={classes.input}
            type='text'
            id='firstName'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            variant='outlined'
            label='Last Name'
            placeholder='Last Name'
            className={classes.input}
            type='text'
            id='lastName'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant='outlined'
            value={user.location}
            label='Location'
            placeholder='Location'
            className={classes.input}
            id='location'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
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
          <Button
            variant='contained'
            type='submit'
            id='Register'
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
    fontWeight: 800,
  },
  button: {
    marginTop: '2%',
    backgroundColor: '#192935',
    color: '#fff',
    padding: 10,
    width: '50%',
  },
  errorMsg: {
    color: 'red',
    fontWeight: 400,
  },
}));

export default RegisterScreen;
