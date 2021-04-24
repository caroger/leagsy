import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaUserAstronaut,
  FaShoppingBasket,
  FaShoppingBag,
} from "react-icons/fa";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
    this.props.fetchProducts();
    this.props.fetchReviews();
  }

  SigninButton() {
    return (
      <button
        className="SigninButton"
        onClick={() => this.props.openModal("login")}
      >
        Sign in
      </button>
    );
  }

  LogoutButton() {
    return (
      <button className="SigninButton" onClick={this.props.logout}>
        <span>
          <FaUserAstronaut size={14} />
        </span>
        <span>Log Out</span>
      </button>
    );
  }

  SiteLogo() {
    return (
      <div className="logo">
        <Link to="/" className="logo-link">
          Leagsy
        </Link>
      </div>
    );
  }

  ShoppingCart() {
    const { itemCount } = this.props;
    return (
      <Link to="/cart" className="ShoppingCart">
        <FaShoppingBag />
        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
        {itemCount > 0 && (
          <div className="itemCount">
            <span>{itemCount}</span>
          </div>
        )}
      </Link>
    );
  }

  UserNav(currentUser) {
    return (
      <ul className="UserNav">
        <li>{!currentUser ? this.SigninButton() : this.LogoutButton()}</li>
        <li>{this.ShoppingCart()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div className="NavBar">
        <div className="header-container">
          {this.SiteLogo()}
          <SearchBar />
          {this.UserNav(this.props.currentUser)}
        </div>
      </div>
    );
  }
}
export default NavBar;
