import React from "react";

import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemImg,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, history, linkUrl, match, className }) => {
  return (
    <MenuItemContainer
      className={className}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemImg imageUrl={imageUrl} />
      <MenuItemContent>
        <h2>{title.toUpperCase()}</h2>
        <span>SHOP NOW</span>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
