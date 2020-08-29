import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChildModal from "../Modal/childModal";

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
    const { _id, firstName, lastName, age, activities } = props.child;
    const { updateChild, deleteChild } = props;

    const classes = useStyles();

    return (
        <div className="card mb-3 border-0">
            <div className="row">
                <div className="col-md-2 my-auto">
                    <img src="https://via.placeholder.com/150" className="card-img" alt="placeholder"></img>
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
