import * as APIUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const CLEAR_PRODUCT_ERRORS = "CLEAR_PRODUCT_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const START_LOADING_PRODUCTS = "START_LOADING_PRODUCTS";
export const START_LOADING_PRODUCT = "START_LOADING_PRODUCT";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = (payload) => ({
  type: RECEIVE_PRODUCT,
  payload,
});

export const receiveReview = ({ review, avgRating, reviewer }) => ({
  type: RECEIVE_REVIEW,
  review,
  avgRating,
  reviewer,
});

export const receiveProductErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors,
});

export const clearProductErrors = () => ({
  type: CLEAR_PRODUCT_ERRORS,
});

export const startLoadingProducts = () => ({
  type: START_LOADING_PRODUCTS,
});

export const startLoadingProduct = () => ({
  type: START_LOADING_PRODUCT,
});

// Thunk Actions

export const fetchProducts = () => (dispatch) => {
  return APIUtil.fetchProducts().then(
    (products) => dispatch(receiveProducts(products)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );
};

export const fetchProduct = (productId) => (dispatch) => {
  return APIUtil.fetchProduct(productId).then(
    (product) => dispatch(receiveProduct(product)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );
};
