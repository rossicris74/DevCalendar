import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetAllRoomsSuccessResponse,
  getAllRoomsJsonDbEndpoint,
  getAllRoomsLocalEndpoint,
  getAllRoomsBeUrlEndpoint
} from './endpoints/get-all-rooms.endpoint';
import {
  GetRoomSuccessResponse,
  getRoomJsonDbEndpoint,
  getRoomLocalEndpoint,
} from './endpoints/get-room.endpoint';
import { RoomsType } from './public-api';

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
    return this.api.readBeUrl<GetAllRoomsSuccessResponse>(
      getAllRoomsBeUrlEndpoint()
    );
  }

  getRoomJsonDb(): Observable<RoomsType.Room> {
    return this.api.readJsonDb<GetRoomSuccessResponse>(
      getRoomJsonDbEndpoint()
    );
  }
}
