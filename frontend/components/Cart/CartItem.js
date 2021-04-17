import React, { Component } from "react";
import { deleteCartItem, updateCartItem } from "../../actions/cart_actions";
import { connect } from "react-redux";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.cartItem.quantity,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });

    const oldItem = this.props.cartItem;
    const newItem = {
      product_id: oldItem.product.id,
      quantity: value,
      user_id: oldItem.userId,
    };
    console.log(newItem);
    this.props.updateCartItem(newItem);
  }

  render() {
    const { cartItem, deleteCartItem } = this.props;
    return (
      <div className="CartItem">
        <h3>Product Name: ${cartItem.product.name}</h3>
        <h3>Price: ${cartItem.product.price}</h3>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={this.state.quantity}
          id="quantity"
          onChange={this.handleInputChange}
        />
        <h3>Quantity: {cartItem.quantity}</h3>
        <h3>Sub-total: ${cartItem.quantity * cartItem.product.price}</h3>
        <button onClick={() => deleteCartItem(cartItem.id)}>Remove</button>
      </div>
    );
  }
}
const mSTP = (state) => {
  cartItems = state.entities.cartItems;
};

const mDTP = (dispatch) => {
  return {
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  };
};

export default connect(null, mDTP)(CartItem);
