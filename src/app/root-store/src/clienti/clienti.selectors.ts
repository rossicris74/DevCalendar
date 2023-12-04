import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './clienti.state';
import { ClientiFeatureKey } from './clienti.reducers';
import { ClientiType } from 'src/app/api/src/lib/clienti/public-api';

export const getClientiState = createFeatureSelector<State>(ClientiFeatureKey);
const getClientiListState = (state: State) => state.clientiList;

/** Ritorna l'elenco dei documenti cliente*/
export const getClientiList = createSelector(getClientiState, getClientiListState);
export const getClientiList4Group = createSelector( getClientiState,getClientiList, (_, clientiList)  => {
    let listClienti4Group: ClientiType.ListClienti4Group = [];
    if (clientiList?.length > 0){
        clientiList.forEach(cliente => {
            const cliente4Group : ClientiType.Cliente4Group = {id:cliente.id, text: cliente.cognome + ' ' + cliente.nome,nome: cliente.nome, cognome: cliente.cognome, email: cliente.email}
            listClienti4Group.push(cliente4Group);}
        )
    }
return listClienti4Group;
})