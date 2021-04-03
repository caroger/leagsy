import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";

const ProductCard = (props) => {
  const { name, imgUrl, price, avgRating, id } = { ...props.product };

  return (
    <div className="product-card">
      <div>Product id: {id}</div>
      <div className="product-cover">
        <img src={`http://localhost:3000${imgUrl}`} alt={props.product.name} />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">Price: {price}</div>
      <div className="product-score">Rating: {avgRating}</div>
      <div className="product-link">
        <Link to={`/products/${id}`}>View Product</Link>
      </div>
    </div>
  );
};

export default ProductCard;
