import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './users.state';
import { UsersFeatureKey } from './users.reducers';

export const getUsersState = createFeatureSelector<State>(UsersFeatureKey);
const getUsersListState = (state: State) => state.usersList;

/** Ritorna l'elenco degli users*/
export const getUsersList = createSelector(getUsersState, getUsersListState);