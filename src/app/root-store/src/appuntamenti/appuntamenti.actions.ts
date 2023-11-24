import { createAction, props } from '@ngrx/store';
import { AppuntamentiType } from 'src/app/api/src/lib/appuntamenti/public-api';
// Lettura di tutte le appuntamenti da db - Inizio
export const getAllAppuntamenti = createAction(
  '[Appuntamenti API ] Read all appuntamenti',
);

export const getAllAppuntamentiSuccess = createAction(
  '[Appuntamenti API ] Read all appuntamenti success', props<{appuntamenti: AppuntamentiType.Appuntamenti}>(),
)

export const getAllAppuntamentiFailure = createAction(
  '[Appuntamenti API ] Read all appuntamenti failure', props<{msg: string, error: any}>(),
)
// Lettura di tutte le appuntamenti da db - Fine

// Aggiornamento di una stanza - Inizio
export const updateAppuntamento = createAction(
  '[Appuntamenti API ] Update appuntamento', props<{appuntamento: AppuntamentiType.Appuntamento}>(),
);

export const updateAppuntamentoSuccess = createAction(
  '[Appuntamenti API ] Update appuntamento success', props<{updAppuntamento: AppuntamentiType.Appuntamento}>(),
)

export const updateAppuntamentoFailure = createAction(
  '[Appuntamenti API ] Update appuntamento failure', props<{msg: string, error: any}>(),
)
// Aggiornamento di una stanza - Fine

// Inserimento di una stanza - Inizio
export const insertAppuntamento = createAction(
  '[Appuntamenti API ] Insert appuntamento', props<{appuntamento: AppuntamentiType.Appuntamento}>(),
);

export const insertAppuntamentoSuccess = createAction(
  '[Appuntamenti API ] Insert appuntamento success', props<{appuntamento: AppuntamentiType.Appuntamento}>(),
)

export const insertAppuntamentoFailure = createAction(
  '[Appuntamenti API ] Insert appuntamento failure', props<{msg: string, error: any}>(),
)
// Inserimento di una stanza - Fine

// Cancellazione di una stanza - Inizio
export const deleteAppuntamento = createAction(
  '[Appuntamenti API ] Delete appuntamento', props<{id: number}>(),
);

export const deleteAppuntamentoSuccess = createAction(
  '[Appuntamenti API ] Delete appuntamento success', props<{id:number}>(),
)

export const deleteAppuntamentoFailure = createAction(
  '[Appuntamenti API ] Delete appuntamento failure', props<{msg: string, error: any}>(),
)
// Cancellazione di una stanza - Fine
