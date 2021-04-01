import React from "react";

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="product-cover"></div>
      <div className="product-name">{ props.}</div>
      <div className="product-price"></div>
      <div className="product-score"></div>
      <div className="product-link"></div>
    </div>
  );
};
