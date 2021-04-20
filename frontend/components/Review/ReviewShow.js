import React from "react";
import { connect } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaUserCircle, FaUserAstronaut } from "react-icons/fa";
import { deleteReview } from "../../actions/review_actions";

const ReviewShow = ({ review, sessionId, deleteReview }) => {
  if (!review) {
    return null;
  }
  const { rating, body, updatedAt, reviewer, reviewerId } = review;

  return (
    <div className="ReviewShow">
      <div className="userIcon">
        {reviewerId === sessionId ? (
          <FaUserAstronaut size={36} />
        ) : (
          <FaUserCircle size={36} />
        )}
      </div>
      <div className="name-time">
        <div className="reviewer-name">{reviewer}</div>
        <div className="review-time">{updatedAt}</div>
        {sessionId === reviewerId && (
          <div className="removeBtn" onClick={() => deleteReview(review.id)}>
            <p>Remove</p>
          </div>
        )}
      </div>
      <div className="review-content">
        <div className="review-rating">
          <div className="stars">
            <StarRatingComponent
              name="product-rating"
              editing={false}
              starCount={5}
              renderStarIcon={() => <AiFillStar />}
              value={rating}
            />
          </div>
        </div>
        <div className="review-body">
          <div className="review-text">{body}</div>
        </div>
      </div>
    </div>
  );
};

const mSTP = (state) => {
  return {
    sessionId: state.session.id,
  };
};
const mDTP = (dispatch) => {
  return {
    deleteReview: (id) => dispatch(deleteReview(id)),
  };
};

export default connect(mSTP, mDTP)(ReviewShow);
