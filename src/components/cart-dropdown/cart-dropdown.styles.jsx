import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  transition: max-height 1s ease-out, opacity 500ms ease-out,
    transform 350ms ease-out;
  opacity: ${({ hidden }) => (hidden ? "0" : "1")};
  transform: ${({ hidden }) =>
    hidden ? "translateY(-50px)" : "translateY(0)"};
  pointer-events: ${({ hidden }) => (hidden ? "none;" : "all")};
  max-height: ${({ zoom }) => zoom + "px"};
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f1f1f1;
  top: 65px;
  right: 60px;
  z-index: 994;
  border-radius: 5px;
  min-width: 340px;
  border-top: 0;
  box-shadow: 0px 16px 16px 2px rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid #303030;

  @media (max-width: 768px) {
    top: 65px;
    right: 30px;
  }

  @media (max-width: 550px) {
    min-width: 200px;
    right: 0px;
    left: 0;
    border-bottom: 1px solid #303030;
    box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  }
`;

export const CartDropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
`;
