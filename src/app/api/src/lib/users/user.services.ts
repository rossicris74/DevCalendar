import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';

import {
  GetAllUsersSuccessResponse,
  getAllUsersEndpoint
} from './endpoints/get-users.endpoint';

import {
  UpdateUserSuccessResponse,
  updateUserEndpoint,
  UpdateUserBody
} from './endpoints/update-user.endpoint'
import {
  CreateUserSuccessResponse,
  createUserEndpoint,
  CreateUserBody
} from './endpoints/create-user.endpoint';
import {
  DeleteUserSuccessResponse,
  deleteUserEndpoint
} from './endpoints/delete-user.endpoint';
import * as UsersType from './user.type';
import * as UsersHelper from './helpers/get-users.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersServices {
  constructor(private readonly api: ApiService, private http: HttpClient) {}

  getAllUsers(): Observable<UsersType.Users> {
    return this.api.readBeUrl<GetAllUsersSuccessResponse>(
      getAllUsersEndpoint()
    ).pipe(map(UsersHelper.fromApiToClient));
  }

  update (user: UsersType.User):Observable<any> {
     return this.api.update<UpdateUserSuccessResponse, UpdateUserBody>(updateUserEndpoint(user.id),user)
  }

  insert(user: UsersType.User):Observable<any> {
     return this.api.create<CreateUserSuccessResponse, CreateUserBody>(createUserEndpoint(),user)
  }

  delete(id: number):Observable<any> {
     return this.api.delete<DeleteUserSuccessResponse>(deleteUserEndpoint(id))
  }
}
