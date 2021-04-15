import React, { Component } from "react";
import ReviewList from "../Review/ReviewList";
import ReviewForm from "../Review/ReviewForm";
import AddToCartForm from "../Cart/AddToCartForm";
import ImageContainer from "./ImagesContainer";

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
          <ImageContainer images={urls} />
          <ReviewList
            reviews={this.props.reviews}
            reviewers={this.props.reviewers}
            deleteReview={this.props.deleteReview}
          />
          <ReviewForm productId={product.id} />
        </div>
        <div className="rightCol">
          <h1>{product.name}</h1>
          <AddToCartForm productId={product.id} />
        </div>
      </div>
    );
  }
}
export default Product;
