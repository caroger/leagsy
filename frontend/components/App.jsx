import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Products from "./products/product_index";
import Product from "./product/product";
import Home from "./home/home";


const App = () => {
  return (
    <section className="App">
      <NavBarContainer />
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
