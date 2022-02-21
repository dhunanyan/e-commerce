import React, { useState, useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  const [isBodyLocked, setIsBodyLocked] = useState(false);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const bodyLockHandle = (isMenuActive) => {
    setIsBodyLocked(isMenuActive);
  };

  return (
    <div
      scroll={`${isBodyLocked ? "no" : "yes"}`}
      className={`wrapper ${isBodyLocked ? "wrapper--locked" : ""}`}
    >
      <Header bodyLock={bodyLockHandle} />

      <div className="body-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SigninAndSignupPage />
            }
          />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
