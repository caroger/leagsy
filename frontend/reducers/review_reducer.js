import * as APIUtil from "../util/review_api_util";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_R:
      return Object.assign({}, oldState, action.payload.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, oldState, { [review.id]: review });
    default:
      return oldState;
  }
};
