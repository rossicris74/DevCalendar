import { createEffect, Actions, ofType, } from "@ngrx/effects";
import * as UsersApi from "src/app/api/src/lib/users/public-api";
import * as RootStoreState from '../state';
import { Action, Store } from "@ngrx/store";
import * as UserActions from './users.actions';
import { catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersEffects{
    getAllUsers = createEffect(() => 
      this.actions$.pipe(
        ofType(UserActions.getAllUsers),
            switchMap(() => 
              this.usersServices.getAllUsers().pipe(
                    switchMap(usersList => 
                        of<Action>(
                            UserActions.getAllUsersSuccess({usersList}),
                    ),
                    ),
                    catchError(error =>
                      of(UserActions.getAllUsersFailure({
                        msg: 'Cannot read all user',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    updateUser = createEffect(() => 
      this.actions$.pipe(
        ofType(UserActions.updateUser),
            switchMap(({updUser}) => 
              this.usersServices.update(updUser).pipe(
                    switchMap(() => 
                        of<Action>(
                            UserActions.updateUserSuccess({updUser}),
                    ),
                    ),
                    catchError(error =>
                      of(UserActions.updateUserFailure({
                        msg: 'Cannot update user',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );
    
    insertServizio = createEffect(() => 
      this.actions$.pipe(
        ofType(UserActions.insertUser),
            switchMap(({insUser}) => 
              this.usersServices.insert(insUser).pipe(
                    switchMap((newUser) => 
                        of<Action>(
                            UserActions.insertUserSuccess({insUser: newUser}),
                    ),
                    ),
                    catchError(error =>
                      of(UserActions.insertUserFailure({
                        msg: 'Cannot update user',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    deleteServizio = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
          switchMap(({id}) => 
            this.usersServices.delete(id,).pipe(
                  switchMap(() => 
                      of<Action>(
                          UserActions.deleteUserSuccess({id}),
                  ),
                  ),
                  catchError(error =>
                    of(UserActions.deleteUserFailure({
                      msg: 'Cannot delete User',
                      error
                    }),
                  ), 
                ),
              ),
            ),
          ),
  );
    constructor(private readonly actions$: Actions, private readonly usersServices: UsersApi.UsersServices, private readonly store: Store<RootStoreState.State>){}
  }
