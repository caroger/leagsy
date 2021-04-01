import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions";

const productReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, oldState, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, oldState, {
        [action.product.id]: action.product,
      });
    default:
      return oldState;
  }
};

export default productReducer;
