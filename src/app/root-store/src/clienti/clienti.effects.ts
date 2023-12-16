import { createEffect, Actions, ofType, } from "@ngrx/effects";
import * as ClientiApi from "src/app/api/src/lib/clienti/public-api";
import { Action, Store } from "@ngrx/store";
import * as ClientiActions from './clienti.actions';
import { catchError, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ClientiEffects{
    getAllClienti = createEffect(() => 
      this.actions$.pipe(
        ofType(ClientiActions.getAllClienti),
            switchMap(() => 
              this.clientiService.getAllClienti().pipe(
                    switchMap(clientiList => 
                        of<Action>(
                            ClientiActions.getAllClientiSuccess({clientiList}),
                    ),
                    ),
                    catchError(error =>
                      of(ClientiActions.getAllClientiFailure({
                        msg: 'Cannot read all clienti',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    updateCliente = createEffect(() => 
      this.actions$.pipe(
        ofType(ClientiActions.updateCliente),
            switchMap(({cliente}) => 
              this.clientiService.update(cliente).pipe(
                    switchMap(() => 
                        of<Action>(
                            ClientiActions.updateClienteSuccess({cliente}),
                    ),
                    ),
                    catchError(error =>
                      of(ClientiActions.updateClienteFailure({
                        msg: 'Cannot update cliente',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );
    
    insertCliente = createEffect(() => 
      this.actions$.pipe(
        ofType(ClientiActions.insertCliente),
            switchMap(({cliente}) => 
              this.clientiService.insert(cliente).pipe(
                    switchMap((updCliente) => 
                        of<Action>(
                            ClientiActions.insertClienteSuccess({cliente: updCliente}),
                    ),
                    ),
                    catchError(error =>
                      of(ClientiActions.insertClienteFailure({
                        msg: 'Cannot update cliente',
                        error
                      }),
                    ), 
                  ),
                ),
              ),
            ),
    );

    deleteCliente = createEffect(() => 
    this.actions$.pipe(
      ofType(ClientiActions.deleteCliente),
          switchMap(({id}) => 
            this.clientiService.delete(id).pipe(
                  switchMap(() => 
                      of<Action>(
                          ClientiActions.deleteClienteSuccess({id}),
                  ),
                  ),
                  catchError(error =>
                    of(ClientiActions.deleteClienteFailure({
                      msg: 'Cannot delete cliente',
                      error
                    }),
                  ), 
                ),
              ),
            ),
          ),
  );
    constructor(private readonly actions$: Actions, private readonly clientiService: ClientiApi.ClientiService){}
}





