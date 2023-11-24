import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetAllRoomsSuccessResponse,
  getAllRoomsJsonDbEndpoint,
  getAllRoomsLocalEndpoint,
} from './endpoints/get-all-rooms.endpoint';
import {
  GetAllRoomsBeSuccessResponse,
  getAllRoomsBeUrlEndpoint
} from './endpoints/get-all-rooms-be.endpoint';
import {
  GetRoomSuccessResponse,
  getRoomJsonDbEndpoint,
} from './endpoints/get-room.endpoint';
import {
  UpdateRoomSuccessResponse,
  updateRoomEndpoint,
  UpdateRoomBody
} from './endpoints/update-room.endpoint';
import {
  CreateRoomSuccessResponse,
  createRoomEndpoint,
  CreateRoomBody
} from './endpoints/create-room.endpoint';
import {
  DeleteRoomSuccessResponse,
  deleteRoomEndpoint
} from './endpoints/delete-room.endpoint';
import * as RoomsType from './rooms.type';
import * as RoomsHelper from './helpers/get-all-rooms-be.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private readonly api: ApiService, private http: HttpClient) {}


  getAllRoomsLocal(): Observable<RoomsType.Rooms> {
    return this.api.readLocal<GetAllRoomsSuccessResponse>(getAllRoomsLocalEndpoint());
  }

  getAllRoomsJsonDb(): Observable<RoomsType.Rooms> {
    return this.api.readJsonDb<GetAllRoomsSuccessResponse>(
      getAllRoomsJsonDbEndpoint()
    );
  }

  getAllRoomsBeUrl(): Observable<RoomsType.Rooms> {
    return this.api.readBeUrl<GetAllRoomsBeSuccessResponse>(
      getAllRoomsBeUrlEndpoint()
    ).pipe(map(RoomsHelper.fromApiToClient));
  }

  getRoomJsonDb(): Observable<RoomsType.Room> {
    return this.api.readJsonDb<GetRoomSuccessResponse>(
      getRoomJsonDbEndpoint()
    );
  }

  update (id:number, descrizione:string):Observable<any> {
     return this.api.update<UpdateRoomSuccessResponse, UpdateRoomBody>(updateRoomEndpoint(id),{"descrizione":descrizione})
  }

  insert(descrizione:string ):Observable<any> {
     return this.api.create<CreateRoomSuccessResponse, CreateRoomBody>(createRoomEndpoint(),{"descrizione":descrizione})
  }

  delete(id: number):Observable<any> {
     return this.api.delete<DeleteRoomSuccessResponse>(deleteRoomEndpoint(id))
  }
}
