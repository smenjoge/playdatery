import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./resultcard.css";
import DateModal from '../Modal/dateModal';



export function ResultCard({ children }) {
    return <div className="homeResults">{children}</div>;
}

export function ChildListItem(props) {
    const {
        _id,
        parent,
        firstName,
        lastName,
        age,
        activities,
        image } = props.child;

    const { schedulePlaydate } = props;

    return (

        <Card className="resultCard">
            <CardMedia
                className="media"
                image={image || "https://via.placeholder.com/150"}
                title={firstName}
            />
            <CardActionArea >
                <Typography gutterBottom variant="h5" component="h2">
                    {firstName} {lastName} </Typography>

                <Typography id="font">Age: {age}</Typography>
                <Typography id="font">Activities: {activities}</Typography>

                <DateModal
                    childId={_id}
                    parent={parent}
                    schedulePlaydate={schedulePlaydate}
                />

            </CardActionArea>
        </Card>

    );
}