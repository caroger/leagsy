//React
import React from "react";
import ReactDOM from "react-dom";
//Components
import Root from "./components/root";
import configureStore from "./store/store";
import { login, logout, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");

  // TODO Testing Start
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //Testing End

  ReactDOM.render(<Root store={store} />, root);
});
