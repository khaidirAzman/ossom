import {createReducer, on} from "@ngrx/store";
import {incrementComputer, incrementPlayer, resetComputer, resetPlayer, winComputer, winPlayer} from "./ossom.action";

export const playerPoint = 0;
export const computerPoint = 0;
export const playerReducer = createReducer(
  playerPoint,
  on(incrementPlayer, state => state+1),
  on(winPlayer, state => state+3),
  on(resetPlayer, () => 0)
);
export const computerReducer = createReducer(
  computerPoint,
  on(incrementComputer, state => state+1),
  on(winComputer, state => state+3),
  on(resetComputer, () => 0)
);
