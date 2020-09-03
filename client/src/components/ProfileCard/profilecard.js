import React, { useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserModal from "../Modal/userModal";
import ChildModal from "../Modal/childModal";
import UserContext from "../../utils/userContext";


const useStyles = makeStyles({
    root: {
        maxWidth: 675,
        // marginTop: 50,
    },
    media: {
        marginTop: 10,
        maxWidth: "30%",
        marginLeft: "-20%",
    },
    details: {
        display: 'flex',
        marginTop: 50,
    },
    buttons: {
        float: "right",
    }
});

function profileCard(props) {
    const { updateUser,  addChild, uploadImage } = props;

    const { userState } = useContext(UserContext);
    const { user } = userState;
    const classes = useStyles();
    console.log(`User on profile page:`, user);

    const [imageUpld, setImageUpld] = useState({
        upload: undefined,
        success: false,
        url: user.image || "https://via.placeholder.com/250"
    })

    const Successmsg = () => (
        <p style={{ color: 'green' }}>Image Uploaded Successfully.</p>
    )

    const Failuremsg = () => (
        <p style={{ color: 'red' }}>Image Uploaded Failed.</p>
    )

    const Upload = () => (
        <div >
            <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor="contained-button-file">
                <Button color="primary" component="span">
                    Upload
            </Button>
            </label>
        </div>
    );

    async function handleChange(event) {
        let file = event.target.files[0];
        uploadImage(file, user.uid, "user")
        .then (resp => {
        console.log(`response from image upload: `, resp)
        if (resp.success) {
            setImageUpld({ upload: true, success: true, url: resp.url })
        } else {
            setImageUpld({ ...imageUpld, upload: true, success: false })
        }
        })
    }

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardActionArea className={classes.details}>
                    <Box className={classes.media}>
                        {imageUpld.upload ? (imageUpld.success ? <Successmsg /> : <Failuremsg /> ) : null}
                        <CardMedia
                            component="img"
                            image={imageUpld.url}
                        />
                        <Upload />
                    </Box>
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
                <CardActions className={classes.buttons}>
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