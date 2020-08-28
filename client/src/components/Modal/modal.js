import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontWeight: 'bolder',
        color: 'white',
        margin: 20,
    }
}));


export default function ChildModal({
    handleClose,
    open,
    addChild,
    handleAddChild,
    childState,
    deleteChild
}) {

    const { id, firstName, lastName, age, activities } = childState;

    const classes = useStyles();

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h2>Add Child Information</h2>
                    <form id={id}>
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
                        <Button className={classes.button} onClick={addChild}>Add</Button>
                        {/* <Button className={classes.button} onClick={handleClose}>Update</Button> */}
                    </form>
                </div>
            </Modal>
        </div>
        
    );
}