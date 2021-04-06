import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewGrid = (props) => {
  return (
    <div className="review-list">
      {props.reviewIds.map((id) => (
        <ReviewItem review={props.reviews[id]} key={id} />
      ))}
    </div>
  );
};
export default ReviewGrid;
