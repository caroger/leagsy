import React from "react";
import { Link } from "react-router-dom";

function CheckoutMessage() {
  return (
    <div className="CheckoutMessage">
      <h1>Thank you for visting Leagsy!</h1>
      <p>
        All credits go to Riot Games for the sample products images and
        descriptions used on Leagsy.
      </p>
      <p>
        Please head to the official{" "}
        <a
          href="https://merch.riotgames.com/en-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Riot Games Merch website
        </a>{" "}
        to make purchases.
      </p>
    </div>
  );
}

export default CheckoutMessage;
