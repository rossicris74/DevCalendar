import *  as roomsActions from './rooms.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './rooms.state';

export const RoomsFeatureKey = 'Rooms';

const RoomsReducer = createReducer(
  initialState,

  on(roomsActions.getAllRoomsSuccess, (state, {roomsList}) => ({
    ...state,
    roomsList
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return RoomsReducer(state, action);
}
