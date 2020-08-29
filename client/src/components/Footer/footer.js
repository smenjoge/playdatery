import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Grid from '@material-ui/core/Grid';
import './style.css';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Grid container justify="center" className="Footer">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <div class="container">
                    <a href="#" class="fa fa-facebook-f"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <p>&#169; 2020 Copyright Laureni Wilkinson-S&aacute;nchez, Sandesh
            Menjoge</p>
                </div>
            </BottomNavigation>
        </Grid>
    );
}