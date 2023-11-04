import * as RoomsType from '../../../api/src/lib/rooms/rooms.type';
export interface State {
  roomsList:RoomsType.Rooms;
}

export const initialState: State = {
  roomsList:[] 
};
