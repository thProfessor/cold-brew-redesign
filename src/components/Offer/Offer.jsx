import React from "react";
import "./Offer.css";
import Logo from "../../images/grady_logo.png";
import Coffee from "../../images/coffee_beans.png";

function Offer() {
  return (
    <div className="offer mt-5">
      <div className="card">
        <div className="card__image__container">
          <img src={Logo} alt="logo" className="card__image" />
        </div>
        <div className="discount mt-2">
          <h4>15% OFF</h4>
          <h5>#COFFEEDAYS</h5>
        </div>
        <img src={Coffee} alt="coffee" className="coffee_beans" />
      </div>
    </div>
  );
}

export default Offer;
