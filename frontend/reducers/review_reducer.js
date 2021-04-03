import { RECEIVE_PRODUCT, RECEIVE_REVIEW } from "../actions/product_actions";

const reviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, oldState, action.payload.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, oldState, { [review.id]: review });
    default:
      return oldState;
  }
};

export default reviewReducer;
