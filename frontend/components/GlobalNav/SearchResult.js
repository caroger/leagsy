import React from "react";

const SearchResult = ({ products }) => {
  return (
    <div className="SearchResult">
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
      {/* {JSON.stringify(products)} */}
    </div>
  );
};

export default SearchResult;
