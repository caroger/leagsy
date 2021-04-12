import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ currentUser, logout, openModal }) => {
  const SigninButton = () => {
    return (
      <button className="SigninButton" onClick={() => openModal("login")}>
        Sign in
      </button>
    );
  };

  const LogoutButton = () => {
    return (
      <button className="SigninButton" onClick={logout}>
        Log Out
      </button>
    );
  };

  const SiteLogo = () => {
    return (
      <div className="logo">
        <Link to="/" className="logo-link">
          Rtsy
        </Link>
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className="SearchBar">
        <input
          className="SearchInput"
          type="text"
          placeholder="Search anything"
        />
        <button className="SearchButton">
          <FontAwesomeIcon icon={faSearch} color={"black"} />
        </button>
      </div>
    );
  };

  const ShoppingCart = () => {
    return (
      <Link to="/cart" className="ShoppingCart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    );
  };

  const UserNav = ({ currentUser }) => {
    return (
      <ul className="UserNav">
        <li>{currentUser ? <LogoutButton /> : <SigninButton />}</li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    );
  };

  return (
    <div className="NavBar">
      <div className="header-container">
        <SiteLogo />
        <SearchBar />
        <UserNav currentUser={currentUser} />
      </div>
    </div>
  );
};

export default NavBar;
