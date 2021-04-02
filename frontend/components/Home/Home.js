import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the Home page</h1>
      <Link to={"/products"}> View all Products</Link>
    </div>
  );
};

export default Home;
