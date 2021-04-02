import React, { Component } from "react";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  productGrid() {
    return Object.entries(this.props.products).map(([key, product], i) => (
      <ProductCard key={key} product={product} />
    ));
  }

  render() {
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
    products: state.entities.products,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mSTP, mDTP)(Products);
