import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import UserContext from "./utils/userContext";
import API from "./utils/API";
import Footer from "./components/Footer/footer";

function App() {
  const [userState, setUserState] = useState({
    user: null,
    userSignOut: () => auth.signOut()
  });

  const contextValue = {userState, setUserState};

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
       if (userAuth) {
         API.getSavedUser(userAuth.uid)
        .then(res => {
          console.log(`User coming from DB:`, res.data[0]);
          setUserState({ ...userState, user: res.data[0] });
         })
         .catch(error => {
           console.log(`Error getting user from DB:`, error);
         })
       } else {
         setUserState({ ...userState, user: null });
      }
    });
  }, [])

  return (
    <UserContext.Provider value={contextValue}>
      <Router>
        <Navbar />
        {!userState.user ?
          <div className="container-fluid">
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
          :
          <div className="container-fluid">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route component={Home}/>
            </Switch>
          </div>
        }
        <Footer />
      </Router>
    </UserContext.Provider>
  )
}

export default App;