import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";

const splashPage = () => (
  <div>
    <Modal />
    <NavBarContainer />
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
