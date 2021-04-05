import React from "react";

const ReviewGrid = (props) => {
  return (
    <ul>
      {props.reviewIds.map((id) => (
        <li key={id}>rating: {props.reviews[id].rating}</li>
      ))}
    </ul>
  );
};
export default ReviewGrid;
