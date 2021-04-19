import React, { Component } from "react";
import { createReview } from "../../actions/review_actions";
import StarRatingComponent from "react-star-rating-component";
import { AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: null,
      rating: 0,
      body: "",
      productId: null,
      reviewer: "",
      // reviewerId: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      productId: this.props.productId,
    });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.state.productId);
    const review = Object.assign({}, this.state, {
      product_id: productId,
      reviewer: this.props.reviewer,
    });

    this.props.createReview(review);
    // console.log(review);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    return (
      <div className="ReviewForm">
        <form onSubmit={this.handleSubmit}>
          <div className="review headr">Share Your Review Here</div>
          <div className="review-field">
            <div className="rating-container">
              <div className="rating-title-text">Rate This Product</div>
              <StarRatingComponent
                name="rating"
                starCount={5}
                renderStarIcon={() => <AiFillStar />}
                value={this.state.rating}
                onStarClick={this.onStarClick}
              />
            </div>
          </div>
          <div className="review-field">
            <input
              onChange={this.update("body")}
              value={this.state.body}
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

const mSTP = (state) => {
  return {
    reviewer: state.entities.users[state.session.id].firstname,
  };
};
const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};
export default connect(null, mDTP)(ReviewForm);
