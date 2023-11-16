import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './servizi.state';
import { ServiziosFeatureKey } from './servizi.reducers';

export const getServiziState = createFeatureSelector<State>(ServiziosFeatureKey);
const getServiziListState = (state: State) => state.serviziList;

/** Ritorna l'elenco dei documenti cliente*/
export const getServiziList = createSelector(getServiziState, getServiziListState);