import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover {
    .collection-item-image {
      opacity: 0.8;
      transform: scale(1.1);
    }

    button {
      opacity: 0.9;
      pointer-events: all;
    }
  }

  @media (max-width: 950px) {
    height: 224px;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const CollectionItemImg = styled.div`
  overflow: hidden;
  width: 100%;
  height: 95%;
`;

export const CollectionItemImgInner = styled.div`
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all 350ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const CollectionItemButton = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  bottom: 50px;
  pointer-events: none;
  transition: all 350ms ease-out;
  z-index: 3;
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const CollectionItemPrice = styled.span`
  width: 10%;
`;
