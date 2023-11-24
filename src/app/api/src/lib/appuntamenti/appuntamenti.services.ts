import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';

import {
  GetAllAppuntamentiSuccessResponse,
  getAllAppuntamentiEndpoint,
  getAllAppuntamentiLocalEndpoint
} from './endpoints/get-appuntamenti.endpoint';

import {
  UpdateAppuntamentoSuccessResponse,
  updateAppuntamentoEndpoint,
  UpdateAppuntamentoBody
} from './endpoints/update-appuntamento.endpoint';
import {
  CreateAppuntamentoSuccessResponse,
  createAppuntamentoEndpoint,
  CreateAppuntamentoBody
} from './endpoints/create-appuntamento.endpoint';
import {
  DeleteAppuntamentoSuccessResponse,
  deleteAppuntamentoEndpoint
} from './endpoints/delete-appuntamento.endpoint';
import * as AppuntamentiType from './appuntamenti.type';
import * as AppuntamentiHelper from './helpers/get-appuntamenti.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppuntamentiService {
  constructor(private readonly api: ApiService, private http: HttpClient) {}

  getAllAppuntamenti(): Observable<AppuntamentiType.Appuntamenti> {
    return this.api.readBeUrl<GetAllAppuntamentiSuccessResponse>(
      getAllAppuntamentiEndpoint()
    ).pipe(map(AppuntamentiHelper.fromApiToClient));
  }

  getAllAppLocal(): Observable<AppuntamentiType.Appuntamenti> {
    return this.api.readLocal<GetAllAppuntamentiSuccessResponse>(
      getAllAppuntamentiLocalEndpoint()
    ).pipe(map(AppuntamentiHelper.fromApiToClient));
  }

  update (appuntamento: AppuntamentiType.Appuntamento):Observable<any> {
     return this.api.update<UpdateAppuntamentoSuccessResponse, UpdateAppuntamentoBody>(updateAppuntamentoEndpoint(appuntamento.id),appuntamento)
  }

  insert(appuntamento: AppuntamentiType.Appuntamento ):Observable<any> {
     return this.api.create<CreateAppuntamentoSuccessResponse, CreateAppuntamentoBody>(createAppuntamentoEndpoint(),appuntamento)
  }

  delete(id: number):Observable<any> {
     return this.api.delete<DeleteAppuntamentoSuccessResponse>(deleteAppuntamentoEndpoint(id))
  }
}
