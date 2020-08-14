import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" style={{"fontSize":"x-large", "color":"Green"}} >
        Play-Datery
      </Link>
      <div className="collapse navbar-collapse" style={{"float":"right"}}>
        <ul className="navbar-nav mr-auto">
          <li className={location.pathname === "/" || location.pathname === "/login" ? "nav-item active" : "nav-item"}>
            <Link to="/login" className="nav-link">Log In</Link>
          </li>
          <li className={location.pathname === "/signup" ? "nav-item active" : "nav-item"}>
            <Link to="/signup" className="nav-link" >Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;