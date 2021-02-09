import React from "react";
import ReactDOM from "react-dom";
import * as ApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  window.login = ApiUtil.login;
  window.signup = ApiUtil.signup;
  window.logout = ApiUtil.logout;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Rtsy!!!</h1>, root);
});
