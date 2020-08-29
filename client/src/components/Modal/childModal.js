import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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
}));

function childModal(props) {
  const { childValues, saveChild } = props;

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [childState, setChildState] = useState({
    _id : childValues._id,
    firstName: childValues.firstName ,
    lastName:  childValues.lastName,
    age: childValues.age,
    activities: childValues.activities
  });

  function setDefaultChildState() {
    setChildState({
      _id : "",
      firstName: "",
      lastName:  "",
      age: "",
      activities: "" 
    });
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDefaultChildState();
    setOpen(false);
  };

  function handleEdit(event) {
    const { name, value } = event.target;
    setChildState({ ...childState, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveChild(childState);
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form>
        <div className="form-group">
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={childState.firstName}
                onChange={handleEdit}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={childState.lastName}
                onChange={handleEdit}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                placeholder="Age"
                name="age"
                value={childState.age}
                onChange={handleEdit}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                placeholder="Activities"
                name="activities"
                value={childState.activities}
                onChange={handleEdit}
            />
        </div>
        <Button className={classes.button} onClick={handleSubmit}>
            Save
        </Button>
        <Button className={classes.button} onClick={handleClose}>
            Close
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        {props.children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default childModal;