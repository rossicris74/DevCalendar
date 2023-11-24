import { createEffect, Actions, ofType, } from "@ngrx/effects";
import * as AppuntamentiApi from "src/app/api/src/lib/appuntamenti/public-api";
import * as AppuntamentiStoreState from '../state';
import { Action, Store } from "@ngrx/store";
import * as AppuntamentiActions from './appuntamenti.actions';
import { catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AppuntamentiEffects{
    getAllAppuntamenti = createEffect(() => 
      this.actions$.pipe(
        ofType(AppuntamentiActions.getAllAppuntamenti),
            switchMap(() => 
              this.appuntamentiService.getAllAppLocal().pipe(
                    switchMap(appuntamenti => 
                        of<Action>(
                            AppuntamentiActions.getAllAppuntamentiSuccess({appuntamenti}),
                    ),
                    ),
                    catchError(error =>
                      of(AppuntamentiActions.getAllAppuntamentiFailure({
                        msg: 'Cannot read all appuntamenti',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    updateAppuntamento = createEffect(() => 
      this.actions$.pipe(
        ofType(AppuntamentiActions.updateAppuntamento),
            switchMap(({appuntamento}) => 
              this.appuntamentiService.update(appuntamento).pipe(
                    switchMap(() => 
                        of<Action>(
                            AppuntamentiActions.updateAppuntamentoSuccess({updAppuntamento: appuntamento}),
                    ),
                    ),
                    catchError(error =>
                      of(AppuntamentiActions.updateAppuntamentoFailure({
                        msg: 'Cannot update appuntamento',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );
    
    insertAppuntamento = createEffect(() => 
      this.actions$.pipe(
        ofType(AppuntamentiActions.insertAppuntamento),
            switchMap(({appuntamento}) => 
              this.appuntamentiService.insert(appuntamento).pipe(
                    switchMap((newAppuntamento) => 
                        of<Action>(
                            AppuntamentiActions.insertAppuntamentoSuccess({appuntamento: newAppuntamento}),
                    ),
                    ),
                    catchError(error =>
                      of(AppuntamentiActions.insertAppuntamentoFailure({
                        msg: 'Cannot update appuntamento',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    deleteAppuntamento = createEffect(() => 
    this.actions$.pipe(
      ofType(AppuntamentiActions.deleteAppuntamento),
          switchMap(({id}) => 
            this.appuntamentiService.delete(id,).pipe(
                  switchMap(() => 
                      of<Action>(
                          AppuntamentiActions.deleteAppuntamentoSuccess({id}),
                  ),
                  ),
                  catchError(error =>
                    of(AppuntamentiActions.deleteAppuntamentoFailure({
                      msg: 'Cannot delete apuntamento',
                      error
                    }),
                  ), 
                ),
              ),
            ),
          ),
  );
    constructor(private readonly actions$: Actions, private readonly appuntamentiService: AppuntamentiApi.AppuntamentiService, private readonly store: Store<AppuntamentiStoreState.State>){}
}