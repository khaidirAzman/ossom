import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {computerReducer, playerReducer} from "../ossom.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  playerCounter: playerReducer,
  computerCounter: computerReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
