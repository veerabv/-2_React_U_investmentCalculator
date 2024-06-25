import React from "react";
import headerImage from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div id="header">
      <img src={headerImage} alt="header-Image" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;
