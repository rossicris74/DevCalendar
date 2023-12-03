import *  as appuntamentiActions from './appuntamenti.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './appuntamenti.state';
import * as Copy from '../../../utils/deep-copy';
import * as AppuntamentiType from '../../../api/src/lib/appuntamenti/appuntamenti.type';

export const AppuntamentiFeatureKey = 'Appuntamenti';

const AppuntamentiReducer = createReducer(
  initialState,
  
  on(appuntamentiActions.getAllAppuntamentiSuccess, (state, {appuntamenti}) => ({
    ...state,
    appuntamenti
  })),

  // on(appuntamentiActions.updateAppuntamentoSuccess, (state, {updAppuntamento}) => {
  //  const idx = state.appuntamenti.findIndex(ele => ele.id === updAppuntamento.id);
  //  const updAppuntamenti: AppuntamentiType.Appuntamenti = Copy.deepCopy(state.appuntamenti);
  //  if (idx > -1) {updAppuntamenti[idx] = updAppuntamento} 
  //  return {...state,
  //  roomList: updAppuntamenti}
  // }),

  on(appuntamentiActions.insertAppuntamentoSuccess, (state, {appuntamento}) => {
    let updAppuntamentiList = Copy.deepCopy(state.appuntamenti);
    updAppuntamentiList.push(appuntamento);
    return {...state,
    roomList: updAppuntamentiList}
  }),

  on(appuntamentiActions.deleteAppuntamentoSuccess, (state, {id}) => {
    const updRoomList = Copy.deepCopy(state.appuntamenti).filter(appuntamento => appuntamento.id !== id);
    return {...state,
    roomList: updRoomList}
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return AppuntamentiReducer(state, action);
}
