import React, { useState, useEffect } from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
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

const CollectionPreview = ({ title, items }) => {
  const { width } = useWindowDimensions();
  return (
    <div className="collection-preview">
      <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
      <div className="collection-preview__preview">
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
      </div>
    </div>
  );
};

export default CollectionPreview;
