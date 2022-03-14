import styled, { css } from "styled-components";

import MenuItem from "../menu-item/menu-item.component";

const DirectoryItemHats = css`
  grid-area: hats;
`;

const DirectoryItemJackets = css`
  grid-area: jackets;
`;

const DirectoryItemSneakers = css`
  grid-area: sneakers;
`;

const DirectoryItemWomens = css`
  grid-area: womens;
`;

const DirectoryItemMens = css`
  grid-area: mens;
`;

const chooseDirectoryItemType = ({ title }) => {
  if (title === "hats") {
    return DirectoryItemHats;
  } else if (title === "jackets") {
    return DirectoryItemJackets;
  } else if (title === "sneakers") {
    return DirectoryItemSneakers;
  } else if (title === "mens") {
    return DirectoryItemMens;
  } else if (title === "womens") {
    return DirectoryItemWomens;
  }
};

export const DirectoryItem = styled(MenuItem)`
  ${chooseDirectoryItemType}
`;

export const DirectoryMenu = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns:
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px)
    minmax(90px, 300px);
  grid-template-rows: minmax(150px, 300px) minmax(275px, 450px);
  grid-template-areas:
    "hats hats jackets jackets sneakers sneakers"
    "womens womens womens mens mens mens";

  @media (max-width: 768px) {
    grid-template-rows:
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px);
    grid-template-columns:
      minmax(90px, 500px)
      minmax(90px, 500px);
    grid-template-areas:
      "hats hats"
      "jackets sneakers"
      "womens womens"
      "mens mens";
  }

  @media (max-width: 550px) {
    grid-template-rows:
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px)
      minmax(100px, 250px);
    grid-template-columns: minmax(90px, 1fr);
    grid-template-areas:
      "hats"
      "jackets"
      "sneakers"
      "womens"
      "mens";
  }
`;
