import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCT_ERRORS,
} from "../actions/product_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return [];
    case RECEIVE_PRODUCT:
      return [];
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
