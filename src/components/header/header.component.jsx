import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { HiMenuAlt3 as Bars } from "react-icons/hi";
import { FaTimes as Times } from "react-icons/fa";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderImg,
  HeaderLogo,
  HeaderList,
  HeaderItem,
  HeaderLink,
  HeaderToggle,
  HeaderButton,
} from "./header.styles";

const Header = ({ currentUser, hidden, bodyLock, signOutStart }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [menuFadeIn, setMenuFadeIn] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleTimesClick = () => {
    setTimeout(() => setMenuIsActive(false), 350);
    if (bodyLock(!menuIsActive)) {
      bodyLock(!menuIsActive);
    }

    setMenuFadeIn({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
  };

  const handleBarsClick = () => {
    setMenuIsActive(true);
    bodyLock(!menuIsActive);
    setTimeout(
      () =>
        setMenuFadeIn({
          1: true,
          2: false,
          3: false,
          4: false,
          5: false,
        }),
      200
    );
    setTimeout(
      () =>
        setMenuFadeIn({
          1: true,
          2: true,
          3: false,
          4: false,
          5: false,
        }),
      250
    );
    setTimeout(
      () =>
        setMenuFadeIn({
          1: true,
          2: true,
          3: true,
          4: false,
          5: false,
        }),
      300
    );
    setTimeout(
      () =>
        setMenuFadeIn({
          1: true,
          2: true,
          3: true,
          4: true,
          5: false,
        }),
      350
    );
    setTimeout(
      () =>
        setMenuFadeIn({
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
        }),
      400
    );
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderImg
          to="/"
          onClick={() => (menuIsActive ? handleTimesClick() : null)}
        >
          <HeaderLogo />
        </HeaderImg>

        <HeaderList isActive={menuIsActive}>
          <HeaderItem isFade={menuFadeIn[1]}>
            <HeaderLink
              to="/shop"
              onClick={() => (menuIsActive ? handleTimesClick() : null)}
            >
              SHOP
            </HeaderLink>
          </HeaderItem>
          <HeaderItem isFade={menuFadeIn[2]}>
            <HeaderLink
              to="/shop"
              onClick={() => (menuIsActive ? handleTimesClick() : null)}
            >
              CONTACT
            </HeaderLink>
          </HeaderItem>
          {currentUser ? (
            <HeaderItem isFade={menuFadeIn[3]}>
              <HeaderButton onClick={signOutStart}>SIGN OUT</HeaderButton>
            </HeaderItem>
          ) : (
            <HeaderItem isFade={menuFadeIn[4]}>
              <HeaderLink
                to="/signin"
                onClick={() => (menuIsActive ? handleTimesClick() : null)}
              >
                SIGN IN
              </HeaderLink>
            </HeaderItem>
          )}
          <HeaderItem
            isFade={menuFadeIn[5]}
            onClick={() => (menuIsActive ? handleTimesClick() : null)}
          >
            <CartIcon />
          </HeaderItem>
        </HeaderList>
        <CartDropdown hidden={hidden} s />
        {menuIsActive ? (
          <HeaderToggle headerToggle="times" onClick={() => handleTimesClick()}>
            <Times />
          </HeaderToggle>
        ) : (
          <HeaderToggle headerToggle="bars" onClick={() => handleBarsClick()}>
            <Bars />
          </HeaderToggle>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchtoProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
