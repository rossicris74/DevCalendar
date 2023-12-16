import { Component} from '@angular/core';
import { DevCalendarSandbox } from './dev-calendar.sandbox';
import * as RoomsType from 'src/app/api/src/lib/rooms/rooms.type';
import { ListUsers4Group } from 'src/app/api/src/lib/users/user.type';
import * as ServiziType from 'src/app/api/src/lib/servizi/servizio.type';
import {getEndDate} from 'src/app/api/src/lib/appuntamenti/helpers/appuntamenti.helper';
import Query from 'devextreme/data/query';
import { ListClienti4Group } from 'src/app/api/src/lib/clienti/clienti.type';

@Component({
  selector: 'dev-calendar',
  templateUrl: './dev-calendar.component.html',
  styleUrls: ['./dev-calendar.component.css'],
  providers: [DevCalendarSandbox],
})

export class DevCalendarComponent {
  constructor(
    readonly devCalendarSandbox: DevCalendarSandbox
  ) {}

    onAppointmentFormOpening(data: any, 
                             listRooms4Group: RoomsType.ListRooms4Group, 
                             listUser4Group: ListUsers4Group, 
                             listClienti4Group: ListClienti4Group | null, 
                             listServizi4Group: ServiziType.ListServizi4Group | null) {
    const that = this;
    const form = data.form;
    let startDate = data.appointmentData.startDate;
    let servId = data.appointmentData.servId;
    let note = data.appointmentData.text;
    if (!data.appointmentData.cliId) {form.updateData('cliId', 1);};
    
    data.popup.option("toolbarItems[0].options.text", "Salva");
    data.popup.option("toolbarItems[1].options.text", "Esci");
    form.option('items', [
      {
        label: {
          text: 'Descrizione',
        },
        name: 'note',
        editorType: 'dxTextBox',
        editorOptions: {
          value: note,
          readOnly: false,
          onValueChanged(args: any) {
            note = args.value ? args.value : "";
            form.updateData('note', note);
          },
        },
      },
      {
        label: {
          text: 'Cliente',
        },
        editorType: 'dxSelectBox',
        dataField: 'cliId',
        editorOptions: {
          items: listClienti4Group,
          displayExpr: 'text',
          valueExpr: 'id',
        },
      },
      {
        label: {
          text: 'Utente',
        },
        editorType: 'dxSelectBox',
        dataField: 'userId',
        editorOptions: {
          items: listUser4Group,
          displayExpr: 'text',
          valueExpr: 'id'
        },
      },
      {
        dataField: 'startDate',
        editorType: 'dxDateBox',
        editorOptions: {
          width: '100%',
          type: 'datetime',
          onValueChanged(args: any) {
            startDate = args.value;
            form.updateData('endDate', getEndDate(startDate, that.getDurataById(listServizi4Group,servId)));
          },
        },
      },
      {
        label: {
          text: 'Servizio',
        },
        editorType: 'dxSelectBox',
        dataField: 'servId',
        editorOptions: {
          items: listServizi4Group,
          displayExpr: 'text',
          valueExpr: 'id',
          onValueChanged(args: any) {
            servId = args.value;
            form.updateData('endDate', getEndDate(startDate, that.getDurataById(listServizi4Group,servId)));
          },
        },
      },
      {
        dataField: 'endDate',
        editorType: 'dxDateBox',
        editorOptions: {
          displayFormat: 'dd/MM/yyyy hh:mm',
          width: '100%',
          type: 'datetime',
          readOnly: true
        },
      },
      {
        label: {
          text: 'Stanza',
        },
        editorType: 'dxSelectBox',
        dataField: 'roomId',
        editorOptions: {
          items: listRooms4Group,
          displayExpr: 'text',
          valueExpr: 'id'
        },
      },
    ]);

  }

  getDurataById(listServizi4Group : ServiziType.ListServizi4Group | null, servizioId: number):number {
    let servizio: ServiziType.Servizio = {id:0,descrizione:'',durata:0,colore:''};
    if (listServizi4Group && listServizi4Group !== null && listServizi4Group.length > 0)
     {servizio = Query(listServizi4Group).filter(['id', '=', servizioId]).toArray()[0];}
    return servizio && servizio.durata && servizio.durata !== 0 ? servizio.durata : 0;
  }

  onAppointmentUpdated(data:any){
    this.devCalendarSandbox.updateAppointment(data.appointmentData);
  }
  
  onAppointmentAdded(data:any){
    this.devCalendarSandbox.insertAppointment(data.appointmentData);
  }

  onAppointmentDeleted(data:any){
    this.devCalendarSandbox.deleteAppointment(data.appointmentData.id);
  }
}