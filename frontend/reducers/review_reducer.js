import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW_ERRORS,
} from "../actions/review_actions";
import { RECEIVE_PRODUCT } from "../actions/product_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      const { reviews } = action;
      return Object.assign({}, oldState, reviews);
    case RECEIVE_REVIEWS:
      return Object.assign({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
      const { review, reviewer } = action;
      return Object.assign({}, oldState, {
        [review.id]: Object.assign(review, {
          reviewer: reviewer.firstName,
        }),
      });
    default:
      return oldState;
  }
};
