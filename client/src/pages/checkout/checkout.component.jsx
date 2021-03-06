import React, { useState } from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
import { CSSTransition } from "react-transition-group";

const CheckoutPage = () => {
  const [isRemoved, setIsRemoved] = useState(true);
  const [indexOfRemoved, setIndexOFRemoved] = useState(null);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const onCheckoutItemClicked = (indexOfRemoved) => {
    setIsRemoved(false);
    setIndexOFRemoved(indexOfRemoved);
    setTimeout(() => setIsRemoved(true), 1000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Desctiption</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem, index) => (
        <CSSTransition
          in={index > indexOfRemoved ? isRemoved : true}
          appear={false}
          timeout={1000}
          classNames="liftItem"
          key={index}
          className="cart-item-container"
        >
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
            onClick={onCheckoutItemClicked}
            index={index}
          />
        </CSSTransition>
      ))}

      <CSSTransition
        in={isRemoved}
        appear={false}
        timeout={1000}
        classNames="liftTotal"
      >
        <div className="total">
          <StripeCheckoutButton price={total} />
          <p>
            <span>TOTAL: ${total}</span>
          </p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default CheckoutPage;
