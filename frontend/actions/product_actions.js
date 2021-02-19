import * as ProductUtil from "../util/product";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
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

export const fetchProduct = (productId) => (dispatch) => {
  return ProductUtil.fetchProduct(productId).then(
    (product) => dispatch(receiveProduct(product)),
    (err) => dispatch(receiveProductErrors(err.responseJSON))
  );
};

export const fetchProducts = () => (dispatch) => {
  return ProductUtil.fetchProducts().then(
    (products) => dispatch(receiveProduct(products)),
    (err) => dispatch(receiveProductErrors(err.responseJSON))
  );
};
