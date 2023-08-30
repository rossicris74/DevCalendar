import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetRoomsSuccessResponse,
  getRoomsJsonDbEndpoint,
  getRoomsLocalEndpoint,
} from './endpoints/rooms.endpoint';
import { RoomsType } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private readonly api: ApiService) {}

  getRoomsLocal(): Observable<RoomsType.Rooms> {
    return this.api.readLocal<GetRoomsSuccessResponse>(getRoomsLocalEndpoint());
  }
  getRoomsJsonDb(): Observable<RoomsType.Rooms> {
    return this.api.readJsonDb<GetRoomsSuccessResponse>(
      getRoomsJsonDbEndpoint()
    );
  }
}
