import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Lucas from './Lucas.jpg';
import './style.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        fontWeight: 'bolder',
        color: 'white',
    }
});

export function ResultCard({ children }) {
    return <div>{children}</div>;
}

export function ChildListItem({
    firstName,
    lastName,
    age,
    activities
}) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={Lucas}
                    title={firstName}
                />
                <CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstName} {lastName} </Typography>
                        
                    <Typography>Age: {age}</Typography>
                    <Typography>Activities: {activities}</Typography>
                </CardActionArea>
            </Card>
        </div>
    );
}