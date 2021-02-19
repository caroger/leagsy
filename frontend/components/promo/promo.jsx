import React from "react";
import { Link } from "react-router-dom";

class Promo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, currentUser } = this.props;
    return (
      <div className="splash">
        <div className="intro-block">
          <div className="intro-header">
            {currentUser ? `Welcome ${currentUser.firstname}!` : ""} See what's
            trending on Rtsy.
          </div>
          <div className="intro-container">
            <ul className="intro-container-list">
              <Link
                to="/products/1"
                style={{ textDecoration: "none", color: "black" }}
                className="intro-container-list-index"
              >
                <div className="intro-container-list-index-image">
                  <img className="intro-image" src={window.p1} />
                  {/* <img className="intro-image" src={products[1].photoUrl} /> */}
                </div>
                <p>
                  Keyboards
                  <img className="arrow" src={window.arrow} />
                </p>
              </Link>
              <Link
                to="/products/1"
                style={{ textDecoration: "none", color: "black" }}
                className="intro-container-list-index"
              >
                <div className="intro-container-list-index-image">
                  <img className="intro-image" src={window.p2} />
                </div>
                <p>
                  Books
                  <img className="arrow" src={window.arrow} />
                </p>
              </Link>
              <Link
                to="/products/2"
                style={{ textDecoration: "none", color: "black" }}
                className="intro-container-list-index"
              >
                <div className="intro-container-list-index-image">
                  <img className="intro-image" src={window.p3} />
                </div>
                <p>
                  Offices <img className="arrow" src={window.arrow} />
                </p>
              </Link>
              <Link
                to="/products/2"
                style={{ textDecoration: "none", color: "black" }}
                className="intro-container-list-index"
              >
                <div className="intro-container-list-index-image">
                  <img className="intro-image" src={window.p4} />
                </div>
                <p>
                  Electronics
                  <img className="arrow" src={window.arrow} />
                </p>
              </Link>
              <Link
                to="/products/2"
                style={{ textDecoration: "none", color: "black" }}
                className="intro-container-list-index"
              >
                <div className="intro-container-list-index-image">
                  <img className="intro-image" src={window.p5} />
                </div>
                <p>
                  Ruby
                  <img className="arrow" src={window.arrow} />
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Promo;
