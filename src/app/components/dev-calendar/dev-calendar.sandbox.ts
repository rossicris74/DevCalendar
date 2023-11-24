import {Injectable} from '@angular/core'
import {
    AppointmentsService,
    AppointmentsType,
  } from '../../api/src/lib/appointments/public-api';
  import {
    AppuntamentiService,
    AppuntamentiType,
  } from '../../api/src/lib/appuntamenti/public-api';
  import {
    RoomsService,
    RoomsType,
  } from '../../api/src/lib/rooms/public-api';
  import { Store } from '@ngrx/store';
//import * as roomsSelectors from '../../root-store/src/rooms/rooms.selectors';
//import * as RoomStoreState from '../../root-store/src/rooms/rooms.state';
import * as usersSelectors from '../../root-store/src/users/users.selectors';
import * as UsersStoreState from '../../root-store/src/users/users.state';
import * as AppuntamentiStoreState from '../../root-store/src/appuntamenti/appuntamenti.state';
import * as AppuntamentiSelectors from '../../root-store/src/appuntamenti/appuntamenti.selectors';
import * as roomsSelectors from '../../root-store/src/rooms/rooms.selectors';
import * as RoomsStoreState from '../../root-store/src/rooms/rooms.state';
import { UsersType } from 'src/app/api/src/lib/users/public-api';
@Injectable()
export class DevCalendarSandbox {
    [x: string]: any;
    // Parte mockata vecchia gestione - Inizio
    rooms$ = this.roomsService.getAllRoomsJsonDb();
    listUsers4Group$ = this.usersStore.select(usersSelectors.getUserList4Group);
    listRooms4Group$ = this.roomsStore.select(roomsSelectors.getRoomList4Group);
    appuntamenti$ = this.appuntamentiStore.select(AppuntamentiSelectors.getAllAppuntamenti);
    appointments$ = this.appointmentsService.getAppointmentsLocal();
    apps4Sched$ = this.appuntamentiStore.select(AppuntamentiSelectors.getApp4Scheduler);
    currentDate: Date = new Date(2021, 3, 21);
    rooms: RoomsType.Rooms = [];
    users: UsersType.Users = [];
    appointments: AppointmentsType.Appointments = [];
    // Parte mockata vecchia gestione - Fine

    groupByDate = true;

    constructor(
      private readonly roomsService: RoomsService,
      private readonly appointmentsService: AppointmentsService,
      private readonly usersStore: Store<UsersStoreState.State>,
      private readonly appuntamentiStore: Store<AppuntamentiStoreState.State>,
      private readonly roomsStore: Store<RoomsStoreState.State>,
    ) {
      // Parte mockata vecchia gestione - Inizio
          this.roomsService.getAllRoomsJsonDb().subscribe((rooms) => {
            this.rooms = rooms;
            console.log(this.rooms);
          });
          this.appointmentsService
            .getAppointmentsLocal()
            .subscribe((appointments) => {
              this.appointments = appointments;
              console.log(this.appointments);
            }); 
      // Parte mockata vecchia gestione - Fine
}
}