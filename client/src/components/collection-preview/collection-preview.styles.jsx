import styled from "styled-components";

export const CollectionPreviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CollectionPreviewsPreview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionPreviewTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  position: relative;
  margin: 15px auto 15px 0;
  padding: 5px 8px;
  z-index: 5;
  color: #303030;
  transition: all 350ms ease-out;

  &:hover {
    color: #f1f1f1;

    &::after {
      right: 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    background: #303030;
    z-index: -1;
    transition: all 350ms ease-out;
  }
`;
