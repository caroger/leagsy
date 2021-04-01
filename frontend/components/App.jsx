import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Products from "./Products/Products";
import Product from "./Product/Product";
import Home from "./Home/Home";

const App = () => {
  return (
    <section className="App">
      <NavBarContainer />
      <Modal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </section>
  );
};

export default App;
