import React from 'react';
import Mom from './img/jonathan-borba-n1B6ftPB5Eg-unsplash.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: 50,
    },
    media: {
      height: 300,
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontWeight: 'bolder',
        color: 'white',
    }
  });

  export default function Profile() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Mom}
            title="displayName"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lisa 
              {/* {displayName} */}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Orange, NJ</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.button}>
            Add Child
          </Button>
        </CardActions>
      </Card>
    );
  }