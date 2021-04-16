import React, { Component } from "react";
import { connect } from "react-redux";
import { createCartItem } from "../../actions/cart_actions";
import { FaCheck, FaTruckMoving } from "react-icons/fa";
import { openModal, closeModal } from "../../actions/modal_actions";

class AddToCartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: {
        product_id: props.product.id,
        quantity: 1,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shippingDate = this.shippingDate.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.currentUser
      ? this.props.createCartItem(this.state.cartItem)
      : this.props.openModal("notlogincart");
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      cartItem: Object.assign(
        {},
        { ...this.state.cartItem },
        {
          [e.target.name]: e.target.value,
        }
      ),
    });
  }

  shippingDate() {
    const today = new Date();
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(today.setDate(today.getDate() + 3));
  }

  render() {
    const { seller, name, price, description } = { ...this.props.product };
    return (
      <div className="AddToCartForm">
        <div className="seller-name">Sold by: {seller}</div>
        <div className="product-name">{name}</div>
        <div className="price-availability">
          <div className="product-price">${price}</div>
          <div className="availability">
            <FaCheck className="faCheck" />
            <span>In stock</span>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            min={1}
            onChange={this.handleChange}
            value={this.state.cartItem.quantity}
          />
          <button type="submit">
            <span>Add To Cart</span>
          </button>
        </form>

        <div className="arrives-container">
          <FaTruckMoving size="32px" style={{ margin: "0 4px 0 0" }} />
          <p>Arrives by {this.shippingDate()} if you order today</p>
        </div>

        <div className="description">
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(AddToCartForm);
