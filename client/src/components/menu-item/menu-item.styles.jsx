import styled from "styled-components";

export const MenuItemContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    div:first-child {
      transform: scale(1.1);
    }

    div:last-child {
      opacity: 0.9;
    }
  }
`;

export const MenuItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: all 350ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
  transition: all 350ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

  h2 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }

  span {
    font-weight: lighter;
    font-size: 16px;
  }
`;
