import React, { useState , useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  const [userState, setUserState] = useState({
    user: null
  });

  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      setUserState({ ...userState, user: userAuth });
    });
  }, [])

  return (
    <Router>
      <div className="container-fluid">
        <Navbar /> 
        {userState.user ?
          <Home />
        :
          <div>
              <Route exact path={["/","/login"]} component={Login} />
              <Route exact path="/signup" component={SignUp} />
          </div>
        }
      </div>
    </Router>
  )
}

export default App;