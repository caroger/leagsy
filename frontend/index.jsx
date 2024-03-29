//React
import React from "react";
import ReactDOM from "react-dom";
//Components
import Root from "./components/root";
import configureStore from "./store/store";
//TODO testing start
// import { login, logout, signup } from "./util/session_api_util";
// import { fetchProduct, fetchProducts } from "./util/product";
//TODO testing end

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

  ReactDOM.render(<Root store={store} />, root);
});
