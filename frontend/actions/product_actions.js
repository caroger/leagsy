import * as APIUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const CLEAR_PRODUCT_ERRORS = "CLEAR_PRODUCT_ERRORS";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const receiveProductErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors,
});

export const clearProductErrors = () => ({
  type: CLEAR_PRODUCT_ERRORS,
});

// Thunk Actions

export const fetchProducts = () => (dispatch) => {
  return APIUtil.fetchProducts().then(
    (products) => dispatch(receiveProducts(products)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );
};

export const fetchProduct = (id) => (dispatch) => {
  return APIUtil.fetchProduct(id).then(
    (product) => dispatch(receiveProduct(product)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );
};
