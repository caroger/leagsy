import React, { Component } from "react";
import { connect } from "react-redux";
import { createCartItem } from "../../actions/cart_actions";
import { FaCheck, FaTruckMoving } from "react-icons/fa";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

class AddToCartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.productId,
      quantity: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shippingDate = this.shippingDate.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props
        .createCartItem(this.state)
        .then(() => this.props.history.push("/cart"));
    } else {
      this.props.openModal("notlogincart");
    }
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
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
            value={this.state.quantity}
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
          <div className="description-body">
            {description.split("\\n").map((p) => (
              <span>
                {p}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    productId: ownProps.match.params.productId,
  };
};

const mDTP = (dispatch) => {
  return {
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(mSTP, mDTP)(AddToCartForm));
