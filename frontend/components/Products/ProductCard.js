import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="product-card">
      <div className="product-cover">
        <img
          src={`http://localhost:3000${product.photoUrl}`}
          alt={props.product.name}
        />
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price}</div>
      <div className="product-score">{product.avgRating}</div>
      <div className="product-link">
        <Link to={`/products/${product.id}`}>View Product</Link>
      </div>
    </div>
  );
};

export default ProductCard;
