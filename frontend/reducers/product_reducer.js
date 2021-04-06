import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      nextState.all = action.products;
      return nextState;
    case RECEIVE_PRODUCT:
      nextState.product = action.product;
      return nextState;
    default:
      return oldState;
  }
};
