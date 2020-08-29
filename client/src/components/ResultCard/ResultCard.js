import React from 'react';
import Button from '@material-ui/core/Button';

function ResultCard({ id, firstName, lastName, age, activities }) {
    if (!child) {
        return (
            <div>
                <h2>No Search Results</h2>
            </div>
        )
    } else {
        return (
            <div>
                <p>{firstName} {lastName}</p>
                <p>{age}</p>
                <p>{activities}</p>
                <Button>Set a Playdate</Button>
            </div>
        )
    }
}

export default ResultCard;