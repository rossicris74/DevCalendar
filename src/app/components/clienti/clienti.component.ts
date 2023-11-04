import { Component, Injectable} from '@angular/core';
import * as ClientiApi from '../../api/src/lib/clienti/public-api';

@Component({
  selector: 'clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
})
@Injectable({providedIn: 'root'})
export class ClientiComponent {
  dataSource: ClientiApi.ClientiType.Clienti = [];
  
  constructor(
    readonly clientiApiService: ClientiApi.ClientiService
    ) {
    clientiApiService.getAllClienti().subscribe(clienti => 
      {
      this.dataSource = clienti});
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
  this.clientiApiService.insert(cliente).subscribe();
 }

 rowUpdated(cliente: ClientiApi.ClientiType.Cliente){
  this.clientiApiService.update(cliente).subscribe();
 }
}
