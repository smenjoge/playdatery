import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth } from "./firebase";
import Navbar from "./components/Nav/nav";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import UserContext from "./utils/userContext";
import API from "./utils/API";

function App() {
  const [userState, setUserState] = useState({
    user: null,
    userSignOut: () => auth.signOut()
  });

  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      if (userAuth) {
        API.getSavedUser(userAuth.uid)
        .then(res => {
          setUserState({ ...userState, user: res.data });
        })

      } else {
        setUserState({ ...userState, user: null });
      }
    });
  }, [])

  return (
    <UserContext.Provider value={userState}>
      <Router>
        <div className="container-fluid">
          <Navbar />
          {userState.user ?
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />   
            </div> 
          :
            <div>
              <Route exact path={["/", "/login"]} component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          }
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App;