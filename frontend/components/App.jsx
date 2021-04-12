import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import GlobalNav from "./GlobalNav/GlobalNavContainer";
import Products from "./Products/Products";
import Product from "./Product/ProductContainer";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";

const App = () => {
  return (
    <section className="App">
      <GlobalNav />
      <Modal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:productId" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </section>
  );
};

export default App;
