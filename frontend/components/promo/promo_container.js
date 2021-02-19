import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import Promo from "./promo";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    products: Object.values(state.entities.products),
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
