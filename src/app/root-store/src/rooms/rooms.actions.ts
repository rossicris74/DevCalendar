import { createAction, props } from '@ngrx/store';
import { RoomsType } from 'src/app/api/src/lib/rooms/public-api';
// Lettura di tutte le rooms da db - Inizio
export const getAllRoms = createAction(
  '[Rooms API ] Read all rooms',
);

export const getAllRoomsSuccess = createAction(
  '[Rooms API ] Read all rooms success', props<{roomsList: RoomsType.Rooms}>(),
)

export const getAllRoomsFailure = createAction(
  '[Rooms API ] Read all rooms failure', props<{msg: string, error: any}>(),
)
// Lettura di tutte le rooms da db - Fine
