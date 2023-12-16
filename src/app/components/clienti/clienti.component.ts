import { Component, Injectable, OnInit} from '@angular/core';
import * as ClientiApi from '../../api/src/lib/clienti/public-api';
import { Store } from '@ngrx/store';
import * as ClientiStoreState from '../../root-store/src/clienti/clienti.state';
import * as ClientiActions from '../../root-store/src/clienti/clienti.actions';
import * as clientiSelectors from '../../root-store/src/clienti/clienti.selectors';
import * as Copy from '../../utils/deep-copy';
@Component({
  selector: 'clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
})
@Injectable({providedIn: 'root'})
export class ClientiComponent implements OnInit{
  dataSource: ClientiApi.ClientiType.Clienti = [];
  
  constructor(
    readonly clientiApiService: ClientiApi.ClientiService,
    private readonly clientiStore: Store<ClientiStoreState.State>,
    ) {
 }
 
  ngOnInit(): void {
    this.clientiStore.select(clientiSelectors.getClientiList).subscribe(clientiList => this.dataSource = Copy.deepCopy(clientiList))
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
  this.clientiApiService.delete(id).subscribe();
 }

 rowInserted(cliente: ClientiApi.ClientiType.Cliente){
    this.clientiStore.dispatch(
      ClientiActions.insertCliente({cliente})
     );
  }

 rowUpdated(cliente: ClientiApi.ClientiType.Cliente){
  this.clientiApiService.update(cliente).subscribe();
 }
}
