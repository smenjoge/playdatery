import React, { useState } from "react";
import API from "../utils/API";
import ProfileCard from "../components/ProfileCard/profilecard";


function Profile() {

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  function handleEdit(event) {
    const { name, value } = event.target;
    console.log("handleEdit clicked");

    if (name === 'city') {
      setCity(value);
    }
    if (name === 'state') {
      setState(value);
    }
    if (name === 'zip') {
      setZip(value);
    }
  }

  function handleUpdateUser() {
    console.log("handleUpdateUser clicked");

    let profileUpdate = {
      city: city,
      state: state,
      zip: zip
    }

    API.updateUser(profileUpdate)
      .catch(err => console.log(err));
  };

  // handleDeleteUser = event => {
  //   event.preventDefault();

  //   const userID = event.target.getAttribute('data-id')

  //   const newState = { ...this.state }

  //   newState.results = this.state.results.filter(user => user._id !== userID)
  //   // Filters out any user with the matching target id

  //   API.deleteUser(userID).then(
  //     (response) => {
  //       this.setState(newState)
  //       console.log(response);
  //     }
  //   ).catch(
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  return (
    <ProfileCard
      updateUser={handleUpdateUser}
      handleEdit={handleEdit}
    // deleteUser={handleDeleteUser}
    />
  )
}


export default Profile;


