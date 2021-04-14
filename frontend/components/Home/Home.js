import React from "react";
import { Link, Redirect } from "react-router-dom";
import Promo from "./Promo";

const Home = () => {
  return (
    <div className="Home">
      <Promo />
      <Link to={"/products"}> View all Products</Link>
    </div>
  );
};

export default Home;
