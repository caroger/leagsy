import React, { Component } from "react";
import { connect } from "react-redux";
import { createCartItem } from "../../actions/cart_actions";

class AddToCartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: {
        product_id: props.productId,
        quantity: 1,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createCartItem(this.state.cartItem);
    console.log(this.state.cartItem);
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
    console.log(this.state.cartItem);
  }

  render() {
    return (
      <div className="add-to-cart-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="quantity"
            onChange={this.handleChange}
            value={this.state.cartItem.quantity}
          />
          <button type="submit">Add To Cart</button>
        </form>
      </div>
    );
  }
}

const mDTP = (dispatch) => {
  return {
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  };
};

export default connect(null, mDTP)(AddToCartForm);
