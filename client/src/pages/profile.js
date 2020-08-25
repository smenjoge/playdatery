import React, { useState } from "react";
import API from "../utils/API";
import ProfileCard from "../components/ProfileCard/profilecard";
import UserContext from "../utils/userContext";

function Profile() {
  const { userState, setUserState } = React.useContext(UserContext);
  const { user } = userState;

  const [profileState, setProfileState] = useState({
    displayName: "",
    address: {
      city: "",
      state: "",
      zip: ""
    }
  });

  function handleEdit(event) {
    const { name, value } = event.target;
    console.log("handleEdit clicked");
    
    setProfileState({ ...profileState, [name]: value })
  }


  function handleUpdateUser(event) {
    event.preventDefault();
    console.log("handleUpdate");

    let profileUpdate = {
      displayName: profileState.displayName,
      address: {
        city: profileState.address.city,
        state: profileState.address.state,
        zip: profileState.address.zip
      }
    }

    API.updateUser(profileUpdate, user.uid)
      .then((res) => {
        console.log(res);
        setUserState({ ...profileState, user: res.data })
      })
      // .then(window.location.reload(false))
      .catch(error => {
        console.log(error)
      })
  }


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
      user={user}
      handleUpdateUser={handleUpdateUser}
      handleEdit={handleEdit}
      profileState={profileState}
    // deleteUser={handleDeleteUser}
    />
  )
}


export default Profile;

