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

function profileCard(props) {
    const { handleUpdateUser, handleEdit, addChild, handleAddChild, deleteChild } = props;
    const { city, state, zip } = props.profileState.address;
    const { firstName, lastName, age, activities } = props.childState;

    const { userState } = useContext(UserContext);
    const { user } = userState;
    const classes = useStyles();

    return (
        <div>
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
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter City"
                                name="city"
                                value={city}
                                onChange={handleEdit}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter state"
                                name="state"
                                value={state}
                                onChange={handleEdit}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter zip"
                                name="zip"
                                value={zip}
                                onChange={handleEdit}
                            />
                        </div>
                    </form>
                </CardActions>

                <CardActions>
                    <Button className={classes.button} onClick={addChild}>Add Child</Button>
                    <Button className={classes.button} onClick={deleteChild}>Delete</Button>
                    <Button className={classes.button} onClick={handleUpdateUser}>Update</Button>
                </CardActions>
            </Card>


            <Card>
                <CardActions>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={handleAddChild}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={handleAddChild}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Age"
                                name="age"
                                value={age}
                                onChange={handleAddChild}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Activities"
                                name="activities"
                                value={activities}
                                onChange={handleAddChild}
                            />
                        </div>
                    </form>
                </CardActions>
            </Card>
        </div>
    )
}

export default profileCard;