import React, { Component } from "react";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  productList() {
    return Object.entries(this.props.products).map(([key, value], i) => (
      <li key={key}>
        product_id: {value.id}; product_name: {value.name}
      </li>
    ));
  }

  render() {
    return (
      <div className="all products">
        <h1>All products</h1>
        <ul>{this.productList()}</ul>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    products: state.entities.products,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mSTP, mDTP)(Products);
