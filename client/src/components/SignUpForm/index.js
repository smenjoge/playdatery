import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontWeight: 'bolder',
        color: 'white',
        marginTop: 20,
    }
}));

function SignUpForm(props) {
    const { displayName, email, password, password2, handleInputChange, handleBtnSubmit } = props;
    const classes = useStyles();
    
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-size"
                    label="Name"
                    variant="outlined"
                    size="small"
                    name="displayName"
                    value={displayName}
                    onChange={handleInputChange} />
                <TextField
                    id="outlined-size"
                    label="Email"
                    variant="outlined"
                    size="small"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
            </div>
            <div>
                <TextField
                    id="outlined-size"
                    label="Password"
                    variant="outlined"
                    size="small"
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
                <TextField
                    id="outlined-size"
                    label="Confirm password"
                    variant="outlined"
                    size="small"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange} />
            </div>

            <Button
                type="submit"
                className={classes.button}
                onClick={handleBtnSubmit}
            >
                Sign Up
                    </Button>
        </form>

    )
}

export default SignUpForm;