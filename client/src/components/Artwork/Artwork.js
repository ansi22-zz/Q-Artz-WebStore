import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Artwork(props) {
  // console.log(props);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} raised elevation={6}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textDecoration: "none" }}
            >
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ₹ {props.price}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ display: "flex" }}
            >
              <VisibilityIcon style={{ size: "30px", color: "grey" }} /> 121
              Reviews
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ marginLeft: "12px", color: "#3e2e59" }}>
          <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
          <StarHalfIcon />
        </div>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
export default Artwork;
