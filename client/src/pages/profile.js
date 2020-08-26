import React, { useState } from "react";
import API from "../utils/API";
import ProfileCard from "../components/ProfileCard/profilecard";
import UserContext from "../utils/userContext";

function Profile() {

  const { userState, setUserState } = React.useContext(UserContext);
  const { user } = userState;

  const [profileState, setProfileState] = useState({
    displayName: user.displayName,
    address: {
      city: (user && user.address && user.address.city) ? user.address.city : "",
      state: (user && user.address && user.address.state) ? user.address.state : "",
      zip: (user && user.address && user.address.zip) ? user.address.zip : "",
    }
  });

  const [childState, setChildState] = useState({
    firstName: (user && user.children && user.children[0].firstName) ? user.children[0].firstName : "",
    lastName: (user && user.children && user.children[0].lastName) ? user.children[0].lastName : "",
    age: (user && user.children && user.children[0].age) ? user.children[0].age : "",
    activities: (user && user.children && user.children[0].activities) ? user.children[0].activities : "",
  });


  function handleEdit(event) {
    const { name, value } = event.target;
    console.log("handleEdit clicked");

    const address = { ...profileState.address, [name]: value }
    const newObj = { ...profileState, address }

    setProfileState(newObj)
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
    console.log(profileUpdate);

    API.updateUser(profileUpdate, user.uid)
      .then((res) => {
        console.log(res);
        setUserState({ ...userState, user: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Child functions
  function handleAddChild(event) {
    const { name, value } = event.target;
    console.log("handleAddChild clicked");

    setChildState({ ...childState, [name]: value })
  }

  function addChild(event) {
    event.preventDefault();

    let childInfo = {
      firstName: childState.firstName,
      lastName: childState.lastName,
      age: childState.age,
      activities: childState.activities
    }
    console.log(childInfo);

    API.addChild(childInfo, user.uid)
      .then((res) => {
        console.log(res);
        setChildState({ ...childState, child: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }


  function deleteChild(childId) {
    API.removeChild(childId)
      .then(alert("child deleted"))
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <ProfileCard
      handleUpdateUser={handleUpdateUser}
      handleEdit={handleEdit}
      profileState={profileState}
      addChild={addChild}
      childState={childState}
      handleAddChild={handleAddChild}
      deleteChild={deleteChild}
    />
  )
}

export default Profile;



