import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { fetchReviews } from "../../actions/review_actions";
import ReviewList from "../Review/ReviewList";
import { Link } from "react-router-dom";

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
    this.props.fetchReviews();
  }

  render() {
    if (Object.keys(this.props.product).length === 0) return null;
    if (Object.keys(this.props.reviews).length === 0) return null;

    const { product, reviews } = this.props;
    const urls = product.imgUrls || [];
    return (
      <div className="product-show">
        <Link to={"/products"}>Back to Product Index</Link>
        <h1>This is Products#show view of our app</h1>

        <div className="product-title">
          <h1>{product.name}</h1>
        </div>
        <div className="product-image">
          <img src={`http://localhost:3000${urls[0]}`} alt="" />
        </div>
        <ReviewList reviewIds={product.reviewIds} reviews={reviews} />
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    product: state.entities.products.product || {},
    reviews: state.entities.reviews || {},
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchReviews: () => dispatch(fetchReviews()),
  };
};

export default connect(mSTP, mDTP)(Product);
