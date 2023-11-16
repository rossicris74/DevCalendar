import { Component, Injectable} from '@angular/core';
import * as ServiziApi from '../../api/src/lib/servizi/public-api';
import * as RoomStoreState from '../../root-store/src/rooms/rooms.state';
import { Store } from '@ngrx/store';
import * as serviziSelectors from '../../root-store/src/servizi/servizi.selectors';
import * as serviziActions from '../../root-store/src/servizi/servizi.actions';
import * as Copy from '../../utils/deep-copy';
@Component({
  selector: 'servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css'],
})
@Injectable({providedIn: 'root'})
export class ServiziComponent {
  dataSource: ServiziApi.ServiziType.Servizi = [];
  serviziList$ = this.store.select(serviziSelectors.getServiziList);
  
  constructor(
    private readonly store: Store<RoomStoreState.State>,
    ) {
   // serviziApiService.getAllServizi().subscribe(servizi => 
     // {
      //this.dataSource = servizi});
      this.serviziList$.subscribe(serviziList => this.dataSource = Copy.deepCopy(serviziList))
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
  this.store.dispatch(serviziActions.deleteServizio({id}));
 }

 rowInserted(servizio: ServiziApi.ServiziType.Servizio){
  this.store.dispatch(serviziActions.insertServizio({servizio}));
 }

 rowUpdated(servizio: ServiziApi.ServiziType.Servizio){
  this.store.dispatch(serviziActions.updateServizio({servizio}));
 }
}
