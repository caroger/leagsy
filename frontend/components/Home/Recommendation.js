import React from "react";
import ProductCard from "./ProductCard";

const Recommendation = ({ products }) => {
  return (
    <div className="Recommendation">
      <div className="flexWrapper">
        <div className="itemsWrapper">
          <div className="headingWrapper">
            <h2>Popular Gifts Right Now</h2>
          </div>
          <div className="ProductCardsContainer">
            <ProductCard product={products[Object.keys(products)[0]]} />
            <ProductCard product={products[Object.keys(products)[1]]} />
            <ProductCard product={products[Object.keys(products)[2]]} />
            <ProductCard product={products[Object.keys(products)[3]]} />
            <ProductCard product={products[Object.keys(products)[4]]} />
            <ProductCard product={products[Object.keys(products)[5]]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
