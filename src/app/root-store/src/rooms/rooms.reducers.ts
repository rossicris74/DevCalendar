import *  as roomsActions from './rooms.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './rooms.state';
import * as Copy from '../../../utils/deep-copy';

export const RoomsFeatureKey = 'Rooms';

const RoomsReducer = createReducer(
  initialState,

  on(roomsActions.getAllRoomsSuccess, (state, {roomList}) => ({
    ...state,
    roomList
  })),

  on(roomsActions.updateRoomSuccess, (state, {room}) => {
    debugger;
    const idx = state.roomList.findIndex(ele => ele.id === room.id);
    const updRoom = idx >-1 ? {id:room.id, text:room.text,color:room.color} : room;
    const updRoomList = Copy.deepCopy(state.roomList);
    if (idx > -1) {updRoomList[idx] = updRoom;}
    return {...state,
    roomList: updRoomList}
  }),

);

export function reducer(state: State | undefined, action: Action) {
  return RoomsReducer(state, action);
}
