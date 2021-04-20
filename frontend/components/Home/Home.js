import React, { Component } from "react";
import Promo from "./Promo";
import Recommendation from "./Recommendation";
import EditorPicks from "./EditorPicks";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";

class Home extends Component {
  componentDidMount() {
    // this.props.fetchProducts();
  }
  render() {
    return (
      <div className="Home">
        <Promo products={this.props.products} />
        <Recommendation products={this.props.products} />
        <EditorPicks products={this.props.products} />
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    products: state.entities.products.all || {},
  };
};

const mDTP = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mSTP, mDTP)(Home);
