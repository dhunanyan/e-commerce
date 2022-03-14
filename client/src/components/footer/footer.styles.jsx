import styled from "styled-components";

import { AiFillHeart as Heart } from "react-icons/ai";

export const FooterWrapper = styled.footer`
  color: #303030;
  background-color: #e0e0e0;
  height: 70px;
  width: 100%;
`;

export const FooterContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const FooterImg = styled.div`
  max-width: 30px;

  svg {
    width: 100%;
  }
`;

export const FooterDescr = styled.p`
  padding: 5px;
  margin: 0;
  font-size: 18px;
  color: #303030;
  display: flex;
  align-items: center;
`;

export const FooterIcon = styled(Heart)`
  color: #525252;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
`;
