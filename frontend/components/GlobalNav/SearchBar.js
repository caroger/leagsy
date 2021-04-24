import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";
import Fuse from "fuse.js";
import { asArray } from "../../reducers/selector";

//helper event handler to detect clicking outside
let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const SearchBar = () => {
  const products = useSelector((state) => state.entities.products.all || {});
  const [query, updateQuery] = useState("");
  const fuse = new Fuse(asArray(products), {
    keys: ["name", "category"],
    threshold: 0.5,
  });
  const onSearch = ({ currentTarget }) => {
    updateQuery(currentTarget.value);
  };
  const results = fuse.search(query);
  const clearSearch = () => {
    updateQuery("");
  };
  const searchResults = results.map((product) => product.item);
  let domNode = useClickOutside(() => {
    updateQuery("");
  });

  return (
    <div ref={domNode} className="SearchBar">
      <div className="row1">
        <input
          className="SearchInput"
          type="search"
          placeholder={
            "Search by product name and category. Click on result to go to product detail view"
          }
          value={query}
          onChange={onSearch}
        />
        <button className="SearchButton">
          <FaSearch />
        </button>
      </div>
      <div className="row2">
        <div className="placeholder"></div>
        {searchResults && (
          <SearchResult products={searchResults} clearSearch={clearSearch} />
        )}
        <div className="placeholder"></div>
      </div>
    </div>
  );
};

export default SearchBar;
