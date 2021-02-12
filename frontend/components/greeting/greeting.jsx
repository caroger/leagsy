import React from "react";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => {
    return (
      <nav>
        <button onClick={() => openModal("login")}>Sign in</button>
        {/* &nbsp;or&nbsp; */}
        {/* <button onClick={() => openModal("signup")}>Signup</button> */}
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
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
