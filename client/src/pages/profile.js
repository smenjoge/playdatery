import React, { useContext } from "react";
import API from "../utils/API";
import ProfileCard from "../components/ProfileCard/profilecard";
import ChildList from "../components/ChildList"
import UserContext from "../utils/userContext";

function Profile() {
  const { userState, setUserState } = useContext(UserContext);
  const { user } = userState;
  console.log(`User Context`, user);

  function updateUser(userInfo) {
    console.log(`Updating User Info: `, userInfo );

    API.updateUser(userInfo, user.uid)
    .then((res) => {
      console.log(`User Info Updated: `, res);
      setUserState({ ...userState, user: res.data })
    })
    .catch(error => {
      console.log(error)
    })
  }

  //Child functions
  function addChild(childInfo) {
    console.log(`Adding child:`, childInfo);
    let childInfoAdd = {
      firstName: childInfo.firstName,
      lastName: childInfo.lastName,
      age: childInfo.age,
      activities: childInfo.activities
    }

    API.addChild(childInfoAdd, user.uid)
    .then((res) => {
      console.log(`Child Added successfully: `, res.data);
      setUserState({ ...userState, user: res.data })
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  function updateChild(childInfo) {
    console.log(`Updating child:`, childInfo);
    API.updateChild(childInfo, user.uid)
    .then((res) => {
      console.log(`Child Updated successfully: `, res.data);
      setUserState({ ...userState, user: res.data })
    })
    .catch(error => {
      console.log(error)
    })
  }

  function deleteChild(childId) {
    console.log(`Removing child:`, childId);
    API.removeChild(childId, user.uid)
    .then((res) => {
      console.log(`Child Deleted successfully: `, res.data);
      setUserState({ ...userState, user: res.data })
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  return (
    <div>
      <ProfileCard
        updateUser={updateUser}
        addChild={addChild}
      />
      {user.children ? 
        <ChildList 
          updateChild={updateChild}
          deleteChild={deleteChild}
        />
      :
        <div></div>
      }
    </div>
  )
}

export default Profile;