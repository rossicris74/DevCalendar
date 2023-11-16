import *  as roomsActions from './rooms.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './rooms.state';
import * as Copy from '../../../utils/deep-copy';
import * as RoomsType from '../../../api/src/lib/rooms/rooms.type';

export const RoomsFeatureKey = 'Rooms';

const RoomsReducer = createReducer(
  initialState,

  on(roomsActions.getAllRoomsSuccess, (state, {roomList}) => ({
    ...state,
    roomList
  })),

  on(roomsActions.updateRoomSuccess, (state, {room}) => {
    const idx = state.roomList.findIndex(ele => ele.id === room.id);
    const updRoom = idx >-1 ? {id:room.id, text:room.text} : room;
    const updRoomList = Copy.deepCopy(state.roomList);
    if (idx > -1) {updRoomList[idx] = updRoom;}
    return {...state,
    roomList: updRoomList}
  }),

  on(roomsActions.insertRoomSuccess, (state, {room}) => {
    const updRoom: RoomsType.Room = {id:room.id, text:room?.descrizione ? room.descrizione:'' };
    let updRoomList = Copy.deepCopy(state.roomList);
    updRoomList.push(updRoom);
    return {...state,
    roomList: updRoomList}
  }),

  on(roomsActions.deleteRoomSuccess, (state, {id}) => {
    const updRoomList = Copy.deepCopy(state.roomList).filter(room => room.id !== id);
    return {...state,
    roomList: updRoomList}
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return RoomsReducer(state, action);
}
