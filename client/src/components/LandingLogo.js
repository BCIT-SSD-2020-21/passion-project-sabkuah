import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as BlockWatchLogo } from '../assets/landing-img.svg';
import { auto } from '@popperjs/core';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: auto,
    marginBottom: '3%',
    padding: '5%',
  },
}));

const LandingLogo = () => {
  const classes = useStyles();
  return (
    <div>
      <BlockWatchLogo className={classes.image} />
    </div>
  );
};

export default LandingLogo;
