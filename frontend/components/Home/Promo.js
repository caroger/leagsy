import React, { Component } from "react";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import ProductCircle from "./ProductCircle";
class Promo extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div className="PromoWrapper">
        <h1>Because every Summoner deserves something as unique as he is</h1>
        <div className="PromoContentWrapper">
          <h2>Shop Promo Day</h2>
        </div>
        <div className="ProductCircleWrapper">
          <ProductCircle product={products[Object.keys(products)[0]]} />
          <ProductCircle product={products[Object.keys(products)[1]]} />
          <ProductCircle product={products[Object.keys(products)[6]]} />
          <ProductCircle product={products[Object.keys(products)[7]]} />
          <ProductCircle product={products[Object.keys(products)[4]]} />
          <ProductCircle product={products[Object.keys(products)[5]]} />
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    products: state.entities.products.all || {},
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mSTP, mDTP)(Promo);
