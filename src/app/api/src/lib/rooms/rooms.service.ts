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
  getRoomLocalEndpoint,
} from './endpoints/get-room.endpoint';
import * as RoomsType from './rooms.type';
import * as RoomsHelper from './helpers/get-all-rooms-be.helper';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private readonly api: ApiService) {}

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
}
