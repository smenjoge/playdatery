import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Lucas from './Lucas.jpg';
import './resultcard.css';
import DateModal from '../Modal/dateModal';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    button: {
        background: '#2285c3',
        fontWeight: 'bolder',
        color: 'white',
    }
});



export function ResultCard({ children }) {
    return <div className="homeResults">{children}</div>;
}

export function ChildListItem(props) {
    const { firstName, lastName, age, activities, image } = props.child;
    const classes = useStyles();

    return (
       
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image || "https://via.placeholder.com/150"}
                    title={firstName}
                />
                <CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstName} {lastName} </Typography>

                    <Typography>Age: {age}</Typography>
                    <Typography>Activities: {activities}</Typography>
                    {/* <Button className={classes.button}>
                        Schedule Playdate
                    </Button> */}
                    <DateModal />
                   
                   
                </CardActionArea>
            </Card>
        
    );
}