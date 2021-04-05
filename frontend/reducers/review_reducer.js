import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  DELETE_REVIEW,
} from "../actions/review_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
      const newReview = { [action.review.id]: action.review };
      return Object.assign({}, oldState, newReview);
    case DELETE_REVIEW:
      let newState = Object.assign({}, oldState);
      delete newState[action.review.id];
      return newState;
    default:
      return oldState;
  }
};
