import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';
import { TestFeatureKey } from './test.reducers';

export const getTestState = createFeatureSelector<State>(TestFeatureKey);
const getStateId = (state: State) => state.id;
const getStateDescr = (state: State) => state.descr;

/** Ritorna l'elenco dei documenti cliente*/
export const getId = createSelector(getTestState, getStateId);
export const getDescr = createSelector(getTestState, getStateDescr);