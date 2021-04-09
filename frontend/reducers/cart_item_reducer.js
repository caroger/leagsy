import { RECEIVE_CART_ITEMS, DELETE_CART_ITEM } from "../actions/cart_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      const { cartItems } = action;
      return Object.assign({}, oldState, cartItems);
    case DELETE_CART_ITEM:
      let newState = Object.assign({}, oldState);
      delete newState[action.cartItem.id];
      return newState;
    default:
      return oldState;
  }
};
