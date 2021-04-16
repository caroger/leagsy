import React, { Component } from "react";
import ReviewList from "../Review/ReviewList";
import ReviewForm from "../Review/ReviewForm";
import AddToCartForm from "./AddToCartForm";
import ImageSlider from "./ImageSlider";

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
      <div className="ProductShowContainer">
        <div className="leftCol">
          <ImageSlider images={urls} />
          <ReviewList
            reviews={this.props.reviews}
            reviewers={this.props.reviewers}
            deleteReview={this.props.deleteReview}
          />
          <ReviewForm productId={product.id} />
        </div>
        <div className="rightCol">
          <AddToCartForm product={product} />
        </div>
      </div>
    );
  }
}
export default Product;
