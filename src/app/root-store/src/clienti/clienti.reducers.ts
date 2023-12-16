import *  as ClientiActions from './clienti.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './clienti.state';
import * as Copy from '../../../utils/deep-copy';

export const ClientiFeatureKey = 'Clienti';

const ClientiReducer = createReducer(
  initialState,

  on(ClientiActions.getAllClientiSuccess, (state, {clientiList}) => {
    console.log(clientiList)
    return {
    ...state,
    clientiList}
  }),

  on(ClientiActions.updateClienteSuccess, (state, {cliente}) => {
    const idx = state.clientiList.findIndex(ele => ele.id === cliente.id);
    const updClientiList = Copy.deepCopy(state.clientiList);
    if (idx > -1) {updClientiList[idx] = cliente;}
    return {...state,
    clientiList: updClientiList}
  }),

  on(ClientiActions.insertClienteSuccess, (state, {cliente}) => {
    let updClientiList = Copy.deepCopy(state.clientiList);
    updClientiList.push(cliente);
    return {...state,
    clientiList: updClientiList}
  }),

  on(ClientiActions.deleteClienteSuccess, (state, {id}) => {
    const updClientiList = Copy.deepCopy(state.clientiList).filter(cliente => cliente.id !== id);
    return {...state,
    clientiList: updClientiList}
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return ClientiReducer(state, action);
}
