import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;
  const { imgUrls, price, avgRating, name, id } = { ...product };
  return (
      <Link className="ProductCard" to={`/products/${product.id}`}>
        <img src={imgUrls[1]} alt={name} className="ProductCardImg" />
        <div className="ProductCardName">{name}</div>
        <div className="ProductCardRating">{avgRating}</div>
        <div className="ProductCardPrice">{price}</div>
      </Link>
  );
};

export default ProductCard;
