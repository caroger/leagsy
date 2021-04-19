import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      nextState.all = action.products;
      return nextState;
    case RECEIVE_PRODUCT:
      nextState.product = action.product;
      return nextState;
    case RECEIVE_REVIEW:
      const { review, avgRating } = action;
      nextState.all[review.productId].reviewIds.push(review.id);
      nextState.all[review.productId].avgRating = avgRating;
      return nextState;

    default:
      return oldState;
  }
};
