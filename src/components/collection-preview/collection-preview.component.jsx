import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectWindowSize } from "../../redux/window-size/window-size.selectors";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewsContainer,
  CollectionPreviewsPreview,
  CollectionPreviewTitle,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, size }) => {
  const { width, height } = size;
  return (
    <CollectionPreviewsContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewsPreview>
        {items
          .filter((item, idx) => {
            if (width > 768) {
              return idx < 4;
            } else if (width > 550 && width <= 768) {
              return idx < 3;
            } else if (width >= 375 && width <= 550) {
              return idx < 2;
            } else return idx < 1;
          })
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionPreviewsPreview>
    </CollectionPreviewsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  size: selectWindowSize,
});

export default connect(mapStateToProps)(CollectionPreview);
