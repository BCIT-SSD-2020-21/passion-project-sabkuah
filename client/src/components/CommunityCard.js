import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import Map from "./Map"

const CommunityCard = ({ community }) => {
  const classes = useStyles()
  return (
    <Link to={`/user/communities/${community._id}`} className="link">
      <div className="my-3 shadow mx-1">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <Map id={community._id} styling="comm-card-style" />
            </CardMedia>
            <CardContent className="comm-card">
              <div className="d-flex flex-column align-items-center">
                <Typography gutterBottom variant="h5" component="h2">
                  {community?.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {community?.description}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  )
}

export default CommunityCard

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 140,
  },
})
