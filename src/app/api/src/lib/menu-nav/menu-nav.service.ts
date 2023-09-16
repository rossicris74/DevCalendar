import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetMenuNavSuccessResponse,
  getMenuNavJsonDbEndpoint,
  getMenuNavLocalEndpoint,
} from './endpoints/get-menu-nav.endpoint';
import { MenuNavType } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class MenuNavService {
  constructor(private readonly api: ApiService) {}

  getMenuNavLocal(): Observable<MenuNavType.MenuNav> {
    return this.api.readLocal<GetMenuNavSuccessResponse>(
      getMenuNavLocalEndpoint()
    );
  }
  getMenuNavJsonDb(): Observable<MenuNavType.MenuNav> {
    return this.api.readJsonDb<GetMenuNavSuccessResponse>(
      getMenuNavJsonDbEndpoint()
    );
  }
}
