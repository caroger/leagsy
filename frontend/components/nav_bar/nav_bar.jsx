import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {
  const signinButton = () => {
    return (
      <button className="sign-in-button" onClick={() => openModal("login")}>
        Sign in
      </button>
    );
  };

  const userButton = () => {
    return (
      <button className="sign-in-button" onClick={logout}>
        Log Out
      </button>
    );
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="logo" src={window.siteLogo} alt="Logo" />
      </Link>
      <input className="search" type="text" placeholder="Search anything" />
      {currentUser ? userButton(currentUser, logout) : signinButton()}
    </nav>
  );
};

export default NavBar;
