import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../../actions/cart_actions";
import { deleteCartItem } from "../../actions/cart_actions";
import CartItemList from "./CartItemList";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    const itemCount = Object.keys(this.props.cartItems).length;
    return (
      <div className="cart">
        <h1>{itemCount} Items in Your Cart</h1>
        <CartItemList cartItems={this.props.cartItems} />
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    cartItems: state.entities.cartItems,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
  };
};

export default connect(mSTP, mDTP)(Cart);
