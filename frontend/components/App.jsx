import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";

const noMatchPage = () => {
  return (
    <div>
      <h3>404 - Not found</h3>
    </div>
  );
};

const splashPage = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <GreetingContainer />
  </div>
);

const App = () => {
  return (
    <section className="App">
      <Switch>
        <Route exact path="/" component={splashPage} />
        <Route component={noMatchPage} />
      </Switch>
    </section>
  );
};

export default App;
