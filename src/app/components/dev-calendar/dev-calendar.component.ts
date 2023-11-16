import { Component} from '@angular/core';
import { DevCalendarSandbox } from './dev-calendar.sandbox';
import * as RoomsType from 'src/app/api/src/lib/rooms/rooms.type';

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

    onAppointmentFormOpening(data: any) {
    debugger;
    const that = this;
    const form = data.form;
    

    form.option('items', [{
      label: {
        text: 'Stanza',
      },
      editorType: 'dxSelectBox',
      dataField: 'priorityId',
      editorOptions: {
        items: that.rooms,
        displayExpr: 'text',
        valueExpr: 'id'
      },
    }, ]);
  }

}