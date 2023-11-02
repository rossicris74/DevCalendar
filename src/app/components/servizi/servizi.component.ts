import { Component, Injectable} from '@angular/core';
import * as ServiziApi from '../../api/src/lib/servizi/public-api';

@Component({
  selector: 'servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css'],
})
@Injectable({providedIn: 'root'})
export class ServiziComponent {
  dataSource: ServiziApi.ServiziType.Servizi = [];
  
  constructor(
    readonly serviziApiService: ServiziApi.ServiziService
    ) {
    serviziApiService.getAllServizi().subscribe(servizi => 
      {
      this.dataSource = servizi});
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
  this.serviziApiService.delete(id).subscribe();
 }

 rowInserted(servizio: ServiziApi.ServiziType.Servizio){
  this.serviziApiService.insert(servizio.descrizione,servizio.durata,servizio.colore).subscribe();
 }

 rowUpdated(servizio: ServiziApi.ServiziType.Servizio){
  this.serviziApiService.update(servizio.id, servizio.descrizione, servizio.durata, servizio.colore).subscribe();
 }
}
