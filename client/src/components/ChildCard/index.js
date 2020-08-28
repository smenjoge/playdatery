import React from "react";


function ChildCard(props) {
    const { _id, firstName, lastName, age, activities} = props.child;
    const { deleteChild } = props;

    return (
        <div className="card mb-3 border-0">
            <div className="row">
                <div className="col-md-2 my-auto">
                    <img src="https://via.placeholder.com/150" className="card-img" alt="placeholder"></img>
                </div>
                <div className="col-md-10">
                <div className="card-body">
                    <p className="card-text">Name: {firstName} {lastName} </p>
                    <p className="card-text">Age: {age} </p>
                    <p className="card-text">Hobbies: {activities} </p>
                </div>
                <button onClick={() => deleteChild(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default ChildCard;
