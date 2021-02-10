import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  // TODO Testing Start
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //Testing End

  ReactDOM.render(<Root store={store} />, root);
});
