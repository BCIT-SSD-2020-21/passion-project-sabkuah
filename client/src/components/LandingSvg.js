import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as BlockWatchLogo } from '../assets/landing-img.svg';

const useStyles = makeStyles((theme) => ({
    image: {
        width: 550,
        marginBottom: '3%',
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
