import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import GlobalNav from "./GlobalNav/GlobalNavContainer";
import Products from "./Products/Products";
import Product from "./Product/ProductContainer";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import CatNav from "./CatNav/CatNav";
import Category from "./Category/Category.js";
// import Footer from "./Footer/Footer";

const App = () => {
  return (
    <section className="App">
      <GlobalNav />
      <CatNav />
      <Modal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:productId" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/cat/:catetory" component={Category} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
      {/* <Footer /> */}
    </section>
  );
};

export default App;
