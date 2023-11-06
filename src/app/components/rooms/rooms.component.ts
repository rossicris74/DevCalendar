import { Component, Injectable} from '@angular/core';
 import * as RoomsApi from '../../api/src/lib/rooms/public-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  // providers: [RoomsService],
})
@Injectable({providedIn: 'root'})
export class RoomsComponent {
  dataSource: RoomsApi.RoomsType.Rooms = [];
  
  constructor(
    readonly roomsApiService: RoomsApi.RoomsService
    ) {
    roomsApiService.getAllRoomsBeUrl().subscribe(rooms => 
      {
      this.dataSource = rooms});
    // service.getEmployees();
    // this.states = service.getStates();
    // this.roomsApiService.getRoomJsonDb();
 }


 onSave(e:any){
  const typeSave = e.changes[0].type;
  const data = e.changes[0].data;
  const key = e.changes[0].key;
  switch(typeSave) { 
    case 'insert':  
      this.rowInserted(data);
       break;  
    case 'updated':
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
  this.roomsApiService.delete(id).subscribe();
 }

 rowInserted(room: RoomsApi.RoomsType.Room){
  this.roomsApiService.insert(room.text).subscribe();
 }

 rowUpdated(room: RoomsApi.RoomsType.Room){
  this.roomsApiService.update(room.id,room.text).subscribe();
 }
}
