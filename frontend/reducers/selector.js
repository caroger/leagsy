export const selectProduct = (products, productId) => {
  return products[productId] || { reviewIds: [] };
};

export const selectReviewsForProduct = ({ reviews }, product) => {
  return product.reviewIds.map((reviewId) => reviews[reviewId]);
};

export const asArray = (products) =>
  Object.keys(products).map((key) => products[key]);

// Helper functions to filter object
export const filterObject = (obj, filter, filterValue) =>
  Object.keys(obj).reduce(
    (acc, val) =>
      obj[val][filter] !== filterValue
        ? acc
        : {
            ...acc,
            [val]: obj[val],
          },
    {}
  );
