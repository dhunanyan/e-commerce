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

const CartDropdown = ({
  cartItems,
  hidden,
  history,
  dispatch,
  toggleCartHidden,
}) => (
  <div
    className={`cart-dropdown ${hidden ? "cart-dropdown--hidden" : ""} ${
      cartItems.length >= 1 ? "cart-dropdown--zoom" : ""
    } ${cartItems.length >= 2 ? "cart-dropdown--zoom1" : ""} ${
      cartItems.length >= 3 ? "cart-dropdown--zoom2" : ""
    }`}
  >
    <div className="cart-items">
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
        <span className="empty-message">Your cart is empty...</span>
      )}
    </div>
    <div className="buttons">
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
      <div className="buttons__close" onClick={() => toggleCartHidden()}>
        <Close />
      </div>
    </div>
  </div>
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
