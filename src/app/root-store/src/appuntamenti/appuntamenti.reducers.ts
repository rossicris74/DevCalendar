import *  as appuntamentiActions from './appuntamenti.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './appuntamenti.state';
import * as Copy from '../../../utils/deep-copy';
import * as AppuntamentiType from '../../../api/src/lib/appuntamenti/appuntamenti.type';
import * as AppuntamentiHelpers from 'src/app/api/src/lib/appuntamenti/helpers/appuntamenti.helper';


export const AppuntamentiFeatureKey = 'Appuntamenti';

const AppuntamentiReducer = createReducer(
  initialState,
  
  on(appuntamentiActions.getAllAppuntamentiSuccess, (state, {appuntamenti}) => ({
    ...state,
    appuntamenti
  })),

   on(appuntamentiActions.updateAppuntamentoSuccess, (state, {updAppuntamento}) => {
    const idx = state.appuntamenti.findIndex(ele => ele.id === updAppuntamento.id);
    const updAppuntamenti: AppuntamentiType.Appuntamenti = Copy.deepCopy(state.appuntamenti);
    if (idx > -1) {updAppuntamenti[idx] = AppuntamentiHelpers.fromApiToClientInsUpd(updAppuntamento)} 
    return {...state,
      appuntamenti: updAppuntamenti}
   }),

  on(appuntamentiActions.insertAppuntamentoSuccess, (state, {insAppuntamento}) => {
    let updAppuntamentiList = Copy.deepCopy(state.appuntamenti);
    updAppuntamentiList.push(AppuntamentiHelpers.fromApiToClientInsUpd(insAppuntamento));
    return {...state,
      appuntamenti: updAppuntamentiList}
  }),

  on(appuntamentiActions.deleteAppuntamentoSuccess, (state, {id}) => {
    const updAppuntamentiList = Copy.deepCopy(state.appuntamenti).filter(appuntamento => appuntamento.id !== id);
    return {...state,
      appuntamenti: updAppuntamentiList}
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return AppuntamentiReducer(state, action);
}
