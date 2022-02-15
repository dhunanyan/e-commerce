import React, { useState } from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import { MdKeyboardArrowRight as RighttArrow } from "react-icons/md";
import { FaTimes as Times } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";
import "./checkout-item.styles.scss";
import { animateScroll as scroll } from "react-scroll";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
  onClick,
  index,
}) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <CSSTransition
      in={isRemoved}
      appear={true}
      timeout={500}
      classNames="fade-out"
    >
      <div className="checkout-item">
        <div className="image-container checkout-item__inner">
          <img src={imageUrl} alt="Checkout-Item" />
        </div>
        <div className="name checkout-item__inner">{name}</div>
        <div className="quantity checkout-item__inner">
          <div
            className="arrow"
            onClick={() => {
              removeItem(cartItem);
              console.log(quantity);

              if (quantity === 1) {
                setIsRemoved(true);
                setTimeout(() => setIsRemoved(false), 250);
                setTimeout(() => clearItem(cartItem), 1000);
                onClick(index);
              }
            }}
          >
            <LeftArrow />
          </div>
          <span className="value">{quantity}</span>
          <div
            className="arrow"
            onClick={() => {
              addItem(cartItem);
            }}
          >
            <RighttArrow />
          </div>
        </div>
        <div className="price checkout-item__inner">{price}</div>
        <div
          className="remove-button checkout-item__inner"
          onClick={() => {
            setIsRemoved(true);
            setTimeout(() => setIsRemoved(false), 250);
            setTimeout(() => clearItem(cartItem), 1000);
            onClick(index);
          }}
        >
          <Times />
        </div>
      </div>
    </CSSTransition>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
