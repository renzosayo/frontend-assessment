import React from "react";
import logo from "../assets/images/logo1.svg";

function Footer() {
  return (
    <div className="footer container--full">
      <div className="footer__content container">
        <img
          src={logo}
          alt="protoapp logo"
          className="image--small footer__logo"
        />
        <h1 className="footer__title">Protoapp</h1>
        <h2 className="footer__company-name">Camp One Inc, LLC</h2>
        <p className="footer__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          nisi. Adipisci asperiores nostrum est autem illum inventore quisquam,
          perferendis rem sunt animi sapiente ipsa beatae accusantium aspernatur
          vel, quaerat hic!
        </p>
        <p className="footer__copyright">
          &copy; 2024 Protoapp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
