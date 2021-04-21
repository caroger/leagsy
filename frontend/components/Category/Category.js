import React from "react";
import { connect } from "react-redux";
import { filterObject } from "../../reducers/selector";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import ProductCard from "../Home/ProductCard";

const Category = ({ filteredProducts, category }) => {
  return (
    <div className="Category">
      <div className="navLink">
        <ul>
          <li>
            <Link>All categories</Link>
            <span>
              <AiOutlineRight size={12} />{" "}
            </span>
          </li>
          <li>
            <Link to={`/cat/${category}`}>{category}</Link>
          </li>
          <li>
            <span>({Object.keys(filteredProducts).length} results)</span>
          </li>
        </ul>
      </div>
      <div className="heading">
        <h1>{category}</h1>
        <h2>Sort By</h2>
      </div>
      <div className="ProductGrid">
        {Object.values(filteredProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* {JSON.stringify(filteredProducts)} */}
    </div>
  );
};

const mSTP = (state, ownProps) => {
  const products = state.entities.products.all || {};
  const category = ownProps.match.params.category || "";
  const filteredProducts = filterObject(products, "category", category);
  return {
    category,
    filteredProducts,
  };
};
export default connect(mSTP, null)(Category);
