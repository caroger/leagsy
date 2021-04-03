import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  RECEIVE_REVIEW,
} from "../actions/product_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, oldState, action.products);
    case RECEIVE_PRODUCT:
      newState[action.payload.product.id] = action.payload.product;
      return newState;

    case RECEIVE_REVIEW:
      const { review, avgRating } = action;
      newState[review.product_id].reviewIds.push(review.id);
      newState[review.product_id].avgRating = avgRating;
      return newState;
    default:
      return oldState;
  }
};
