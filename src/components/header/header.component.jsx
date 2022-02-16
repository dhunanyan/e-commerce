import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HiMenuAlt3 as Bars } from "react-icons/hi";
import { FaTimes as Times } from "react-icons/fa";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, bodyLock }) => {
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
    <header className="header">
      <div className="header__container">
        <Link
          className="header__img"
          to="/"
          onClick={() => (menuIsActive ? handleTimesClick() : null)}
        >
          <Logo />
        </Link>

        <ul
          className={`header__list ${
            menuIsActive ? "header__list--active" : ""
          }`}
        >
          <li
            className={`header__item ${
              menuFadeIn[1] ? "header__item--fade" : ""
            }`}
          >
            <Link
              className="header__link"
              to="/shop"
              onClick={() => (menuIsActive ? handleTimesClick() : null)}
            >
              SHOP
            </Link>
          </li>
          <li
            className={`header__item ${
              menuFadeIn[2] ? "header__item--fade" : ""
            }`}
          >
            <Link
              className="header__link"
              to="/shop"
              onClick={() => (menuIsActive ? handleTimesClick() : null)}
            >
              CONTACT
            </Link>
          </li>
          {currentUser ? (
            <li
              className={`header__item ${
                menuFadeIn[3] ? "header__item--fade" : ""
              }`}
            >
              <div className="header__link" onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            </li>
          ) : (
            <li
              className={`header__item ${
                menuFadeIn[4] ? "header__item--fade" : ""
              }`}
            >
              <Link
                className="header__link"
                to="/signin"
                onClick={() => (menuIsActive ? handleTimesClick() : null)}
              >
                SIGN IN
              </Link>
            </li>
          )}
          <li
            className={`header__item ${
              menuFadeIn[5] ? "header__item--fade" : ""
            }`}
            onClick={() => (menuIsActive ? handleTimesClick() : null)}
          >
            <CartIcon className="header__icon" />
          </li>
        </ul>
        <CartDropdown
          hidden={hidden}
          className="header__dropdown cart-dropdown"
        />
        {menuIsActive ? (
          <div
            className="header__toggle header__times"
            onClick={() => handleTimesClick()}
          >
            <Times />
          </div>
        ) : (
          <div
            className="header__toggle header__bars"
            onClick={() => handleBarsClick()}
          >
            <Bars />
          </div>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
