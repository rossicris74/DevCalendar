import *  as serviziActions from './servizi.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './servizi.state';
import * as Copy from '../../../utils/deep-copy';
import * as ServiziType from '../../../api/src/lib/servizi/servizio.type';

export const ServiziosFeatureKey = 'Servizi';

const ServiziosReducer = createReducer(
  initialState,

  on(serviziActions.getAllServiziSuccess, (state, {serviziList}) => ({
    ...state,
    serviziList
  })),

  on(serviziActions.updateServizioSuccess, (state, {servizio}) => {
    const idx = state.serviziList.findIndex(ele => ele.id === servizio.id);
    const updServizio = idx >-1 ? {id:servizio.id, descrizione:servizio.descrizione, durata: servizio.durata, colore: servizio.colore} : servizio;
    const updServiziList = Copy.deepCopy(state.serviziList);
    if (idx > -1) {updServiziList[idx] = updServizio;}
    return {...state,
    serviziList: updServiziList}
  }),

  on(serviziActions.insertServizioSuccess, (state, {servizio}) => {
    const updServizio: ServiziType.Servizio = {id:servizio.id, descrizione:servizio?.descrizione ? servizio.descrizione:'' ,durata: servizio.durata, colore: servizio.colore}
    let updServiziList = Copy.deepCopy(state.serviziList);
    updServiziList.push(updServizio);
    return {...state,
    serviziList: updServiziList}
  }),

  on(serviziActions.deleteServizioSuccess, (state, {id}) => {
    const updServiziList = Copy.deepCopy(state.serviziList).filter(servizio => servizio.id !== id);
    return {...state,
    serviziList: updServiziList}
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return ServiziosReducer(state, action);
}
