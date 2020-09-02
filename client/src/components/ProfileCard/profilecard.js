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
    container: {
        paddingLeft: 20,
    }
});

function profileCard(props) {
    const { updateUser, addChild } = props;

    const { userState } = useContext(UserContext);
    const { user } = userState;
    const classes = useStyles();
    console.log(`User on profile page:`, user);

    return (
        <div className={classes.container}>
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
                        childValues={{ _id: "", firstName: "", lastName: "", age: "", activities: "" }} // Sending spaces for child fields from Add action
                    >
                        Add Child
                    </ChildModal>
                </CardActions>
            </Card>
        </div>
    )
}

export default profileCard;