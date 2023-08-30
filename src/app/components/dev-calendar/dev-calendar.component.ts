import { Component, enableProdMode } from '@angular/core';
import {
  AppointmentsService,
  AppointmentsType,
} from '../../api/src/lib/appointments/public-api';
import {
  RoomsService,
  RoomsType,
} from '../../api/src/lib/rooms/public-api';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'dev-calendar',
  templateUrl: './dev-calendar.component.html',
  styleUrls: ['./dev-calendar.component.css'],
  providers: [RoomsService, AppointmentsService],
})

export class DevCalendarComponent {
  currentDate: Date = new Date(2021, 3, 21);

  rooms: RoomsType.Rooms = [];
  appointments: AppointmentsType.Appointments = [];

  groupByDate = true;

  constructor(
    private readonly roomsService: RoomsService,
    private readonly appointmentsService: AppointmentsService
  ) {
    this.roomsService.getRoomsLocal().subscribe((rooms) => {
      this.rooms = rooms;
      console.log(this.rooms);
    });
    this.appointmentsService
      .getAppointmentsLocal()
      .subscribe((appointments) => {
        this.appointments = appointments;
        console.log(this.appointments);
      });
  }
}