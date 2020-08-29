import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import UserModal from "../Modal/userModal";
import ChildModal from "../Modal/childModal";
import UserContext from "../../utils/userContext";

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
    const { updateUser,  addChild } = props;

    const { userState } = useContext(UserContext);
    const { user } = userState;
    const classes = useStyles();
    console.log(`User on profile page:`, user);

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://via.placeholder.com/250"
                        title="displayName"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3" >
                            Name: {user.displayName}
                        </Typography>
                        <Typography>
                            Email: {user.emailID}
                        </Typography>
                        <Typography>
                            City: {(user.address && user.address.city) ? user.address.city : ""}
                        </Typography>
                        <Typography>
                            State: {(user.address && user.address.state) ? user.address.state : ""}
                        </Typography>
                        <Typography>
                            Zip: {(user.address && user.address.zip) ? user.address.zip : ""}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <UserModal
                        updateUser={updateUser}
                    >
                        Edit
                    </UserModal>
                    <ChildModal
                        saveChild={addChild}
                        childValues={{firstName : "", lastName : "", age : "", activities : ""}} // Sending spaces for child fields from Add action
                    >
                        Add Child
                    </ChildModal>
                </CardActions>
            </Card>


            {/* <Card>
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
                        <Button className={classes.button} onClick={deleteChild}>Delete</Button>
                    </form>
                </CardActions>
            </Card> */}
        </div>
    )
}

export default profileCard;