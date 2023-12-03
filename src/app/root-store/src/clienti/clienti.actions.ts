import { createAction, props } from '@ngrx/store';
import { ClientiType } from 'src/app/api/src/lib/clienti/public-api';
// Lettura di tutte le clienti da db - Inizio
export const getAllClienti = createAction(
  '[Clienti API ] Read all clienti',
);

export const getAllClientiSuccess = createAction(
  '[Clienti API ] Read all clienti success', props<{clientiList: ClientiType.Clienti}>(),
)

export const getAllClientiFailure = createAction(
  '[Clienti API ] Read all clienti failure', props<{msg: string, error: any}>(),
)
// Lettura di tutte le clienti da db - Fine

// Aggiornamento di un cliente - Inizio
export const updateCliente = createAction(
  '[Clienti API ] Update cliente', props<{cliente: ClientiType.Cliente}>(),
);

export const updateClienteSuccess = createAction(
  '[Clienti API ] Update cliente success', props<{cliente: ClientiType.Cliente}>(),
)

export const updateClienteFailure = createAction(
  '[Clienti API ] Update cliente failure', props<{msg: string, error: any}>(),
)
// Aggiornamento di un cliente - Fine

// Inserimento di un cliente - Inizio
export const insertCliente = createAction(
  '[Clienti API ] Insert cliente', props<{cliente: ClientiType.Cliente}>(),
);

export const insertClienteSuccess = createAction(
  '[Clienti API ] Insert cliente success', props<{cliente: ClientiType.Cliente}>(),
)

export const insertClienteFailure = createAction(
  '[Clienti API ] Insert cliente failure', props<{msg: string, error: any}>(),
)
// Inserimento di un cliente - Fine

// Cancellazione di un cliente - Inizio
export const deleteCliente = createAction(
  '[Clienti API ] Delete cliente', props<{id: number}>(),
);

export const deleteClienteSuccess = createAction(
  '[Clienti API ] Delete cliente success', props<{id:number}>(),
)

export const deleteClienteFailure = createAction(
  '[Clienti API ] Delete cliente failure', props<{msg: string, error: any}>(),
)
// Cancellazione di un client - Fine
