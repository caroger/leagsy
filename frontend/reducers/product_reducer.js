import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCT_ERRORS,
} from "../actions/product_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.id]: action.product });
    case RECEIVE_PRODUCT_ERRORS:
      return null;
    default:
      return state;
  }
};
