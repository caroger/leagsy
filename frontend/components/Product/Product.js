import React, { Component } from "react";
import ReviewForm from "../Review/ReviewForm";
import ReviewShow from "../Review/ReviewShow";
import AddToCartForm from "./AddToCartForm";
import StarRatingComponent from "react-star-rating-component";
import { AiFillStar } from "react-icons/ai";
import ImageSlider from "./ImageSlider";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import {
  selectProduct,
  selectReviewsForProduct,
} from "../../reducers/selector";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { product, productReviews, sessionId } = this.props;
    if (!product || !productReviews) return null;
    const urls = product.imgUrls || [];
    const ownReview = productReviews.filter(
      (review) => review && review.reviewerId === sessionId
    );
    const othersReviews = productReviews.filter(
      (review) => review && review.reviewerId !== sessionId
    );
    return (
      <div className="ProductShowContainer">
        <div className="leftCol">
          <ImageSlider images={urls} />
          <div className="totalReview">
            <div className="reviewCount">
              {product.reviewIds.length} Reviews
            </div>
            <div className="reviewValue">
              <StarRatingComponent
                name="rating"
                starCount={5}
                renderStarIcon={() => <AiFillStar />}
                value={product.avgRating}
                editing={false}
              />
            </div>
          </div>
          {ownReview && ownReview.length === 1 ? (
            <ReviewShow review={ownReview[0]} key={ownReview[0].id} />
          ) : (
            <ReviewForm productId={product.id} />
          )}
          {othersReviews.map((review, key) => (
            <ReviewShow review={review} key={key} />
          ))}
        </div>
        <div className="rightCol">
          <AddToCartForm product={product} />
        </div>
      </div>
    );
  }
}

const mSTP = (state, { match }) => {
  if (!state.entities.products.all) {
    return {
      product: {},
    };
  }
  const productId = parseInt(match.params.productId);
  const product = selectProduct(state.entities.products.all, productId);
  const productReviews = selectReviewsForProduct(state.entities, product);
  return {
    product,
    productReviews,
    sessionId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  };
};
export default connect(mSTP, mDTP)(Product);
