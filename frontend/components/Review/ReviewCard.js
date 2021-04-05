import React from "react";

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    // return null;
    if (!this.props.review.id) return null;
    return (
      <div className="reivew-card">
        <li>id: {this.props.reivew.id}</li>
        {/* <li>rating: {this.props.review.rating}</li> */}
      </div>
    );
  }
}
export default ReviewCard;
