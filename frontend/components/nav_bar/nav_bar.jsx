import React from "react";

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
      <img className="logo" src={window.siteLogo} alt="Logo" />
      <input className="search" type="text" placeholder="Search anything" />
      {currentUser ? userButton(currentUser, logout) : signinButton()}
    </nav>
  );
};

export default NavBar;
