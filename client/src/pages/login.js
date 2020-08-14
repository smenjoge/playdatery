import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleInputChange (event) {
    const {name, value} = event.target;
    if(name === 'email') {
      setEmail(value);
    }
    else if(name === 'password'){
      setPassword(value);
    }
  }

  function handleBtnSubmit (event) {
    event.preventDefault();
    auth.signInWithEmailAndPassword( email, password)
      .catch(error => {
        console.error("Error signing in with password and email", error);
      }
    )
  }

  return (
    <LoginForm
      email={email}
      password={password}
      handleInputChange={handleInputChange}
      handleBtnSubmit={handleBtnSubmit}
    />
  );
}

export default Login;