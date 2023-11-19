import { Component, Injectable} from '@angular/core';
import * as UsersApi from '../../api/src/lib/users/public-api';
import * as RoomStoreState from '../../root-store/src/rooms/rooms.state';
import { Store } from '@ngrx/store';
import * as usersSelectors from '../../root-store/src/users/users.selectors';
import * as usersActions from '../../root-store/src/users/users.actions';
import * as Copy from '../../utils/deep-copy';
@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
@Injectable({providedIn: 'root'})
export class UsersComponent {
  dataSource: UsersApi.UsersType.Users = [];
  usersList$ = this.store.select(usersSelectors.getUsersList);
  
  constructor(
    private readonly store: Store<RoomStoreState.State>,
    ) {
   // usersApiService.getAllUsers().subscribe(users => 
     // {
      //this.dataSource = users});
      this.usersList$.subscribe(usersList => this.dataSource = Copy.deepCopy(usersList))
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
  this.store.dispatch(usersActions.deleteUser({id}));
 }

 rowInserted(user: UsersApi.UsersType.User){
  this.store.dispatch(usersActions.insertUser({insUser: user}));
 }

 rowUpdated(user: UsersApi.UsersType.User){
  this.store.dispatch(usersActions.updateUser({updUser: user}));
 }
}
