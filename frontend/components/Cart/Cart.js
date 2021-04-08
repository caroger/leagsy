import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>This is Your Shopping Cart</div>;
  }
}

const mSTP = (state) => {
  return {};
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(Cart);
