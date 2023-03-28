import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          {/* <Link to="/">Home</Link>
          <Link to="/todo">Todo App</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link> */}

          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/todo">Todo App</NavLink>
          <NavLink to="/listuser">List user</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </>
    );
  }
}

export default Nav;
