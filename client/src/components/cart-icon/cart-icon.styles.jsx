import styled from "styled-components";

import { AiOutlineShopping as ShoppingIcon } from "react-icons/ai";

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px 15px 0px 15px;
  border-radius: 5px;
  transition: all 350ms ease-out;
  color: #303030;

  &:hover {
    background-color: #303030;
    color: #f1f1f1;

    CartIconShoppingIcon {
      color: #f1f1f1;
    }
  }

  @media (max-width: 768px) {
    color: #f1f1f1;

    &:hover {
      background-color: #f1f1f1;
      color: #303030;

      CartIconShoppingIcon {
        color: #303030;
      }
    }
  }
`;

export const CartIconShoppingIcon = styled(ShoppingIcon)`
  min-width: 100%;
  min-height: 100%;
  font-size: 42px;
  font-weight: normal;

  @media (max-width: 768px) {
    color: #f1f1f1;
  }
`;

export const CartIconItemCount = styled.span`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
`;
