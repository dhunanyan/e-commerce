import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewsContainer,
  CollectionPreviewsPreview,
  CollectionPreviewTitle,
} from "./collection-preview.styles";

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const windowSizes = useWindowDimensions();

  return (
    <CollectionPreviewsContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`${path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <CollectionPreviewsPreview>
        {items
          .filter((item, idx) => {
            if (windowSizes.width > 768) {
              return idx < 4;
            } else if (windowSizes.width > 550 && windowSizes.width <= 768) {
              return idx < 3;
            } else if (windowSizes.width >= 375 && windowSizes.width <= 550) {
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

export default CollectionPreview;
