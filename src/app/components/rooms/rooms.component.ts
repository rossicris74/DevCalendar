import { Component} from '@angular/core';
 import * as RoomsApi from '../../api/src/lib/rooms/public-api';


@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  // providers: [RoomsService],
})
export class RoomsComponent {
  dataSource: RoomsApi.RoomsType.Rooms = [];
  
  constructor(
    readonly roomsApiService: RoomsApi.RoomsService
    ) {
    roomsApiService.getAllRoomsBeUrl().subscribe(rooms => 
      {
      this.dataSource = rooms})
    // service.getEmployees();
    // this.states = service.getStates();
    // this.roomsApiService.getRoomJsonDb();
 }

 rowInserted(e: any){
  console.log(e);
 }
}
