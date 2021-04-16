import {
  RECEIVE_CART_ITEMS,
  DELETE_CART_ITEM,
  RECEIVE_CART_ITEM,
} from "../actions/cart_actions";

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
    case RECEIVE_CART_ITEM:
      const { cartItem } = action;
      return Object.assign({}, oldState, {
        [cartItem.id]: cartItem,
      });
    default:
      return oldState;
  }
};
