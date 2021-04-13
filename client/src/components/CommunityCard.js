import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const CommunityCard = () => {
    const classes = useStyles();
    return (
        <div className="my-3 shadow mx-1">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="" />
                    <CardContent className="comm-card">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <div className="avatar-container">
                                <Avatar>K</Avatar>
                            </div>

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

                        <div className="flex-container">
                            <button className="view-btn">View</button>
                        </div>
                    </CardContent>
                </CardActionArea>
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
