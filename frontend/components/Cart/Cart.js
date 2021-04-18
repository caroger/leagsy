import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../../actions/cart_actions";
import { deleteCartItem } from "../../actions/cart_actions";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaCcDiscover,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";
import CartItem from "./CartItem";
import { openModal } from "../../actions/modal_actions";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemCount = Object.keys(this.props.cartItems).length;
    const subTotal = Object.values(this.props.cartItems).reduce(
      (t, { quantity, product }) => t + quantity * product.price,
      0
    );
    return (
      <div className="CartContainer">
        <div className="Text1">{itemCount} items in Your Cart</div>
        <div className="Text2">
          <Link to={"/home"}>Keep Shopping</Link>
        </div>
        <div className="CartItems">
          {Object.values(this.props.cartItems).map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))}
        </div>
        <div className="Bank">
          <h1>How you'll pay</h1>
          <label htmlFor="credit" className="container">
            <FaCcVisa size={32} />
            <FaCcMastercard size={32} />
            <FaCcDiscover size={32} />
            <FaCcAmex size={32} />
            <input
              type="radio"
              name="payment"
              id="credit"
              defaultChecked={true}
            />
            <span className="checkmark"></span>
          </label>
          <label htmlFor="paypal" className="container">
            <FaCcPaypal size={32} />
            <input type="radio" name="payment" id="paypal" />
            <span className="checkmark"></span>
          </label>
          <label htmlFor="applePay" className="container">
            <FaCcApplePay size={32} />
            <input type="radio" name="payment" id="applePay" />
            <span className="checkmark"></span>
          </label>

          <div className="itemsTotal">
            <div className="label">Item(s) total</div>
            <div className="value">${subTotal}</div>
          </div>
          <div className="discount">
            <div className="label">Discount</div>
            <div className="value">$0</div>
          </div>
          <div className="subTotal">
            <div className="label">Subtotal</div>
            <div className="value">${subTotal}</div>
          </div>
          <div className="shipping">
            <div className="label">Shipping</div>
            <div className="value">FREE</div>
          </div>
          <div
            className="checkOutButton"
            onClick={() => this.props.openModal("checkout")}
          >
            <p>Proceed to checkout</p>
          </div>
        </div>
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
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Cart);
