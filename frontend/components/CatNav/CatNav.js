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
            <Link to={"/cat/plush"}>Plush</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/statues"}>Statues</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/posters"}>Posters</Link>
          </li>
          <li className="CatItem">
            <Link to={"/cat/hats"}>Hats</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatNav;
