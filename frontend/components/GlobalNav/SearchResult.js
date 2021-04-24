import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SearchResult = ({ products, handleRedirect }) => {
  let history = useHistory();

  return (
    <div className="SearchResult">
      {products.map((product) => (
        <div
          to={`/products/${product.id}`}
          onClick={(e) => {
            history.push(`/products/${product.id}`);
            handleRedirect;
          }}
          className="SearchResultItem"
          key={product.id}
        >{`${product.name}  | $ ${product.price}`}</div>
      ))}
      {/* {JSON.stringify(products)} */}
    </div>
  );
};

export default SearchResult;
