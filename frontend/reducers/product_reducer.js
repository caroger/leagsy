import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions";

const productReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      const newProduct = { [action.product.id]: action.product };
      return newProduct;
    default:
      return state;
  }
};

export default productReducer;
