import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';

import {
  GetAllServiziSuccessResponse,
  getAllServiziEndpoint
} from './endpoints/get-servizi.endpoint';

import {
  UpdateServizioSuccessResponse,
  updateServizioEndpoint,
  UpdateServizioBody
} from './endpoints/update-servizio.endpoint';
import {
  CreateServizioSuccessResponse,
  createServizioEndpoint,
  CreateServizioBody
} from './endpoints/create-servizio.endpoint';
import {
  DeleteServizioSuccessResponse,
  deleteServizioEndpoint
} from './endpoints/delete-servizio.endpoint';
import * as ServiziType from './servizio.type';
import * as ServiziHelper from './helpers/get-servizi.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiziService {
  constructor(private readonly api: ApiService, private http: HttpClient) {}

  getAllServizi(): Observable<ServiziType.Servizi> {
    return this.api.readBeUrl<GetAllServiziSuccessResponse>(
      getAllServiziEndpoint()
    ).pipe(map(ServiziHelper.fromApiToClient));
  }

  update (id:number, descrizione:string,durata:number, colore:string):Observable<any> {
     return this.api.update<UpdateServizioSuccessResponse, UpdateServizioBody>(updateServizioEndpoint(id),{"descrizione":descrizione,"durata":durata,"colore":colore})
  }

  insert(descrizione:string,durata:number, colore:string  ):Observable<any> {
     return this.api.create<CreateServizioSuccessResponse, CreateServizioBody>(createServizioEndpoint(),{"descrizione":descrizione,"durata":durata,"colore":colore})
  }

  delete(id: number):Observable<any> {
     return this.api.delete<DeleteServizioSuccessResponse>(deleteServizioEndpoint(id))
  }
}
