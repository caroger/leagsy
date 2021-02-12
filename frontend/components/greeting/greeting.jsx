import React from "react";

const Greeting = ({ currentUser }) => {
  if (currentUser) {
    return <h2>Welcome Back! {currentUser.firstname}</h2>;
  }
  return null;
};

export default Greeting;
