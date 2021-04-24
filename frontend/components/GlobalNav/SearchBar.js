import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

import Fuse from "fuse.js";
import { asArray } from "../../reducers/selector";

const SearchBar = () => {
  const products = useSelector((state) => state.entities.products.all || {});
  const [query, updateQuery] = useState("");
  const fuse = new Fuse(asArray(products), {
    keys: ["name", "category"],
    threshold: 0.3,
  });
  const onSearch = ({ currentTarget }) => {
    updateQuery(currentTarget.value);
  };
  const results = fuse.search(query);
  const searchResults = results.map((product) => product.item);

  return (
    <div className="SearchBar">
      <div className="row1">
        <input
          className="SearchInput"
          type="search"
          placeholder={"Search Anything"}
          value={query}
          onChange={onSearch}
        />
        <button className="SearchButton">
          <FaSearch />
        </button>
      </div>
      <div className="row2">
        <div className="placeholder"></div>
        {searchResults && <SearchResult products={searchResults} />}
        <div className="placeholder"></div>
      </div>
    </div>
  );
};

export default SearchBar;
