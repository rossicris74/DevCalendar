import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';

import {
  GetAllClientiSuccessResponse,
  getAllClientiEndpoint
} from './endpoints/get-clienti.endpoint';

import {
  UpdateClienteSuccessResponse,
  updateClienteEndpoint,
  UpdateClienteBody
} from './endpoints/update-cliente.endpoint';
import {
  CreateClienteSuccessResponse,
  createClienteEndpoint,
  CreateClienteBody
} from './endpoints/create-cliente.endpoint';
import {
  DeleteClienteSuccessResponse,
  deleteClienteEndpoint
} from './endpoints/delete-cliente.endpoint';
import * as ClientiType from './clienti.type';
import * as ClientiHelper from './helpers/get-clienti.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  constructor(private readonly api: ApiService, private http: HttpClient) {}

  getAllClienti(): Observable<ClientiType.Clienti> {
    return this.api.readBeUrl<GetAllClientiSuccessResponse>(
      getAllClientiEndpoint()
    ).pipe(map(ClientiHelper.fromApiToClient));
  }

  update (cliente: ClientiType.Cliente):Observable<any> {
     return this.api.update<UpdateClienteSuccessResponse, UpdateClienteBody>(updateClienteEndpoint(cliente.id),ClientiHelper.fromClientToApi(cliente))  
  }

  insert(cliente: ClientiType.Cliente):Observable<any> {
     return this.api.create<CreateClienteSuccessResponse, CreateClienteBody>(createClienteEndpoint(),ClientiHelper.fromClientToApi(cliente))
  }

  delete(id: number):Observable<any> {
     return this.api.delete<DeleteClienteSuccessResponse>(deleteClienteEndpoint(id))
  }
}
