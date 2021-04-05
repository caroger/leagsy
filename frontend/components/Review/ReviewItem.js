import React from "react";

const ReviewItem = (props) => {
  const { reviewer, rating, body } = props.review;
  return (
    <div className="reviewItem">
      <div className="reviewRating">Reviewed By: {reviewer}</div>
      <div className="reviewRating">Rating: {rating}</div>
      <div className="reviewRating">Body: {body}</div>
    </div>
  );
};

export default ReviewItem;
