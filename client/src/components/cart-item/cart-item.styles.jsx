import styled from "styled-components";

export const CartItemContainer = styled.div`
  border-radius: 5px;
  width: calc(100% - 10px);
  display: flex;
  min-height: 90px;
  overflow: hidden;
  padding: 5px;
  background-color: #ddd;
  margin: 0 10px 10px 0;
  transition: all 350ms ease-out;

  &:last-of-type {
    margin: 0 10px 0 0;
  }
`;

export const CartItemImg = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 5px;

  img {
    max-width: 100%;
  }
`;

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span:first-of-type {
    font-size: 18px;
  }
`;
