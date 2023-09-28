import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetAllRoomsSuccessResponse,
  getAllRoomsBeUrlEndpoint
} from './endpoints/test-be-url.endpoint';
import { RoomsType } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private readonly api: ApiService) {}
  getAllRoomsJsonDb(): Observable<RoomsType.Rooms> {
    return this.api.readBeUrl<GetAllRoomsSuccessResponse>(
      getAllRoomsBeUrlEndpoint()
    );
  }


}
