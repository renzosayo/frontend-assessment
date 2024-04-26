import React from "react";
import logo from "../assets/images/logo1.svg";

function Header() {
  return (
    <div className="header container">
      <img src={logo} alt="protoapp logo" className="image--small" />
      <h1 className="header__title black">Protoapp</h1>
      <ul className="header__nav black">
        <li>
          <button className="header__nav__btn btn">Home</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
