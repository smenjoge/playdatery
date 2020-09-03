import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChildModal from "../Modal/childModal";

const useStyles = makeStyles({
    root: {
        maxWidth: 675,
        marginTop: 50,
    },
    media: {
        marginTop: 10,
        maxWidth: "30%",
        marginLeft: "-20%",
    },
    details: {
        display: 'flex',
    },
    button: {
        background: 'rgba(34,133,195,1)',
        fontWeight: 'bolder',
        color: 'white',
    },
    buttons: {
        float: "right",
    }
});

function ChildCard(props) {
    const { _id, firstName, lastName, age, activities, image } = props.child;
    const { updateChild, deleteChild, uploadImage } = props;

    const [imageUpld, setImageUpld] = useState({
        upload: undefined,
        success: false,
        url: image || "https://via.placeholder.com/150"
    })

    const classes = useStyles();

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
        uploadImage(file, _id, "child")
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
        <Card className={classes.root}>
            <CardActions className={classes.buttons}>
                <ChildModal
                    saveChild={updateChild}
                    childValues={props.child}
                >
                    Edit
                </ChildModal>
                <Button className={classes.button} onClick={() => deleteChild(_id)}>Delete</Button>
            </CardActions>
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
                    <Typography gutterBottom variant="h5" component="h2">
                        Name: {firstName} {lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Age: {age} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Hobbies: {activities}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ChildCard;
