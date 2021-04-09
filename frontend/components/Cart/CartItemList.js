import CartItem from "./CartItem";
import React from "react";

const CartItemList = ({ cartItems, products }) => {
  return (
    <div className="cart-item-list">
      {Object.keys(cartItems).map((id) => (
        <CartItem key={id} cartItem={cartItems[id]} products={products} />
      ))}
    </div>
  );
};

export default CartItemList;
