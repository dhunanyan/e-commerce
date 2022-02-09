import React, { useState } from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import { MdKeyboardArrowRight as RighttArrow } from "react-icons/md";
import { FaTimes as Times } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";
import "./checkout-item.styles.scss";
import { animateScroll as scroll } from "react-scroll";

const CheckoutItem = ({ cartItem, clearItem, onClick, index }) => {
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
        <div className="image-container">
          <img src={imageUrl} alt="Checkout-Item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div
          className="remove-button"
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
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
