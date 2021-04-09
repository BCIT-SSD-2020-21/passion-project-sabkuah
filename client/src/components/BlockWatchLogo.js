import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as BlockwatchLogo } from '../assets/Blockwatch-Logo.svg';

const useStyles = makeStyles((theme) => ({
    image: {
        width: 400,
        marginBottom: '-15%',
    },
}));

const BlockWatchLogo = () => {
    const classes = useStyles();
    return (
        <div>
            <BlockwatchLogo className={classes.image} />
        </div>
    );
};

export default BlockWatchLogo;
