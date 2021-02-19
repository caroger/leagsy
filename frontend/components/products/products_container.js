import { connect } from "react-redux";
import Products from "./products";
import { fetchProducts } from "../../actions/product_actions";

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.entities.products),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
