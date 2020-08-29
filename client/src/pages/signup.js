import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { auth } from "../firebase";
import API from "../utils/API";
import Box from '@material-ui/core/Box';
import './style/signup.css';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'password2') {
      setPassword2(value);
    }
    if (name === 'displayName') {
      setDisplayName(value);
    }
  }

  function handleBtnSubmit(event) {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => saveNewUser(userAuth))
      .catch(error => {
        console.error("Error signing up with email and password", error);
      }
      )
  }

  function saveNewUser(userAuth) {
    let newUser = {
      uid: userAuth.user.uid,
      emailID: email,
      displayName: displayName
    }
    API.createNewUser(newUser)
    .catch(error => {console.log(`Error Saving user to the DB: `, error)});
  }

  return (
    <Box display="flex" justifyContent="center">
      <section className="container">
        <h2>Sign Up</h2>
        
        <SignUpForm
          emailID={email}
          password={password}
          password2={password2}
          displayName={displayName}
          handleInputChange={handleInputChange}
          handleBtnSubmit={handleBtnSubmit}
        />
      </section>
    </Box>
  );
}

export default SignUp;