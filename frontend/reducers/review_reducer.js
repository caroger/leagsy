import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  DELETE_REVIEW,
} from "../actions/review_actions";
import { RECEIVE_PRODUCT } from "../actions/product_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      const { reviews } = action;
      return Object.assign({}, oldState, reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, oldState, { [review.id]: review });
    case DELETE_REVIEW:
      let newState = Object.assign({}, oldState);
      delete newState[action.review.id];
      return newState;
    default:
      return oldState;
  }
};
