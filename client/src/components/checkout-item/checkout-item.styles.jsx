import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  height: 200px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 2.5px 0;
  border-radius: 8px;
  position: relative;
  z-index: 2;
  background-color: #303030;
  color: #f1f1f1;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 490px;
    max-width: 500px;
    width: auto;
    margin: 0;
  }
`;

const CheckoutItemContainerInner = css`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5px;

  &:first-of-type {
    width: 160px;
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:nth-child(2) {
      &::before {
        background-color: #858585;
        color: #303030;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin: 5px 0;
        content: "Description: ";
      }

      display: flex;
      flex-direction: column;

      &::after {
        content: "";
        margin: 8px 0;
        width: 100%;
        height: 3px;
        background-color: #f1f1f1;
      }
    }

    &:nth-child(3) {
      &::before {
        content: "Quantity: ";
        text-align: center;
        grid-area: topSide;
        background-color: #858585;
        color: #303030;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin: 5px 0;
      }

      display: grid;
      grid-template-areas:
        "topSide topSide topSide"
        "leftSide mid rightSide"
        "bottomSide bottomSide bottomSide";
      grid-template-rows: 1fr 1fr 19px;
      grid-template-columns: 1fr 1fr 1fr;

      &::after {
        content: "";
        margin: 8px 0;
        width: 100%;
        height: 3px;
        background-color: #f1f1f1;
        grid-area: bottomSide;
      }
    }

    &:nth-child(4) {
      &::before {
        content: "Price: ";
        background-color: #858585;
        color: #303030;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin: 5px 0;
      }

      display: flex;
      flex-direction: column;

      &::after {
        content: "";
        margin: 8px 0;
        width: 100%;
        height: 3px;
        background-color: #f1f1f1;
      }
    }

    &:nth-child(5) {
      &::before {
        content: "Remove: ";
        background-color: #858585;
        color: #303030;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin: 5px 0;
      }

      display: flex;
      flex-direction: column;
    }
  }
`;

const CheckoutItemArrow = css`
  cursor: pointer;
  text-align: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  align-items: center;
`;

export const CheckoutItemImg = styled.div`
  ${CheckoutItemContainerInner}
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 14px;

  img {
    max-width: 100%;
  }
`;

export const CheckoutItemQuantity = styled.div`
  ${CheckoutItemContainerInner};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckoutItemLeftArrow = styled.div`
  ${CheckoutItemArrow}
  grid-area: leftSide;
`;

export const CheckoutItemRightArrow = styled.div`
  ${CheckoutItemArrow}
  grid-area: rightSide;
`;

export const CheckoutItemValue = styled.div`
  grid-area: mid;
  text-align: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const CheckoutItemRemove = styled.div`
  ${CheckoutItemContainerInner}
  cursor: pointer;
  color: #f1f1f1;
`;

export const CheckoutItemName = styled.div`
  ${CheckoutItemContainerInner}
`;
