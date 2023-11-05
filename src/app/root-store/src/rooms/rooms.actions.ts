import { createAction, props } from '@ngrx/store';
import { RoomsType } from 'src/app/api/src/lib/rooms/public-api';
// Lettura di tutte le rooms da db - Inizio
export const getAllRooms = createAction(
  '[Rooms API ] Read all rooms',
);

export const getAllRoomsSuccess = createAction(
  '[Rooms API ] Read all rooms success', props<{roomList: RoomsType.Rooms}>(),
)

export const getAllRoomsFailure = createAction(
  '[Rooms API ] Read all rooms failure', props<{msg: string, error: any}>(),
)
// Lettura di tutte le rooms da db - Fine

// Aggiornamento di una stanza - Inizio
export const updateRoom = createAction(
  '[Rooms API ] Update room', props<{room: RoomsType.Room}>(),
);

export const updateRoomSuccess = createAction(
  '[Rooms API ] Update room success', props<{room: RoomsType.Room}>(),
)

export const updateRoomFailure = createAction(
  '[Rooms API ] Update room failure', props<{msg: string, error: any}>(),
)
// Aggiornamento di una stanza - Fine

// Inserimento di una stanza - Inizio
export const insertRoom = createAction(
  '[Rooms API ] Insert room', props<{room: RoomsType.Room}>(),
);

export const insertRoomSuccess = createAction(
  '[Rooms API ] Insert room success', props<{room: RoomsType.RoomApi}>(),
)

export const insertRoomFailure = createAction(
  '[Rooms API ] Insert room failure', props<{msg: string, error: any}>(),
)
// Inserimento di una stanza - Fine
