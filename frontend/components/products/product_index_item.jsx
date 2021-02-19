import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = (props) => {
  // debugger
  return (
    <li className="product-list-index">
      <Link to={`/products/${props.product.id}`}>
        <img className="product-image" src={props.product.photoUrl} />
      </Link>
      {/* <p>{props.product.id}</p> */}
      {/* <Link to={`/products/${props.product.id}`} style={{textDecoration: 'none'}}>
                <h3 className="product-name">{props.product.product_name}</h3>
            </Link> */}
      <p className="product-price">${props.product.price}</p>
    </li>
  );
};

export default ProductIndexItem;
