import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../../actions/cart_actions";
import { deleteCartItem } from "../../actions/cart_actions";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemCount = Object.keys(this.props.cartItems).length;
    return (
      <div className="CartContainer">
        <div className="Text1">{itemCount} Items in Your Cart</div>
        <div className="Text2">
          <Link to={"/home"}>Keep Shopping</Link>
        </div>
        <div className="CartItems">
          {Object.values(this.props.cartItems).map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))}
        </div>
        <div className="Bank">Choose Credit Card and Checkout</div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    cartItems: state.entities.cartItems,
    products: state.entities.products,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(mSTP, mDTP)(Cart);
