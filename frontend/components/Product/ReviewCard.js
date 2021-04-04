import React from "react";

const ReviewCard = (props) => {
  const { reviewId, review } = { ...props };

  return (
    <div>
      <p>ID: {review.id}</p>
      <p>Reviewer ID: {review.reviewerId}</p>
      <p>Product ID: {review.productId}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
};

export default ReviewCard;
