import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
  RECEIVE_REVIEW,
} from "../actions/product_actions";

const productReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, oldState, action.products);
    case RECEIVE_PRODUCT:
      const newProduct = { [action.product.id]: action.product };
      return Object.assign({}, oldState, newProduct);
    case RECEIVE_REVIEW:
      const { review, avgRating } = action;
      const newState = Object.assign({}, oldState);
      newState[review.product_id].reviewIds.push(review.id);
      newState[review.product_id].avgRating = avgRating;
      return newState;
    default:
      return oldState;
  }
};

export default productReducer;
