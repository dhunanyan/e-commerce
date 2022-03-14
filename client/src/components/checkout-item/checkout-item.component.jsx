import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import { MdKeyboardArrowRight as RighttArrow } from "react-icons/md";
import { FaTimes as Times } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";

import {
  CheckoutItemContainer,
  CheckoutItemImg,
  CheckoutItemLeftArrow,
  CheckoutItemQuantity,
  CheckoutItemRemove,
  CheckoutItemRightArrow,
  CheckoutItemValue,
  CheckoutItemName,
} from "./checkout-item.styles";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, onClick, index }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const [isRemoved, setIsRemoved] = useState(false);
  const dispatch = useDispatch();

  return (
    <CSSTransition
      in={isRemoved}
      appear={true}
      timeout={500}
      classNames="fade-out"
    >
      <CheckoutItemContainer>
        <CheckoutItemImg>
          <img src={imageUrl} alt="Checkout Item" />
        </CheckoutItemImg>
        <CheckoutItemName>{name}</CheckoutItemName>
        <CheckoutItemQuantity>
          <CheckoutItemLeftArrow
            onClick={() => {
              dispatch(removeItem(cartItem));

              if (quantity === 1) {
                setIsRemoved(true);
                setTimeout(() => setIsRemoved(false), 250);
                setTimeout(() => dispatch(clearItemFromCart(cartItem)), 1000);
                onClick(index);
              }
            }}
          >
            <LeftArrow />
          </CheckoutItemLeftArrow>
          <CheckoutItemValue>{quantity}</CheckoutItemValue>
          <CheckoutItemRightArrow
            onClick={() => {
              dispatch(addItem(cartItem));
            }}
          >
            <RighttArrow />
          </CheckoutItemRightArrow>
        </CheckoutItemQuantity>
        <CheckoutItemName>{price}</CheckoutItemName>
        <CheckoutItemRemove
          onClick={() => {
            setIsRemoved(true);
            setTimeout(() => setIsRemoved(false), 250);
            setTimeout(() => dispatch(clearItemFromCart(cartItem)), 1000);
            onClick(index);
          }}
        >
          <Times />
        </CheckoutItemRemove>
      </CheckoutItemContainer>
    </CSSTransition>
  );
};

export default CheckoutItem;
