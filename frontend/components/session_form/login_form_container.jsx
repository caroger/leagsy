import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
