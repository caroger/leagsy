export const selectProduct = ({ products }, productId) => {
  return products[productId] || { reviewIds: [] };
};

export const selectReviewsForProduct = ({ products, reviews }, product) => {
  return product.reviewIds.map((reviewId) => reviews[reviewId]);
};
export const asArray = ({ products }) =>
  Object.keys(products).map((key) => products[key]);
