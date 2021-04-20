import React, { Component } from "react";
import { createReview } from "../../actions/review_actions";
import StarRatingComponent from "react-star-rating-component";
import { AiFillStar } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { connect } from "react-redux";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: "",
      productId: null,
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
    });
    this.props.createReview(review);

    this.setState({
      body: "",
    });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  renderErrors(err) {
    return <p className="error">{err.length === 0 ? " " : err[0]}</p>;
  }

  render() {
    return (
      <div className="ReviewForm">
        <div className="userIcon">
          <FaUserAstronaut size={36} />
        </div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <div className="rating-title-text">Rate this product</div>
          <div className="rating-container">
            <StarRatingComponent
              name="rating"
              starCount={5}
              renderStarIcon={() => <AiFillStar />}
              value={this.state.rating}
              onStarClick={this.onStarClick}
              size={72}
            />
            <div className="errorMessage">
              {this.renderErrors(this.props.errors)}
            </div>
          </div>
          <textarea
            rows={5}
            className="body-input"
            onChange={this.update("body")}
            value={this.state.body}
            name="body"
            placeholder="What do you think of this product?"
          />
          <div className="submitbtn" onClick={this.handleSubmit}>
            <p>Submit Review</p>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    reviewer: state.entities.users[state.session.id].firstname,
    errors: state.errors.review,
  };
};
const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};
export default connect(mSTP, mDTP)(ReviewForm);
