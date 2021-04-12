import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import NavBar from "./GlobalNav";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(NavBar);
