import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const CommunityCard = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="" />
                    <CardContent className="comm-card">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar>K</Avatar>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Kerrisdale - Arbutus
                            </Typography>
                        </div>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Keep up with what's going on in Richmond! All
                            members welcome!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button size="small" color="primary">
                        View
                    </button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CommunityCard;

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
