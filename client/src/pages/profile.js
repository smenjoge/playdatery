import React, { useState } from "react";
import API from "../utils/API";
import ProfileCard from "../components/ProfileCard/profilecard";
import UserContext from "../utils/userContext";
import ChildCard from "../components/ChildCard/index";

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
    id: (user && user.children.length > 0 && user.children[0]._id) ? user.children[0]._id : "",
    firstName: (user && user.children.length > 0 && user.children[0].firstName) ? user.children[0].firstName : "",
    lastName: (user && user.children.length > 0 && user.children[0].lastName) ? user.children[0].lastName : "",
    age: (user && user.children.length > 0 && user.children[0].age) ? user.children[0].age : "",
    activities: (user && user.children.length > 0 && user.children[0].activities) ? user.children[0].activities : "",
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

  // Child functions
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
    console.log("Id " + childId)

    const body = {
      childId,
      uid:user.uid
    }
    API.removeChild(body)
      .then(("child deleted"))

      .catch(error => {
        console.log(error)
      })
  }

  //MODAL
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <ProfileCard
      handleUpdateUser={handleUpdateUser}
      handleEdit={handleEdit}
      profileState={profileState}

      //Child
      addChild={addChild}
      childState={childState}
      handleAddChild={handleAddChild}
      deleteChild={deleteChild}

      //Modal
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
    ></ProfileCard>

    <div className={user.children.length > 0 ? "container border border-dark my-4" : "container border border-dark mt-4 invisible"}>
      <ul className="list-group mt-2">
        {user.children.map(child => 
            <li className="list-group-item border border-dark my-1" key={child._id}>
              <div className="container">
                <ChildCard 
                  child={child}
                  deleteChild={deleteChild}
                />
              </div>
            </li>
          )
        }
      </ul>
    </div>
    </div>
  )
}

export default Profile;



