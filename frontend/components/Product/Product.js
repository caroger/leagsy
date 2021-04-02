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
    // console.log(typeOf(this.props.match.params.productId));
  }

  render() {
    return (
      <div>
        <h1>This is Products#show view of our app</h1>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  // const productId = ownProps.match.params.productId;
  return {
    // product: state.products[productId],
    product: [],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mSTP, mDTP)(Product);
