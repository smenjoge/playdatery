
import './upcoming.css';
import pic4 from './tim-arterbury-VkwRmha1_tI-unsplash.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function UpcomingEvents() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div>
      <div>
          <h2>Upcoming Events</h2>
         </div>
         <Grid container justify="center" >
          <Grid >
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Painting Event"
        subheader="September 14, 2020"
      />
      <CardMedia
        className={classes.media}
        image={pic4}
        title="Paiting"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Maria from Orange, NJ
         <p>Host: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
        <p>Come enjoy an afternoon of painting with watercolors!</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Please bring the following supplies:</Typography>
          <Typography paragraph>
              <ul>
            <li>Watercolors</li>
            <li>Paint brushes</li>
            <li>Paper</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>

<Grid >
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Painting Event"
        subheader="September 14, 2020"
      />
      <CardMedia
        className={classes.media}
        image={pic4}
        title="Paiting"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Maria from Orange, NJ
         <p>Host: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
        <p>Come enjoy an afternoon of painting with watercolors!</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Please bring the following supplies:</Typography>
          <Typography paragraph>
              <ul>
            <li>Watercolors</li>
            <li>Paint brushes</li>
            <li>Paper</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
   
    </Grid>
    </Grid>
    </div>
  );
}
