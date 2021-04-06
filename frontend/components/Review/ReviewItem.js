import React from "react";

const ReviewItem = (props) => {
  if (!props.review) {
    return null;
  }
  const { reviewer, rating, body, updatedAt, id } = props.review;
  const { deleteReview } = props;

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

export default ReviewItem;
