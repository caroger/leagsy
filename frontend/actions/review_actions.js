import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW";

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const destroyReview = (review) => ({
  type: DELETE_REVIEW,
  review,
});

// Thunk Actions

export const fetchReviews = () => (dispatch) => {
  return APIUtil.fetchReviews().then((reviews) =>
    dispatch(receiveReviews(reviews))
  );
};

export const fetchReview = (reviewId) => (dispatch) => {
  return APIUtil.fetchReview(reviewId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const createReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const deleteReview = (review) => (dispatch) => {
  return APIUtil.deleteReview(review).then(() =>
    dispatch(destroyReview(review))
  );
};

export const updateReview = (review) => (dispatch) => {
  return APIUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};
