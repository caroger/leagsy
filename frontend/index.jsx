import React from "react";
import ReactDOM from "react-dom";
import * as ApiUtil from "./util/session_api_util";
import configureStore from "./store/store.js";

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  // TODO for testing
  window.login = ApiUtil.login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Rtsy!!!</h1>, root);
});
