import React from "react";
import { connect } from "react-redux";
import { filterObject } from "../../reducers/selector";

const Category = (props) => {
  if (!props.filteredProducts) return null;
  return <div>{JSON.stringify(props.filteredProducts)}</div>;
};

const mSTP = (state, ownProps) => {
  const products = state.entities.products.all || {};
  const category = ownProps.match.params.category || "";
  const filteredProducts = filterObject(products, "category", category);
  return {
    filteredProducts,
  };
};
export default connect(mSTP, null)(Category);
