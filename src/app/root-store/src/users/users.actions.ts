import { createAction, props } from '@ngrx/store';
import { UsersType } from 'src/app/api/src/lib/users/public-api';
// Lettura di tutti gli utenti da db - Inizio
export const getAllUsers = createAction(
  '[Users API ] Read all users',
);

export const getAllUsersSuccess = createAction(
  '[Users API ] Read all users success', props<{usersList: UsersType.Users}>(),
)

export const getAllUsersFailure = createAction(
  '[Users API ] Read all users failure', props<{msg: string, error: any}>(),
)
// Lettura di tutti gli utenti da db - Fine

// Aggiornamento di un utente - Inizio
export const updateUser = createAction(
  '[Users API ] Update user', props<{updUser: UsersType.User}>(),
);

export const updateUserSuccess = createAction(
  '[Users API ] Update user success', props<{updUser: UsersType.User}>(),
)

export const updateUserFailure = createAction(
  '[Users API ] Update user failure', props<{msg: string, error: any}>(),
)
// Aggiornamento di un utente - Fine

// Inserimento di un utente - Inizio
export const insertUser = createAction(
  '[Users API ] Insert user', props<{insUser: UsersType.User}>(),
);

export const insertUserSuccess = createAction(
  '[Users API ] Insert user success', props<{insUser: UsersType.UserApi}>(),
)

export const insertUserFailure = createAction(
  '[Users API ] Insert user failure', props<{msg: string, error: any}>(),
)
// Inserimento di un utente - Fine

// Cancellazione di un utente - Inizio
export const deleteUser = createAction(
  '[Users API ] Delete user', props<{id: number}>(),
);

export const deleteUserSuccess = createAction(
  '[Users API ] Delete user success', props<{id:number}>(),
)

export const deleteUserFailure = createAction(
  '[Users API ] Delete user failure', props<{msg: string, error: any}>(),
)
// Cancellazione di un utente - Fine
