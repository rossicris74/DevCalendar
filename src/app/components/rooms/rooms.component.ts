import { Component} from '@angular/core';
import { RoomsService, 
  Employee, State
 } from './rooms.service';

 import * as RoomsApi from '../../api/src/lib/rooms/public-api';


@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService],
})
export class RoomsComponent {
  dataSource: Employee[];
  rooms: RoomsApi.RoomsType.Rooms = [];

  states: State[];

  constructor(
    readonly service: RoomsService,
    readonly roomsApiService: RoomsApi.RoomsService
    ) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    //this.roomsApiService.getRoomJsonDb();
 }

 rowInserted(e: any){
  console.log(e);
 }
}
