import { WindowSizeActionTypes } from "./window-size.types";
import { useWindowDimensions, getWindowDimensions } from "./window-size.utils";

const INITIAL_STATE = {
  size: getWindowDimensions(),
};

const windowSizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default windowSizeReducer;
