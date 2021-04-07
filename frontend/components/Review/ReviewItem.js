import React from "react";
import { connect } from "react-redux";

const ReviewItem = (props) => {
  if (!props.review) {
    return null;
  }
  const { rating, body, updatedAt, id } = props.review;
  const { deleteReview, reviewer } = props;

  return (
    <div className="review-item">
      <div className="name-time">
        <div className="reviewer-name">{reviewer}</div>
        <div className="review-time">{updatedAt}</div>
      </div>
      <div className="review-rating">Rating: {rating}</div>
      <div className="review-body">Body: {body}</div>
      <button onClick={() => deleteReview(id)}>Delete Review</button>
    </div>
  );
};

const mSTP = (state, ownProps) => {
  console.log(
    `reviewed by ${state.entities.users[ownProps.review.reviewerId].firstname}`
  );
  return {
    reviewer: state.entities.users[ownProps.review.reviewerId].firstname,
  };
};

export default connect(mSTP)(ReviewItem);
