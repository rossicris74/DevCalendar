import { createAction, props } from '@ngrx/store';
import { ServiziType } from 'src/app/api/src/lib/servizi/public-api';
// Lettura di tutte le servizi da db - Inizio
export const getAllServizi = createAction(
  '[Servizi API ] Read all servizi',
);

export const getAllServiziSuccess = createAction(
  '[Servizi API ] Read all servizi success', props<{serviziList: ServiziType.Servizi}>(),
)

export const getAllServiziFailure = createAction(
  '[Servizi API ] Read all servizi failure', props<{msg: string, error: any}>(),
)
// Lettura di tutte le servizi da db - Fine

// Aggiornamento di una stanza - Inizio
export const updateServizio = createAction(
  '[Servizi API ] Update servizio', props<{servizio: ServiziType.Servizio}>(),
);

export const updateServizioSuccess = createAction(
  '[Servizi API ] Update servizio success', props<{servizio: ServiziType.Servizio}>(),
)

export const updateServizioFailure = createAction(
  '[Servizi API ] Update servizio failure', props<{msg: string, error: any}>(),
)
// Aggiornamento di una stanza - Fine

// Inserimento di una stanza - Inizio
export const insertServizio = createAction(
  '[Servizi API ] Insert servizio', props<{servizio: ServiziType.Servizio}>(),
);

export const insertServizioSuccess = createAction(
  '[Servizi API ] Insert servizio success', props<{servizio: ServiziType.ServizioApi}>(),
)

export const insertServizioFailure = createAction(
  '[Servizi API ] Insert servizio failure', props<{msg: string, error: any}>(),
)
// Inserimento di una stanza - Fine

// Cancellazione di una stanza - Inizio
export const deleteServizio = createAction(
  '[Servizi API ] Delete servizio', props<{id: number}>(),
);

export const deleteServizioSuccess = createAction(
  '[Servizi API ] Delete servizio success', props<{id:number}>(),
)

export const deleteServizioFailure = createAction(
  '[Servizi API ] Delete servizio failure', props<{msg: string, error: any}>(),
)
// Cancellazione di una stanza - Fine
