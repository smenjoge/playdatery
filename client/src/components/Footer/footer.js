import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';


export default function SimpleBottomNavigation() {

    return (
        <Grid container justify="center" className="Footer">
            <div>
                <a href="https://www.facebook.com/"
                    className="fa fa-facebook-f"
                    target="_blank"
                    rel="noopener noreferrer"> </a>
                <a href="https://twitter.com/?lang=en" 
                    className="fa fa-twitter" 
                    target="_blank"
                    rel="noopener noreferrer"> </a>
                <a href="https://www.instagram.com/?hl=en" 
                    className="fa fa-instagram" 
                    target="_blank"
                    rel="noopener noreferrer"> </a>
                <p>&#169; 2020 Copyright Laureni Wilkinson-S&aacute;nchez, Sandesh
            Menjoge</p>
            </div>
        </Grid>
    );
}