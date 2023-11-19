import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TestState from './root-store/src/test/state';
import * as TestActions from './root-store/src/test/test.actions';
import * as TestSelectors from './root-store/src/test/test.selectors';
import * as RoomsState from './root-store/src/rooms/rooms.state';
import * as RoomsActions from './root-store/src/rooms/rooms.actions';
import * as ServiziState from './root-store/src/servizi/servizi.state';
import * as ServiziActions from './root-store/src/servizi/servizi.actions';
import * as UsersState from './root-store/src/users/users.state';
import * as UsersActions from './root-store/src/users/users.actions';
@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  getId$ = this.testStore.select(TestSelectors.getId);
  getDescr$ = this.testStore.select(TestSelectors.getDescr);
  constructor(private readonly testStore: Store<TestState.State>,
              private readonly roomsStore: Store<RoomsState.State>,
              private readonly serviziStore: Store<ServiziState.State>,
              private readonly usersStore: Store<UsersState.State>) {
  }

  ngOnInit() {
    this.testStore.dispatch(
      TestActions.setTest({
        id: 0,
        descr: 'Test',
      })
    );
     this.roomsStore.dispatch(
      RoomsActions.getAllRooms()
     );
     this.serviziStore.dispatch(
      ServiziActions.getAllServizi()
     );
     this.usersStore.dispatch(
      UsersActions.getAllUsers()
     );
    this.getId$.subscribe((id) => console.log('id: ' + id));
    this.getDescr$.subscribe((descr) => console.log('descr: ' + descr));
  }
}
