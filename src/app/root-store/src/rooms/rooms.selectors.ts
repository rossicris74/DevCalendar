import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './rooms.state';
import { RoomsFeatureKey } from './rooms.reducers';
import { RoomsType } from 'src/app/api/src/lib/rooms/public-api';

export const getRoomsState = createFeatureSelector<State>(RoomsFeatureKey);
const getRoomListState = (state: State) => state.roomList;

/** Ritorna l'elenco dei documenti cliente*/
export const getRoomList = createSelector(getRoomsState, getRoomListState);
export const getRoomList4Group = createSelector( getRoomsState,getRoomList, (_, roomList)  => {
    let listRooms4Group: RoomsType.ListRooms4Group = [];
    if (roomList?.length > 0){
        roomList.forEach(room => {
            const user4Group : RoomsType.Room4Group = {id:room.id, text:room.descrizione}
            listRooms4Group.push(user4Group);}
        )
    }
return listRooms4Group;
})