import React from "react";
import { Link } from "react-router-dom";

const CatNav = () => {
  return (
    <div className="CatNavContainer">
      <div className="CatNav">
        <ul className="CatList">
          <li className="CatItem">
            <Link to={"/cat/figures"}>Figures</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/plush"}>Plushes</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/statues"}>Statues</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/hat"}>Hats</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/mousepad"}>MousePads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatNav;
