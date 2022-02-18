import { createSelector } from "reselect";

const selectWindow = (state) => state.windowSize;

export const selectWindowSize = createSelector(
  [selectWindow],
  (windowSize) => windowSize.size
);
