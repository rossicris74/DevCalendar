import *  as usersActions from './users.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './users.state';
import * as Copy from '../../../utils/deep-copy';
import * as UsersType from '../../../api/src/lib/users/user.type';

export const UsersFeatureKey = 'Users';

const UsersReducer = createReducer(
  initialState,

  on(usersActions.getAllUsersSuccess, (state, {usersList}) => ({
    ...state,
    usersList
  })),

  on(usersActions.updateUserSuccess, (state, {updUser}) => {
    const idx = state.usersList.findIndex(ele => ele.id === updUser.id);
    const updUsersList = Copy.deepCopy(state.usersList);
    if (idx > -1) {updUsersList[idx] = updUser;}
    return {...state,
    usersList: updUsersList}
  }),

  on(usersActions.insertUserSuccess, (state, {insUser}) => {
    let usersList = Copy.deepCopy(state.usersList);
    usersList.push(insUser);
    return {...state,
    usersList}
  }),

  on(usersActions.deleteUserSuccess, (state, {id}) => {
    const usersList = Copy.deepCopy(state.usersList).filter(user => user.id !== id);
    return {...state,
    usersList}
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return UsersReducer(state, action);
}
