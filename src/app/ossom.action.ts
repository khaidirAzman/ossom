import {createAction} from "@ngrx/store";

export const incrementComputer = createAction('IncrementComputer');
export const winPlayer = createAction('WinPlayer');
export const winComputer = createAction('WinComputer');
export const incrementPlayer = createAction('IncrementPlayer');
export const resetPlayer = createAction('ResetPlayer');
export const resetComputer = createAction('ResetComputer');
