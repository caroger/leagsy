import React from "react";
import ProductCircle from "./ProductCircle";

const Promo = ({ products }) => {
  return (
    <div className="PromoWrapper">
      <h1>Because every Summoner deserves something as unique as he is</h1>
      <div className="PromoContentWrapper">
        <h2>Shop Promo Day</h2>
      </div>
      <div className="ProductCircleWrapper">
        <ProductCircle product={products[Object.keys(products)[0]]} />
        <ProductCircle product={products[Object.keys(products)[7]]} />
        <ProductCircle product={products[Object.keys(products)[17]]} />
        <ProductCircle product={products[Object.keys(products)[20]]} />
        <ProductCircle product={products[Object.keys(products)[30]]} />
        <ProductCircle product={products[Object.keys(products)[40]]} />
      </div>
    </div>
  );
};

export default Promo;
