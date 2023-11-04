import { createEffect, Actions, ofType, } from "@ngrx/effects";
import * as RoomsApi from "src/app/api/src/lib/rooms/public-api";
import * as RootStoreState from '../state';
import { Action, Store } from "@ngrx/store";
import * as RoomsActions from './rooms.actions';
import { catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class RoomsEffects{
    getAllRooms = createEffect(() => 
      this.actions$.pipe(
        ofType(RoomsActions.getAllRooms),
            switchMap(() => 
              this.roomsService.getAllRoomsBeUrl().pipe(
                    switchMap(roomList => 
                        of<Action>(
                            RoomsActions.getAllRoomsSuccess({roomList}),
                    ),
                    ),
                    catchError(error =>
                      of(RoomsActions.getAllRoomsFailure({
                        msg: 'Cannot read all rooms',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    updateRoom = createEffect(() => 
      this.actions$.pipe(
        ofType(RoomsActions.updateRoom),
            switchMap(({room}) => 
              this.roomsService.update(room.id,room.text).pipe(
                    switchMap(() => 
                        of<Action>(
                            RoomsActions.updateRoomSuccess({room}),
                    ),
                    ),
                    catchError(error =>
                      of(RoomsActions.updateRoomFailure({
                        msg: 'Cannot update room',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );
    
    insertRoom = createEffect(() => 
      this.actions$.pipe(
        ofType(RoomsActions.insertRoom),
            switchMap(({room}) => 
              this.roomsService.insert(room.text).pipe(
                    switchMap((newRoom) => 
                        of<Action>(
                            RoomsActions.insertRoomSuccess({room: newRoom}),
                    ),
                    ),
                    catchError(error =>
                      of(RoomsActions.insertRoomFailure({
                        msg: 'Cannot update room',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );
    constructor(private readonly actions$: Actions, private readonly roomsService: RoomsApi.RoomsService, private readonly store: Store<RootStoreState.State>){}
}





