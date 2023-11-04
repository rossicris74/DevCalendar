import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './rooms.state';
import { RoomsFeatureKey } from './rooms.reducers';

export const getRoomsState = createFeatureSelector<State>(RoomsFeatureKey);
const getRoomsListState = (state: State) => state.roomsList;

/** Ritorna l'elenco dei documenti cliente*/
export const getRoomsList = createSelector(getRoomsState, getRoomsListState);