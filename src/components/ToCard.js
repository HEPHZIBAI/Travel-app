import {Card,CardActions,CardContent,CardHeader,CardMedia,IconButton,Rating,Typography,} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Photo from "../asserts/photo.avif";

const ToCard = () => {
  return (
    <Card sx={{ maxWidth:600,marginBottom:'20px' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="A Perfect Holiday Spot"
        />
      <CardMedia component="img" height="194" image={Photo} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Rating
            name="simple-controlled"
            value='value'
        />
      </CardActions>
    </Card>
  );
};

export default ToCard;
