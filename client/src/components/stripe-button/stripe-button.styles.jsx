import styled from "styled-components";

export const StripeButton = styled.button`
  box-shadow: 3px 4px 0px 0px #525252;
  background-color: #303030;
  border-radius: 5px;
  border: 1px solid #337bc4;
  display: inline-block;
  cursor: pointer;
  color: #f1f1f1;
  font-size: 17px;
  font-weight: bold;
  padding: 15px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #525252;
  margin: 0 0 0 auto;
  transition: all 250ms ease-in;

  &:hover {
    background-color: #337bc4;
    transform: translateX(8px);
    text-shadow: 0px 1px 0px #303030;
    box-shadow: 3px 4px 0px 0px #303030;
  }
  &:active {
    transform: scale(1.4);
    transition: all 350ms ease-out;
  }
`;
