import React, { Component } from "react";
import ReviewForm from "../Review/ReviewForm";
import ReviewShow from "../Review/ReviewShow";
import AddToCartForm from "./AddToCartForm";
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
    const { product, productReviews, reviewer } = this.props;
    if (!product || !productReviews) return null;
    const urls = product.imgUrls || [];
    return (
      <div className="ProductShowContainer">
        <div className="leftCol">
          <ImageSlider images={urls} />
          <ReviewForm productId={product.id} reviewer={reviewer} />
          {Object.values(productReviews).map((review, key) => (
            <ReviewShow review={review} key={key} />
          ))}
        </div>
        <div className="rightCol">
          <AddToCartForm product={product} />
        </div>
        <button onClick={() => console.log(this.props)}>Show State</button>
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
    reviewer: state.entities.users[state.session.id].firstname,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  };
};
export default connect(mSTP, mDTP)(Product);
