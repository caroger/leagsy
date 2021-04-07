import React, { Component } from "react";
import { fetchProducts } from "../../actions/product_actions";
import { fetchReviews } from "../../actions/review_actions";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  productGrid() {
    return Object.entries(this.props.products).map(([key, product], i) => (
      <ProductCard key={key} product={product} />
    ));
  }

  render() {
    if (!this.props.products) {
      return <h1>Rendering</h1>;
    }
    return (
      <div className="all products">
        <h1>All products</h1>
        <ul className="productGrid">{this.productGrid()}</ul>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    products: state.entities.products.all ? state.entities.products.all : {},
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mSTP, mDTP)(Products);
