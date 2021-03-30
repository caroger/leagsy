import * as APIUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = ({ product, reviews, reviewers }) => ({
  type: RECEIVE_PRODUCT,
  product,
  reviews,
  reviewers,
});

export const fetchProducts = () => (dispatch) =>
  APIUtil.fetchProducts.then((products) => dispatch(receiveProducts));

export const fetchProduct = (id) => (dispatch) =>
  APIUtil.fetchProduct(id).then((payload) => dispatch(receiveProduct(payload)));
