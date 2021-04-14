import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductCircle = ({ product }) => {
  if (!product) return null;
  const { imgUrls, price, avgRating, name, id } = { ...product };
  return (
    <div className="ProductCircleContainer">
      <Link className="ProductCircle" to={`/products/${id}`}>
        <img className="ProductCircleImg" src={imgUrls[0]} alt={name} />
        <div className="ProductCircleLink">
          <div className="ProductName">{name}</div>
          <div className="Arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCircle;
