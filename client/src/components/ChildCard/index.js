import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChildModal from "../Modal/childModal";
import API from "../../utils/API";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 50,
    },
    media: {
        height: 300,
    },
    button: {
        background: 'rgba(34,133,195,1)',
        fontWeight: 'bolder',
        color: 'white',
    }
});

function ChildCard(props) {
    const { _id, firstName, lastName, age, activities, image } = props.child;
    const { updateChild, deleteChild } = props;

    const classes = useStyles();

    const [imageUpld, setImageUpld] = useState({
        success: false,
        url: image || "https://via.placeholder.com/150"
    })

    function handleChange(event) {
        let file = event.target.files[0];
        // Split the filename to get the name and type
        let fileParts = file.name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        console.log("Preparing the upload");
        API.signIntoS3({
            fileName: fileName,
            fileType: fileType
        })
            .then(response => {
                var returnData = response.data.data.returnData;
                var signedRequest = returnData.signedRequest;
                var url = returnData.url;
                console.log("Recieved a signed request " + signedRequest);
                // Put the fileType in the headers for the upload
                var options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };
                API.uploadImageS3(signedRequest, file, options)
                    .then(result => {
                        console.log(`Image uploded to S3:`, result)
                        API.updateChildImage(_id, url)
                            .then(res => {
                                console.log(`Image URL saved to DB: `, res.data);
                                setImageUpld({success: true, url : url})
                            })
                            .catch(error => console.log(`Error saving image URL to DB:`, error))
                        
                    })
                    .catch(error => {
                        console.log(`Error uploading image to S3:`, error);
                    })
            })
            .catch(error => {
                console.log(`Error signing into S3:`, error);
            })
    }

    return (
        <div className="card mb-3 border-0">
            <div className="row">
                <div className="col-md-2 my-auto">
                    <img src={imageUpld.url} className="card-img"></img>
                    <input type="file" className="process_upload-btn" onChange={(e) => handleChange(e)}></input>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">Name: {firstName} {lastName} </p>
                        <p className="card-text">Age: {age} </p>
                        <p className="card-text">Hobbies: {activities} </p>
                    </div>
                </div>
                <ChildModal
                    saveChild={updateChild}
                    childValues={props.child}
                >
                    Edit
                </ChildModal>
                <Button className={classes.button} onClick={() => deleteChild(_id)}>Delete</Button>
            </div>
        </div>
    );
}

export default ChildCard;
