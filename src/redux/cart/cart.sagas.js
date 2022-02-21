import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart, hideCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  try {
    yield put(clearCart());
    yield put(hideCart());
  } catch (error) {
    console.log(error);
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
