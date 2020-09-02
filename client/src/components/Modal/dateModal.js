import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import UserContext from "../../utils/userContext";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import moment from 'moment';

//Add in modal choice of your child for playdate 1 or 2.
//child ID and date, time


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
    width: 470,
    // height: 100,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 220,
  },
  button: {
    background: 'rgba(34,133,195,1)',
    fontWeight: 'bolder',
    marginRight: theme.spacing(1),
    color: 'white',
    '&:hover': {
      background: "#2fd65d",
    }
  }
}));

export default function SimpleModal() {
  const { userState, setUserState } = useContext(UserContext);
  const { user } = userState;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  const [schedule, setSchedule] = React.useState(new Date("2020-09-01T10:30:00"));
  //  const [schedule, setSchedule] = React.useState(Date.now());
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // function handleSchedule(event, Date) {
  //   const { name, value } = event.target;
  //   setSchedule({ ...schedule, [name]: value })
  //   console.log(value);
  // }
  
  // function schedulePlaydate(playdate) {

  //   API.setPlaydate(playdate, user.uid)
  //   .then((res) => {
  //     console.log(res);
  //     setUserState({ ...userState, user: res.data })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  const date = moment().format('YYYY-MM-DD')+"T"+moment().format('hh:mm');
  console.log(date);

  const body = (
    <div style={modalStyle} className={classes.paper}>
       <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Schedule playdate"
          type="datetime-local"
          className={classes.textField}
          defaultValue={date}
          format=""
          name=""
          // value={schedule}
          // onChange={handleSchedule}
          renderInput={(props) => <TextField {...props} />}  
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
         <TextField
          label="Child"
          variant="outlined"
          size="small"
          type="text"
          name="Child"
          // value={}
          // onChange={} 
          />
       

        <Button className={classes.button} onClick={handleClose}>
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
      Schedule Playdate
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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import moment from 'moment';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));



//  export default function SimpleModal() {
//   const classes = useStyles();
//   // const [schedule, setSchedule] = React.useState({moment().format('MM-DD-YYYY-HH:MM')});
//   const date = moment().format('YYYY-MM-DD')+"T"+moment().format('hh:mm');
//   console.log(date);
//   return (
//     <form className={classes.container} noValidate>
//      <TextField
//     id="datetime-local"
//     label="Next appointment"
//     type="datetime-local"
//     defaultValue={date}
//     //format="MM/dd/yyyy HH:mm"
//     // value={moment().format('MM-DD-YYYY-HH:MM')}
//     // defaultValue={Date.now}
//     className={classes.textField}
//     InputLabelProps={{
//       shrink: true,
//     }}
//   />
//     </form>
//   );
// }