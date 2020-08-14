import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { auth } from "../firebase";
import API from "../utils/API"

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [displayName, setDisplayName] = useState("");

  function handleInputChange (event) {
    const {name, value} = event.target;
    if(name === 'email') {
        setEmail(value);
    }
    if(name === 'password') {
        setPassword(value);
    }
    if(name === 'password2') {
        setPassword2(value);
    }
    if(name === 'displayName') {
        setDisplayName(value);
    }
  }

  function handleBtnSubmit (event) {
    event.preventDefault();
    auth.createUserWithEmailAndPassword( email, password)
      .then(() => saveNewUser())
      .catch(error => {
        console.error("Error signing up with email and password", error);
      }
    )
  }

  function saveNewUser() {
      let newUser = {
        emailID: email,
        password: password,
        displayName: displayName
      }
      API.createNewUser(newUser);
  }

  return (
    <SignUpForm
        email={email}
        password={password}
        password2={password2}
        displayName={displayName}
        handleInputChange={handleInputChange}
        handleBtnSubmit={handleBtnSubmit}
    />
  );
}

export default SignUp;