import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  FooterWrapper,
  FooterContainer,
  FooterImg,
  FooterDescr,
  FooterIcon,
} from "./footer.styles";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterImg>
        <Logo />
      </FooterImg>
      <FooterDescr>
        Made with <FooterIcon /> by Davit Hunanyan
      </FooterDescr>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
