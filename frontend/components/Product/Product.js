import React, { Component } from "react";
import ReviewList from "../Review/ReviewList";
import ReviewForm from "../Review/ReviewForm";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }
  render() {
    const { product, reviews, reviewers } = this.props;
    if (!product || !reviews || !reviewers) return null;
    const urls = product.imgUrls || [];
    return (
      <div className="product-show">
        <Link to={"/products"}>Back to Product Index</Link>
        <div className="product-title">
          <h1>{product.name}</h1>
        </div>
        <div className="product-image">
          <img src={`http://localhost:3000${urls[0]}`} alt="" />
        </div>
        <ReviewList
          reviews={this.props.reviews}
          reviewers={this.props.reviewers}
          deleteReview={this.props.deleteReview}
        />
        <ReviewForm productId={product.id} />
      </div>
    );
  }
}
export default Product;
