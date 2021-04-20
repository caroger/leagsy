import React from "react";
import { Link } from "react-router-dom";

const EditorCard = ({ product }) => {
  if (!product) return null;
  const { imgUrls, name, price, id } = { ...product };
  return (
    <Link className="EditorCard" to={`/products/${product.id}`} key={id}>
      <img src={imgUrls[1]} alt={name} className="EditorCardImg" />
      <div className="EditorCardPrice">$ {price}</div>
    </Link>
  );
};

export default EditorCard;
