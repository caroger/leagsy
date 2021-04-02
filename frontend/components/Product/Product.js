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

  render() {
    if (!this.props.product) {
      return null;
    } else {
      const { reviews } = this.props;
      return (
        <div>
          <h1>This is Products#show view of our app</h1>
          <div>Review Count: {Object.keys(this.props.reviews).length}</div>
          {console.log(reviews)}
        </div>
      );
    }
  }
}

const mSTP = (state, ownProps) => {
  const productId = parseInt(ownProps.match.params.productId);
  return {
    product: state.entities.products[productId],
    reviews: state.entities.reviews,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mSTP, mDTP)(Product);
