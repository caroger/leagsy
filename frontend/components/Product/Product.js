import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ReviewCard from "./ReviewCard";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      reviews: {},
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.productId !== this.props.match.params.productId
    ) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  //Render review card
  reviewGrid() {
    return this.props.product.reviewIds.map((reviewId, i) => (
      <ReviewCard
        key={reviewId}
        reviewId={reviewId}
        review={this.props.reviews[reviewId]}
      />
    ));
  }

  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    }

    if (!this.props.product) return null;

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
        <ul className="reviewGrid">{this.reviewGrid()}</ul>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.productId],
    reviews: state.entities.reviews,
    loading: state.ui.loading.detailLoading,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mSTP, mDTP)(Product);
