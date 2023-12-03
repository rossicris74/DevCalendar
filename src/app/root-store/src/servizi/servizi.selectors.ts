import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './servizi.state';
import { ServiziosFeatureKey } from './servizi.reducers';
import { ServiziType } from 'src/app/api/src/lib/servizi/public-api';

export const getServiziState = createFeatureSelector<State>(ServiziosFeatureKey);
const getServiziListState = (state: State) => state.serviziList;

/** Ritorna l'elenco dei documenti cliente*/
export const getServiziList = createSelector(getServiziState, getServiziListState);
export const getServiziList4Group = createSelector( getServiziState,getServiziList, (_, serviziList)  => {
    let listServizi4Group: ServiziType.ListServizi4Group = [];
    if (serviziList?.length > 0){
        serviziList.forEach(servizio => {
            const servizio4Group : ServiziType.Servizio4Group = {id:servizio.id, text: servizio.descrizione, color: servizio.colore, durata: servizio.durata}
            listServizi4Group.push(servizio4Group);}
        )
    }
return listServizi4Group;
})