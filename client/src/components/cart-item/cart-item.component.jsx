import React from "react";

import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
} from "./cart-item.styles";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImg>
        <img src={imageUrl} alt="item" />
      </CartItemImg>
      <CartItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
