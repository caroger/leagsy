import React from "react";
import { deleteCartItem } from "../../actions/cart_actions";
import { connect } from "react-redux";

const CartItem = ({ cartItem, deleteCartItem }) => {
  return (
    <div className="cart-item">
      <h1>{cartItem.product.name}</h1>
      <h3>Price: ${cartItem.product.price}</h3>
      <h3>Quantity: {cartItem.quantity}</h3>
      <h3>Sub-total: ${cartItem.quantity * cartItem.product.price}</h3>
      <button onClick={() => deleteCartItem(cartItem.id)}>Remove</button>
    </div>
  );
};



const mDTP = (dispatch) => {
  return {
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(null, mDTP)(CartItem);
