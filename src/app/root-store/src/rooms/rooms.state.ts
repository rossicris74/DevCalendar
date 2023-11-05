import * as RoomsType from '../../../api/src/lib/rooms/rooms.type';
export interface State {
  roomList:RoomsType.Rooms;
}

export const initialState: State = {
  roomList:[] 
};
