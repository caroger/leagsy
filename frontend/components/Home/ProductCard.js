import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  if (!product) return null;
  const { imgUrls, price, avgRating, name, id } = { ...product };
  return (
    <Link className="ProductCard" to={`/products/${product.id}`}>
      <div className="img-container">
        <img src={imgUrls[0]} alt={name} className="ProductCardImg" />
      </div>
      <div className="ProductCardName">{name}</div>
      <div className="ProductCardRating">
        <StarRatingComponent
          name="rating"
          starCount={5}
          renderStarIcon={() => <AiFillStar />}
          editing={false}
          value={avgRating}
        />
      </div>
      <div className="ProductCardPrice">$ {price}</div>
    </Link>
  );
};

export default ProductCard;
