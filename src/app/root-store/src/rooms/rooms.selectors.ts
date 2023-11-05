import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './rooms.state';
import { RoomsFeatureKey } from './rooms.reducers';

export const getRoomsState = createFeatureSelector<State>(RoomsFeatureKey);
const getRoomListState = (state: State) => state.roomList;

/** Ritorna l'elenco dei documenti cliente*/
export const getRoomList = createSelector(getRoomsState, getRoomListState);