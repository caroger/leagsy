import * as APIUtil from "../util/cart_item_api_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

const destoryCartItem = ({ cartItem }) => ({
  type: DELETE_CART_ITEM,
  cartItem,
});

const receiveCartItem = ({ cartItem }) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});
// Thunk Actions

export const fetchCartItems = () => (dispatch) => {
  return APIUtil.fetchCartItems().then((cartItems) =>
    dispatch(receiveCartItems(cartItems))
  );
};

export const deleteCartItem = (id) => (dispatch) => {
  return APIUtil.deleteCartItem(id).then((cartItem) =>
    dispatch(destoryCartItem(cartItem))
  );
};

export const createCartItem = (cartItem) => (dispatch) => {
  return APIUtil.createCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );
};

export const updateCartItem = (cartItem) => (dispatch) => {
  // debugger;
  return APIUtil.updateCartItem(cartItem).then((cartItem) =>
    dispatch(receiveCartItem(cartItem))
  );
};
