import {Injectable} from '@angular/core'
import { Store } from '@ngrx/store';
import * as UsersStoreState from '../../root-store/src/users/users.state';
import * as usersSelectors from '../../root-store/src/users/users.selectors';
import * as ClientiStoreState from '../../root-store/src/clienti/clienti.state';
import * as clientiSelectors from '../../root-store/src/clienti/clienti.selectors';
import * as ServiziStoreState from '../../root-store/src/servizi/servizi.state';
import * as serviziSelectors from '../../root-store/src/servizi/servizi.selectors';
import * as AppuntamentiStoreState from '../../root-store/src/appuntamenti/appuntamenti.state';
import * as appuntamentiSelectors from '../../root-store/src/appuntamenti/appuntamenti.selectors';
import * as AppuntamentiActions from '../../root-store/src/appuntamenti/appuntamenti.actions';
import * as RoomsStoreState from '../../root-store/src/rooms/rooms.state';
import * as roomsSelectors from '../../root-store/src/rooms/rooms.selectors';
import * as AppuntamentiType from '../../api/src/lib/appuntamenti/appuntamenti.type'

@Injectable()
export class DevCalendarSandbox {
    [x: string]: any;
    listUsers4Group$ = this.usersStore.select(usersSelectors.getUserList4Group);
    listRooms4Group$ = this.roomsStore.select(roomsSelectors.getRoomList4Group);
    listServizi4Group$ = this.serviziStore.select(serviziSelectors.getServiziList4Group);
    listClienti4Group$ = this.clientiStore.select(clientiSelectors.getClientiList4Group);
    apps4Sched$ = this.appuntamentiStore.select(appuntamentiSelectors.getApp4Scheduler);
    currentDate: Date = new Date(2021, 3, 27);
    groupByDate = true;

    constructor(
      private readonly usersStore: Store<UsersStoreState.State>,
      private readonly serviziStore: Store<ServiziStoreState.State>,
      private readonly appuntamentiStore: Store<AppuntamentiStoreState.State>,
      private readonly roomsStore: Store<RoomsStoreState.State>,
      private readonly clientiStore: Store<ClientiStoreState.State>,
    ) {}

    updateAppointment(app4Scheduler: AppuntamentiType.App4Scheduler){
      this.appuntamentiStore.dispatch(
        AppuntamentiActions.updateAppuntamento({app4Scheduler})
       );
    }
}