import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => {
    return (
      <nav>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  };

  const personalGreeting = () => {
    return (
      <hgroup>
        <h2> Hi, {currentUser.firstname}!</h2>
        <button onClick={logout}>Log Out</button>
      </hgroup>
    );
  };
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
