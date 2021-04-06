import React, { Component } from "react";
import { createReview } from "../../actions/review_actions";
import { connect } from "react-redux";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        product_id: props.productId,
        body: "",
        rating: 5,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state.review);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      review: Object.assign(
        {},
        { ...this.state.review },
        {
          [e.target.name]: e.target.value,
        }
      ),
    });
    console.log(this.state.review);
  }

  render() {
    return (
      <div className="ReviewForm">
        <form onSubmit={this.handleSubmit}>
          <div className="review headr">Share Your Review Here</div>
          <div className="review-field">
            <div className="rating-container">
              <div className="rating-title-text">Rate This Product</div>
              [Star Rating Goes Here]
            </div>
          </div>
          <div className="review-field">
            <input
              onChange={this.handleChange}
              value={this.state.review.body}
              type="text"
              name="body"
              placeholder="Review Body Here"
            />
          </div>
          <button type="submit">Submit Your Review</button>
        </form>
      </div>
    );
  }
}

const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};
export default connect(null, mDTP)(ReviewForm);
