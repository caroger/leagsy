import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.match.params.productId !== this.props.match.params.productId
  //   ) {
  //     this.props.fetchProduct(this.props.match.params.productId);
  //   }
  // }

  render() {
    if (this.props.product === undefined) {
      return <h1> Loading </h1>;
    } else {
      const { reviews, product } = this.props;
      const urls = product.imgUrls || [];
      return (
        <div className="product-show">
          <h1>This is Products#show view of our app</h1>

          <div className="product-title">
            <h1>{product.name}</h1>
          </div>
          <div className="product-image">
            <img src={`http://localhost:3000${urls[0]}`} alt="" />
          </div>
          <h1>Review Count: {Object.keys(this.props.reviews).length}</h1>
        </div>
      );
    }
  }
}

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.productId],
    reviews: state.entities.reviews,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mSTP, mDTP)(Product);
