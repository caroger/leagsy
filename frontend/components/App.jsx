import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PromoContainer from "./promo/promo_container";

const splashPage = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <PromoContainer />
  </div>
);

const App = () => {
  return (
    <section className="App">
      <Switch>
        <Route exact path="/" component={splashPage} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </section>
  );
};

export default App;
