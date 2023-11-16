import { createEffect, Actions, ofType, } from "@ngrx/effects";
import * as ServiziApi from "src/app/api/src/lib/servizi/public-api";
import * as RootStoreState from '../state';
import { Action, Store } from "@ngrx/store";
import * as ServiziosActions from './servizi.actions';
import { catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiziosEffects{
    getAllServizi = createEffect(() => 
      this.actions$.pipe(
        ofType(ServiziosActions.getAllServizi),
            switchMap(() => 
              this.serviziService.getAllServizi().pipe(
                    switchMap(serviziList => 
                        of<Action>(
                            ServiziosActions.getAllServiziSuccess({serviziList}),
                    ),
                    ),
                    catchError(error =>
                      of(ServiziosActions.getAllServiziFailure({
                        msg: 'Cannot read all servizio',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    updateServizio = createEffect(() => 
      this.actions$.pipe(
        ofType(ServiziosActions.updateServizio),
            switchMap(({servizio}) => 
              this.serviziService.update(servizio.id, servizio.descrizione, servizio.durata, servizio.colore).pipe(
                    switchMap(() => 
                        of<Action>(
                            ServiziosActions.updateServizioSuccess({servizio}),
                    ),
                    ),
                    catchError(error =>
                      of(ServiziosActions.updateServizioFailure({
                        msg: 'Cannot update servizio',
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
        ofType(ServiziosActions.insertServizio),
            switchMap(({servizio}) => 
              this.serviziService.insert(servizio.descrizione, servizio.durata, servizio.colore).pipe(
                    switchMap((newServizio) => 
                        of<Action>(
                            ServiziosActions.insertServizioSuccess({servizio: newServizio}),
                    ),
                    ),
                    catchError(error =>
                      of(ServiziosActions.insertServizioFailure({
                        msg: 'Cannot update servizio',
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
      ofType(ServiziosActions.deleteServizio),
          switchMap(({id}) => 
            this.serviziService.delete(id,).pipe(
                  switchMap(() => 
                      of<Action>(
                          ServiziosActions.deleteServizioSuccess({id}),
                  ),
                  ),
                  catchError(error =>
                    of(ServiziosActions.deleteServizioFailure({
                      msg: 'Cannot delete servizio',
                      error
                    }),
                  ), 
                ),
              ),
            ),
          ),
  );
    constructor(private readonly actions$: Actions, private readonly serviziService: ServiziApi.ServiziService, private readonly store: Store<RootStoreState.State>){}
}





