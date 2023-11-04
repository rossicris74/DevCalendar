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
        ofType(RoomsActions.getAllRoms),
    switchMap(() => 
       this.roomsService.getAllRoomsBeUrl().pipe(
            switchMap(roomsList => 
                of<Action>(
                    RoomsActions.getAllRoomsSuccess({roomsList}),
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
    ) ,
    );
    
    constructor(private readonly actions$: Actions, private readonly roomsService: RoomsApi.RoomsService, private readonly store: Store<RootStoreState.State>){}
}





