import React, { Component } from "react";
import { deleteCartItem, updateCartItem } from "../../actions/cart_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        <Link className="pImage" to={`/products/${cartItem.product.id}`}>
          {" "}
          <img src={cartItem.imageUrl} alt="imageThumb" />
        </Link>
        <div className="pName">
          <p>{cartItem.product.name}</p>
          <div
            className="removeBtn"
            onClick={() => deleteCartItem(cartItem.id)}
          >
            <p>Remove</p>
          </div>
        </div>
        <div className="pQuantity">
          <input
            min="1"
            type="number"
            name="quantity"
            value={this.state.quantity}
            id="quantity"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="pPrice">
          <div className="subTotal">
            ${cartItem.quantity * cartItem.product.price}
          </div>
          <div className="perItem">(${cartItem.product.price} each)</div>
        </div>
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
