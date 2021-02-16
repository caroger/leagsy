import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {
  const signinButton = () => {
    return (
      <button className="sign-in-btn" onClick={() => openModal("login")}>
        Sign in
      </button>
    );
  };

  const userButton = () => {
    return (
      <button className="sign-in-btn" onClick={logout}>
        Log Out
      </button>
    );
  };

  const SiteLogo = () => {
    return (
      <Link to="/" className="site-logo">
        Rtsy
      </Link>
    );
  };

  return (
    <nav className="nav-bar">
      <SiteLogo />
      <input
        className="search-container"
        type="text"
        placeholder="Search anything"
      />
      {currentUser ? userButton(currentUser, logout) : signinButton()}
    </nav>
  );
};

export default NavBar;
