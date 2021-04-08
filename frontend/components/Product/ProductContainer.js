import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import {createReview,  deleteReview } from "../../actions/review_actions";
import Product from "./Product";

const mSTP = (state) => {
  return {
    product: state.entities.products.product,
    reviews: state.entities.reviews,
    reviewers: state.entities.users,
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};

export default connect(mSTP, mDTP)(Product);
