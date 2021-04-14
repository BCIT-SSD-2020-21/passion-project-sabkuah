import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";

const IncidentCard = ({ incident }) => {
    const classes = useStyles();
    return (
        <div className="my-3 shadow mx-1">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent className="comm-card">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <div className="avatar-container">
                                <Avatar>{incident?.title.slice(0, 1)}</Avatar>
                            </div>

                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {incident?.title}
                            </Typography>
                        </div>
                        <CardMedia className={classes.media} image="" />
                        <div>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {incident?.description}
                            </Typography>
                        </div>
                        <div className="flex-container">
                            {/* <Link to={`/user/communities/${community._id}`}> */}
                            {/* <button className="view-btn">View</button> */}
                            {/* </Link> */}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default IncidentCard;
const useStyles = makeStyles({
    root: {
        width: 300,
    },
    media: {
        height: 140,
    },
});
