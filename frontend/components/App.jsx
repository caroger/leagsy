import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    {/* <GreetingContainer /> */}
  </div>
);

export default App;
