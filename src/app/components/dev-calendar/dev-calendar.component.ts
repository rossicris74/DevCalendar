import { Component} from '@angular/core';
import { DevCalendarSandbox } from './dev-calendar.sandbox';
import * as RoomsType from 'src/app/api/src/lib/rooms/rooms.type';
import { ListUsers4Group } from 'src/app/api/src/lib/users/user.type';

@Component({
  selector: 'dev-calendar',
  templateUrl: './dev-calendar.component.html',
  styleUrls: ['./dev-calendar.component.css'],
  providers: [DevCalendarSandbox],
})

export class DevCalendarComponent {
  rooms: RoomsType.Rooms = [];
  constructor(
    readonly devCalendarSandbox: DevCalendarSandbox
  ) {
    this.devCalendarSandbox.rooms$.subscribe(rooms => this.rooms = rooms)
  }

    onAppointmentFormOpening(data: any, listRooms4Group: RoomsType.ListRooms4Group, listUser4Group: ListUsers4Group) {
    const that = this;
    const form = data.form;
    

    form.option('items', [
      
      {
        label: {
          text: 'Utente',
        },
        editorType: 'dxSelectBox',
        dataField: 'userId',
        editorOptions: {
          items: listUser4Group,
          displayExpr: 'text',
          valueExpr: 'id'
        },
      },
      {
        label: {
          text: 'Stanza',
        },
        editorType: 'dxSelectBox',
        dataField: 'roomId',
        editorOptions: {
          items: listRooms4Group,
          displayExpr: 'text',
          valueExpr: 'id'
        },
      }, ]);

  }

  onAppointmentUpdated(data:any){
    console.log(data);
  }
  onAppointmentUpdating(data:any){
    console.log(data);
  }
}