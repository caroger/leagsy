import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchCartItems } from "../../actions/cart_actions";
import { fetchProducts } from "../../actions/product_actions.js";
import { fetchReviews } from "../../actions/review_actions";
import NavBar from "./GlobalNav";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    itemCount: Object.keys(state.entities.cartItems).length || 0,
  };
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchCartItems: () => dispatch(fetchCartItems()),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(mSTP, mDTP)(NavBar);
