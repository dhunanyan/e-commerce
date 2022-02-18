import React from "react";
import { connect } from "react-redux";

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

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

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

      <CollectionItemButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
