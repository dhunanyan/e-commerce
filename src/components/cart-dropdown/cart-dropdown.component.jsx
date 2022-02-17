import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CSSTransition } from "react-transition-group";

import { BsFillArrowUpSquareFill as Close } from "react-icons/bs";

import "./cart-dropdown.styles.scss";

import {
  CartDropdownContainer,
  CartDropdownItems,
  CartDropdownEmptyMessage,
  CartDropdownButtons,
  CartDropdownCloseButton,
} from "./cart-dropdown.styles";

const zoomHandle = (cartItems) => {
  if (cartItems.length >= 3) {
    return 400;
  } else if (cartItems.length >= 2) {
    return 300;
  } else if (cartItems.length >= 1) {
    return 200;
  }
  return 178;
};

const CartDropdown = ({ cartItems, hidden, history, toggleCartHidden }) => (
  <CartDropdownContainer hidden={hidden} zoom={zoomHandle(cartItems)}>
    <CartDropdownItems>
      {cartItems.length ? (
        cartItems.map((cartItem, index) => (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade-in"
            key={index}
          >
            <CartItem key={cartItems.id} cartItem={cartItem} />
          </CSSTransition>
        ))
      ) : (
        <CartDropdownEmptyMessage>
          Your cart is empty...
        </CartDropdownEmptyMessage>
      )}
    </CartDropdownItems>
    <CartDropdownButtons>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
      <CartDropdownCloseButton onClick={() => toggleCartHidden()}>
        <Close />
      </CartDropdownCloseButton>
    </CartDropdownButtons>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
