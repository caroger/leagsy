import React from "react";
import { Link } from "react-router-dom";

const ProductCircle = ({ product }) => {
  if (!product) return null;
  const { imgUrls, price, avgRating, name, id } = { ...product };
  return (
    <div className="ProductCircleContainer">
      <Link className="ProductCircle" to={`/products/${id}`}>
        <img className="ProductCircleImg" src={imgUrls[0]} alt={name} />
        <div>{price}</div>
        <div>{avgRating}</div>
      </Link>
    </div>
  );
};

export default ProductCircle;
