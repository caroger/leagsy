import CartItem from "./CartItem";
import React from "react";

const CartItemList = ({ cartItems }) => {
  return (
    <div className="cart-item-list">
      {Object.keys(cartItems).map((id) => (
        <CartItem key={id} cartItemId={id} cartItem={cartItems[id]} />
      ))}
    </div>
  );
};

export default CartItemList;
