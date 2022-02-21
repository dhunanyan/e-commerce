import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionItemImg,
  CollectionItemImgInner,
  CollectionItemFooter,
  CollectionItemName,
  CollectionItemPrice,
  CollectionItemButton,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <CollectionItemImg>
        <CollectionItemImgInner
          className="collection-item-image"
          imageUrl={imageUrl}
        />
      </CollectionItemImg>
      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionItemFooter>

      <CollectionItemButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
