import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProductCircle = ({ product }) => {
  if (!product) return null;
  const { imgUrls, price, avgRating, name, id } = { ...product };
  return (
    <div className="ProductCircleContainer">
      <Link className="ProductCircle" to={`/products/${id}`}>
        <img className="ProductCircleImg" src={imgUrls[0]} alt={name} />
        <div className="ProductCircleLink">
          <div className="ProductName">
            <div className="Name">
              {name}
            </div>

            <div className="Arrow">
              <FaArrowRight />
            </div>
          </div>
          {/* <div className="Arrow">
            <FaArrowRight />
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCircle;
