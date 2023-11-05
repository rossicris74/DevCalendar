import { Component, Injectable, OnInit} from '@angular/core';
import * as RoomsApi from '../../api/src/lib/rooms/public-api';
import * as roomsSelectors from '../../root-store/src/rooms/rooms.selectors';
import * as roomsActions from '../../root-store/src/rooms/rooms.actions';
import { Store } from '@ngrx/store';
import * as RoomStoreState from '../../root-store/src/rooms/rooms.state';
import * as Copy from '../../utils/deep-copy';

@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
@Injectable({providedIn: 'root'})
export class RoomsComponent implements OnInit{
  dataSource: RoomsApi.RoomsType.Rooms = [];
  roomList$ = this.store.select(roomsSelectors.getRoomList);
  
  constructor(
    private readonly store: Store<RoomStoreState.State>,
    ) {}


  ngOnInit(): void {
    this.roomList$.subscribe(roomsList => this.dataSource = Copy.deepCopy(roomsList))
  }

 onSave(e:any){
  const typeSave = e.changes[0].type;
  const data = e.changes[0].data;
  const key = e.changes[0].key;
  switch(typeSave) { 
    case 'insert':  
      this.rowInserted(data);
       break;  
    case 'update':
      this.rowUpdated(data);
       break; 
    case 'remove':
      this.onDelete(key);
      break;
    default:
       break; 
 } 
}

 onDelete(id: number){
  this.store.dispatch(roomsActions.deleteRoom({id}));
 }

 rowInserted(room: RoomsApi.RoomsType.Room){
  this.store.dispatch(roomsActions.insertRoom({room}));
 }

 rowUpdated(room: RoomsApi.RoomsType.Room){
  this.store.dispatch(roomsActions.updateRoom({room}));
 }
}
