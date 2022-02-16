import React from "react";

import { AiFillHeart as Heart } from "react-icons/ai";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__img">
        <Logo className="logo" />
      </div>
      <p className="footer__descr">
        Made with <Heart className="footer__icon" /> by Davit Hunanyan
      </p>
    </div>
  </footer>
);

export default Footer;
