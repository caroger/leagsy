import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";

const App = () => (
  <div>
    <header>
      <h1>Rtsy</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
