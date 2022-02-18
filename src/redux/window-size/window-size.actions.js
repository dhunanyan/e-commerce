import { WindowSizeActionTypes } from "./user.types";

export const getWindowSize = (size) => ({
  type: WindowSizeActionTypes.GET_WINDOW_SIZE,
  payload: size,
});
