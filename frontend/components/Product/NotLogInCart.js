import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

function NotLogInCart(props) {
  return (
    <div className="NotLogInCart">
      <p>Please </p>
      <div className="ModalLink" onClick={() => props.openModal("login")}>
        register or log in
      </div>
      <p>before adding items to cart.</p>
    </div>
  );
}

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mDTP)(NotLogInCart);
