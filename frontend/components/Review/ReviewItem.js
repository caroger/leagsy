import React from "react";

const ReviewItem = (props) => {
  const { reviewer, rating, body, updatedAt } = props.review;
  return (
    <div className="review-item">
      <div className="name-time">
        <div className="reviewer-name">{reviewer}</div>
        <div className="review-time">{updatedAt}</div>
      </div>
      <div className="review-rating">Rating: {rating}</div>
      <div className="review-body">Body: {body}</div>
    </div>
  );
};

export default ReviewItem;
