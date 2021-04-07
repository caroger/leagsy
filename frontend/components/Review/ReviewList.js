import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewGrid = ({ reviews, reviewers, deleteReview }) => {
  return (
    <div className="reviewGrid">
      {Object.keys(reviews).map((id) => (
        <ReviewItem key={id} review={reviews[id]} deleteReview={deleteReview} />
      ))}
    </div>
  );
};

export default ReviewGrid;
