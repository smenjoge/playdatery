import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../utils/userContext";

function Nav() {
  const location = useLocation();
  const {user, userSignOut} = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" style={{"fontSize":"x-large", "color":"Green"}} >
        Play-Datery
      </Link>
      <div className="collapse navbar-collapse" style={{"float":"right"}}>
        {!user ? 
          <ul className="navbar-nav mr-auto">
            <li className={location.pathname === "/" || location.pathname === "/login" ? "nav-item active" : "nav-item"}>
              <Link to="/login" className="nav-link">Log In</Link>
            </li>
            <li className={location.pathname === "/signup" ? "nav-item active" : "nav-item"}>
              <Link to="/signup" className="nav-link" >Sign Up</Link>
            </li>
          </ul>
        : 
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => userSignOut()}>Sign Out</button>
            </li>
          </ul>
        }
      </div>
    </nav>
  );
}

export default Nav;