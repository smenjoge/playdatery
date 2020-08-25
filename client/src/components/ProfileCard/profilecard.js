import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserContext from "../../utils/userContext";
// import Edit from "./edit";

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

function profileCard({handleUpdateUser, 
    handleEdit, 
    city, 
    state, 
    zip}) {
    const {userState} = useContext(UserContext);
    const { user } = userState;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    // image={Mom}
                    title="displayName"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" >
                        Name: {user.displayName}
                    </Typography>
                    <Typography>
                        Email: {user.emailID}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <form>
                    <input
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    value={city}
                    onChange={handleEdit}
                    />
                     <input
                    type="text"
                    placeholder="Enter state"
                    name="state"
                    value={state}
                    onChange={handleEdit}
                    />
                      <input
                    type="text"
                    placeholder="Enter zip"
                    name="zip"
                    value={zip}
                    onChange={handleEdit}
                    />            
                </form>
            </CardActions>

            <CardActions>
                <Button className={classes.button}>
                    Add Child
          </Button>
          <Button className={classes.button} onClick={handleUpdateUser}>Edit</Button>
            </CardActions>
        </Card>
    )
}

export default profileCard;