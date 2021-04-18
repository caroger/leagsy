import React from "react";
import { Link } from "react-router-dom";

function CheckoutMessage() {
  return (
    <div className="CheckoutMessage">
      <h1>Thank you for visting Rtsy!</h1>
      <p>
        All credits go to Riot Games for the sample products images and
        descriptions used on Rtsy.
      </p>
      <p>
        Please head to the official{" "}
        <Link
          to="https://merch.riotgames.com/en-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Riot Games Merch website
        </Link>{" "}
        to make purchases.
      </p>
    </div>
  );
}

export default CheckoutMessage;
