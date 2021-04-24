import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SearchResult = ({ products, clearSearch }) => {
  let history = useHistory();

  return (
    <div className="SearchResult">
      {products.map((product) => (
        <div
          to={`/products/${product.id}`}
          onClick={(e) => {
            e.preventDefault();
            history.push(`/products/${product.id}`);
            clearSearch();
          }}
          className="SearchResultItem"
          key={product.id}
        >{`${product.name}  | $ ${product.price}`}</div>
      ))}
    </div>
  );
};

export default SearchResult;
