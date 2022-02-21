import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  CartIconShoppingIcon,
  CartIconItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <CartIconShoppingIcon />
      <CartIconItemCount>{itemCount}</CartIconItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
